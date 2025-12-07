import {createReducer} from '@reduxjs/toolkit';
import {cities} from '@/mocks/cities.ts';
import {offers} from '@/mocks/offers.ts';
import {setCity, setOffers, setSelectedOffer, setSortOption} from '@/store/actions.ts';
import {SortOption} from '@/constants/sort-option.ts';
import {State} from '@/state/state.ts';

const initialState: State = {
  city: cities[5],
  offers: offers.filter((offer) => offer.city.name === cities[5].name),
  sortOption: SortOption.Default,
  selectedOffer: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload.sortOption;
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload.selectedOffer;
    });
});
