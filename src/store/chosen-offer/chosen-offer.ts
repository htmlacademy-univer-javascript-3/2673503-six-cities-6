import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ChosenOffer} from '@/types/state.ts';
import {NameSpace} from '@/constants/namespaces.ts';
import {Comment, Offer} from '@/types/api.ts';

const initialState: ChosenOffer = {
  offer: undefined,
  nearbyOffers: [],
  comments: [],
  notFound: false,
  isLoading: false,
};

export const chosenOffer = createSlice({
  name: NameSpace.ChosenOffer,
  initialState,
  reducers: {
    loadOffer: (state: ChosenOffer, action: PayloadAction<{
      offer: Offer;
      nearbyOffers: Offer[];
      comments: Comment[];
    }>) => {
      state.offer = action.payload.offer;
      state.nearbyOffers = action.payload.nearbyOffers;
      state.comments = action.payload.comments;
      state.notFound = false;
      state.isLoading = false;
    },
    setIsLoading: (state: ChosenOffer) => {
      state.notFound = false;
      state.isLoading = true;
    },
    setOfferNotFound: (state: ChosenOffer) => {
      state.notFound = true;
      state.isLoading = false;
    },
    addComment: (state: ChosenOffer, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    clearFavorite: (state: ChosenOffer) => {
      if (state.offer !== undefined) {
        state.offer.isFavorite = false;
      }
    }
  },
});

export const {loadOffer, addComment, setIsLoading, setOfferNotFound, clearFavorite} = chosenOffer.actions;
