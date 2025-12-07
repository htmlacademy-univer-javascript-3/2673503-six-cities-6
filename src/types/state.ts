import {store} from '@/store';
import {SortOption} from '@/types/sort-option.ts';
import {City, Comment, Email, Offer, Url} from '@/types/api.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';

export type AppState = {
  authorizationStatus: AuthorizationStatus;
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  selectedOffer: Offer | undefined;
  isLoading: boolean;
  offerNotFound: boolean;
  offer: Offer;
  nearbyOffers: Offer[];
  comments: Comment[];
  email: Email | undefined;
  avatarUrl: Url | undefined;
  errorPostingComment: string | undefined;
};
export type AppDispatch = typeof store.dispatch;
