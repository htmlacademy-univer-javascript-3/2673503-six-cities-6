import {store} from '@/store';
import {SortOption} from '@/types/sort-option.ts';
import {City, Offer} from '@/types/api.ts';

export type AppState = {
  city: City;
  offers: Offer[] | undefined;
  sortOption: SortOption;
  selectedOffer: Offer | undefined;
};
export type AppDispatch = typeof store.dispatch;
