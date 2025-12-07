import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setCity,
  loadOffers,
  setSelectedOffer,
  setSortOption,
  setIsLoading, loadOffer, setOfferNotFoundStatus, setEmail, setAvatarUrl, addComment
} from '@/store/action.ts';
import {cities} from '@/constants/cities.ts';
import {AppState} from '@/types/state.ts';
import {SortOption} from '@/types/sort-option.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';
import {Offer} from '@/types/api.ts';

const initialState: AppState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  city: cities[5],
  offers: [],
  sortOption: SortOption.Default,
  selectedOffer: undefined,
  isLoading: false,
  offerNotFound: false,
  offer: undefined as unknown as Offer,
  nearbyOffers: [],
  comments: [],
  email: undefined,
  avatarUrl: undefined,
  errorPostingComment: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload.sortOption;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload.selectedOffer;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload.offer;
      state.nearbyOffers = action.payload.nearbyOffers;
      state.comments = action.payload.comments;
    })
    .addCase(setOfferNotFoundStatus, (state, action) => {
      state.offerNotFound = action.payload;
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setAvatarUrl, (state, action) => {
      state.avatarUrl = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments.push(action.payload);
    });
});
