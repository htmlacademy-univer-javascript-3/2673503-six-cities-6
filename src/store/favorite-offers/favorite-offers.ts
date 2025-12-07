import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '@/constants/namespaces.ts';
import {Offer} from '@/types/api.ts';
import {FavoriteOffers} from '@/types/state.ts';

const initialState: FavoriteOffers = {
  favoriteOffers: [],
  isLoading: false,
};

export const favoriteOffers = createSlice({
  name: NameSpace.FavoriteOffers,
  initialState,
  reducers: {
    updateFavorites: (state, action: PayloadAction<Offer[]>) => {
      state.favoriteOffers = action.payload;
      state.isLoading = false;
    },
    setFavoriteStatus: (state, action: PayloadAction<Offer>) => {
      const offer = state.favoriteOffers.find((currentOffer) => currentOffer.id === action.payload.id);
      if (offer) {
        offer.isFavorite = action.payload.isFavorite;
      }
    },
    setFavoriteOffersIsLoading: (state) => {
      state.isLoading = true;
    }
  },
});

export const {updateFavorites, setFavoriteOffersIsLoading, setFavoriteStatus} = favoriteOffers.actions;
