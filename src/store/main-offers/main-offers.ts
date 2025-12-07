import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '@/constants/namespaces.ts';
import {MainOffers} from '@/types/state.ts';
import {Offer} from '@/types/api.ts';

const initialState: MainOffers = {
  mainOffers: [],
  isLoading: false,
};

export const mainOffers = createSlice({
  name: NameSpace.MainOffers,
  initialState,
  reducers: {
    loadOffers: (state, action: PayloadAction<Offer[]>) => {
      state.mainOffers = action.payload;
      state.isLoading = false;
    },
    setIsLoadingMainOffers: (state) => {
      state.isLoading = true;
    }
  },
});

export const {loadOffers, setIsLoadingMainOffers} = mainOffers.actions;
