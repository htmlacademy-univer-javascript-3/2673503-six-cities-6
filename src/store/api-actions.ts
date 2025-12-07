import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '@/constants/api-routes.ts';
import {
  redirectToRoute,
  requireAuthorization,
  loadOffers,
  setIsLoading,
  loadOffer, setOfferNotFoundStatus, setEmail, setAvatarUrl, addComment
} from '@/store/action.ts';
import {AppDispatch, AppState} from '@/types/state.ts';
import {Comment, Offer, User} from '@/types/api.ts';
import {dropToken, saveToken} from '@/api/token.ts';
import {AuthData} from '@/types/auth-data.ts';
import {AppRoute} from '@/constants/app-routes.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';
import {CommentInfo} from '@/types/comment-info.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setIsLoading(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers({offers: data}));
    dispatch(setIsLoading(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, { offerId: string }, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async ({offerId}, {dispatch, extra: api}) => {
    try {
      dispatch(setOfferNotFoundStatus(false));
      dispatch(setIsLoading(true));
      const {data: offer} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      const {data: nearbyOffers} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
      const {data: comments} = await api.get<Comment[]>(`${APIRoute.Comments}/${offerId}`);
      dispatch(loadOffer({offer, nearbyOffers, comments}));
      dispatch(setIsLoading(false));
    } catch {
      dispatch(setOfferNotFoundStatus(true));
      dispatch(setIsLoading(false));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: {email, avatarUrl}} = await api.get<User>(APIRoute.Login);
      dispatch(setAvatarUrl(avatarUrl));
      dispatch(setEmail(email));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: login, password: password}, {dispatch, extra: api}) => {
    const {data: {token, email, avatarUrl}} = await api.post<User>(APIRoute.Login, {email: login, password});
    saveToken(token);
    dispatch(setAvatarUrl(avatarUrl));
    dispatch(setEmail(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const postCommentAction = createAsyncThunk<void, CommentInfo, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'comment/postComment',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    dispatch(addComment(data));
  },
);
