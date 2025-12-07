import {createAction} from '@reduxjs/toolkit';
import {City, Comment, Offer} from '@/types/api.ts';
import {SortOption} from '@/types/sort-option.ts';
import {AppRoute} from '@/constants/app-routes.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';

export const loadOffers = createAction<{ offers: Offer[] }>('offers/loadOffers');
export const loadOffer = createAction<{ offer: Offer; nearbyOffers: Offer[]; comments: Comment[] }>('offer/loadOffer');
export const setOfferNotFoundStatus = createAction<boolean>('offer/setOfferNotFoundStatus');
export const setCity = createAction<{ city: City }>('offers/setCity');
export const setSortOption = createAction<{ sortOption: SortOption }>('offers/setSortOption');
export const setSelectedOffer = createAction<{ selectedOffer: Offer | undefined }>('offers/setSelectedOffer');
export const setIsLoading = createAction<boolean>('user/isLoading');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoute>('user/redirectToRoute');

export const setEmail = createAction<string>('user/setEmail');
export const setAvatarUrl = createAction<string>('user/setAvatarUrl');

export const addComment = createAction<Comment>('comment/addComment');
