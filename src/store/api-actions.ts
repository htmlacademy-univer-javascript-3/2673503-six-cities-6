import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute} from '@/constants/api-routes.ts';
import {setOffers} from '@/store/action.ts';
import {AppDispatch, AppState} from '@/types/state.ts';
import {Offer} from '@/types/api.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffers({offers: data}));
  },
);
