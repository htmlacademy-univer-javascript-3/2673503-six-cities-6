import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '@/types/api.ts';
import {SortOption} from '@/types/sort-option.ts';

export const setOffers = createAction<{ offers: Offer[] }>('setOffers');
export const setCity = createAction<{ city: City }>('setCity');
export const setSortOption = createAction<{ sortOption: SortOption }>('setSortOption');
export const setSelectedOffer = createAction<{ selectedOffer: Offer | undefined }>('setSelectedOffer');
