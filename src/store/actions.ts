import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '@/api/types.ts';

export const updateOffers = createAction<{ offers: Offer[] }>('setOffers');
export const updateCity = createAction<{ city: City }>('setCity');
