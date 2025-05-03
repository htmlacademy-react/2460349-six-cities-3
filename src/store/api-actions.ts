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
import { FavoritesData } from '../types/favorites-data';

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

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
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

export const fetchOfferData = createAsyncThunk<{
  offer: OfferDetailsDto | null;
  nearby: OfferDto[];
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

      return { offer, nearby };
    } catch {
      return { offer: null, nearby: [] };
    }

  }
);
export const fetchCommentsOfferData = createAsyncThunk<{
  comments: CommentDto[];
}, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offer/fetchCommentsOfferData',
  async (id, { extra: api }) => {
    try {
      const { data: comments } = await api.get<CommentDto[]>(`${APIRoute.Comments}/${id}`);

      return { comments };
    } catch {
      return { comments: [] };
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

export const fetchFavoritesData = createAsyncThunk<OfferDto[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offer/fetchFavoritesData',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferDto[]>(APIRoute.Favorite);
    return data;
  }
);

export const toggleFavoriteStatusAction = createAsyncThunk<OfferDto, FavoritesData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offers/toggleFavoriteStatus',
  async ({ id, status }, { extra: api }) => {
    const { data } = await api.post<OfferDto>(`${APIRoute.Favorite}/${id}/${status}`);
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
    dispatch(fetchOffersAction());
    return data;
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
    dispatch(fetchOffersAction());
  }
);
