import {store} from '@/store';
import {SortOption} from '@/constants/sort-option.ts';
import {City, Offer} from '@/api/types.ts';

export type State = {
    city: City;
    offers: Offer[];
    sortOption: SortOption;
    selectedOffer: Offer | undefined;
};
export type AppDispatch = typeof store.dispatch;
