import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { CommentDto, OfferDetailsDto, OfferDto } from '../types/types';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadOffers, requireAuthorization, setComments, setCurrentOffer, setDataLoadingStatus, setNearbyOffers, setOfferDataLoadingStatus, setUserData } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { CommentPostData } from '../types/comment-post-data';


export const fetchUserData = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/fetchUserData',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(setUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);


export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatus(true));
    const { data } = await api.get<OfferDto[]>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    const { token } = data;
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/logoutAction',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);

export const fetchOfferData = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offer/fetchOfferData',
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(setOfferDataLoadingStatus(true));
      const { data: offer } = await api.get<OfferDetailsDto>(`${APIRoute.Offers}/${id}`);
      const { data: nearby } = await api.get<OfferDto[]>(`${APIRoute.Offers}/${id}/nearby`);
      const { data: comments } = await api.get<CommentDto[]>(`${APIRoute.Comments}/${id}`);

      dispatch(setCurrentOffer(offer));
      dispatch(setNearbyOffers(nearby));
      dispatch(setComments(comments));
    } catch (error) {
      dispatch(setCurrentOffer(null));
    } finally {
      dispatch(setOfferDataLoadingStatus(false));
    }

  }
);

export const sendCommentAction = createAsyncThunk<void, CommentPostData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'comments/send',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    await api.post<CommentDto[]>(`${APIRoute.Comments}/${id}`, { comment, rating });

    const { data: comments } = await api.get<CommentDto[]>(`${APIRoute.Comments}/${id}`);

    dispatch(setComments(comments));
  }
);
