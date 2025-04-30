import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { CommentDto, OfferDetailsDto, OfferDto } from '../types/types';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
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
  async (_arg, { extra: api }) => {
    await api.get<UserData>(APIRoute.Login);
  }
);


export const fetchOffersAction = createAsyncThunk<OfferDto[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferDto[]>(APIRoute.Offers);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, void, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/logoutAction',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchOfferData = createAsyncThunk<{
  offer: OfferDetailsDto | null;
  nearby: OfferDto[];
  comments: CommentDto[];
}, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offer/fetchOfferData',
  async (id, { extra: api }) => {
    try {
      const { data: offer } = await api.get<OfferDetailsDto>(`${APIRoute.Offers}/${id}`);
      const { data: nearby } = await api.get<OfferDto[]>(`${APIRoute.Offers}/${id}/nearby`);
      const { data: comments } = await api.get<CommentDto[]>(`${APIRoute.Comments}/${id}`);

      return { offer, nearby, comments };
    } catch {
      return { offer: null, nearby: [], comments: [] };
    }

  }
);

export const sendCommentAction = createAsyncThunk<CommentDto[], CommentPostData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'comments/send',
  async ({ id, comment, rating }, { extra: api }) => {
    await api.post<CommentDto[]>(`${APIRoute.Comments}/${id}`, { comment, rating });

    const { data: comments } = await api.get<CommentDto[]>(`${APIRoute.Comments}/${id}`);

    return comments;
  }
);
