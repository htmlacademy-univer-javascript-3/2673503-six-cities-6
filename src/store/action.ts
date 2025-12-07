import {createAction} from '@reduxjs/toolkit';
import {City, Offer} from '@/types/api.ts';
import {SortOption} from '@/types/sort-option.ts';
import {AppRoute} from '@/constants/app-routes.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';

export const loadOffers = createAction<{ offers: Offer[] }>('offers/setOffers');
export const setCity = createAction<{ city: City }>('offers/setCity');
export const setSortOption = createAction<{ sortOption: SortOption }>('offers/setSortOption');
export const setSelectedOffer = createAction<{ selectedOffer: Offer | undefined }>('offers/setSelectedOffer');
export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');
