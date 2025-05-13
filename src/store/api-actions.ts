import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferDetailsDto, OfferDto } from '../types/offer-dto';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { CommentPostData } from '../types/comment-post-data';
import { FavoritesData } from '../types/favorites-data';
import { CommentDto } from '../types/comment-dto';

export const fetchOffers = createAsyncThunk<OfferDto[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferDto[]>(APIRoute.Offers);
    return data;
  }
);

export const checkAuth = createAsyncThunk<UserData, undefined, {
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

export const fetchOfferWithNearby = createAsyncThunk<{
  offer: OfferDetailsDto | null;
  nearby: OfferDto[];
}, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferWithNearby',
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
export const fetchOfferComments = createAsyncThunk<{
  comments: CommentDto[];
}, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'reviews/fetchOfferComments',
  async (id, { extra: api }) => {
    try {
      const { data: comments } = await api.get<CommentDto[]>(`${APIRoute.Comments}/${id}`);
      return { comments };
    } catch {
      return { comments: [] };
    }

  }
);

export const sendComment = createAsyncThunk<CommentDto[], CommentPostData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'reviews/sendComment',
  async ({ id, comment, rating }, { extra: api }) => {
    await api.post<CommentDto[]>(`${APIRoute.Comments}/${id}`, { comment, rating });
    const { data: comments } = await api.get<CommentDto[]>(`${APIRoute.Comments}/${id}`);
    return comments;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<OfferDto[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offers/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferDto[]>(APIRoute.Favorite);
    return data;
  }
);

export const toggleFavoriteStatus = createAsyncThunk<OfferDto, FavoritesData, {
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

export const login = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(fetchOffers());
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffers());
  }
);
