import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setCity,
  loadOffers,
  setSelectedOffer,
  setSortOption,
  setOffersDataLoadingStatus
} from '@/store/action.ts';
import {cities} from '@/constants/cities.ts';
import {AppState} from '@/types/state.ts';
import {SortOption} from '@/types/sort-option.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';

const initialState: AppState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  city: cities[0],
  offers: [],
  sortOption: SortOption.Default,
  selectedOffer: undefined,
  isOffersDataLoading: false,
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
