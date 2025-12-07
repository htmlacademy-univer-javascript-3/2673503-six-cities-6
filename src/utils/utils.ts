import {SortOption} from '@/constants/sort-option.ts';
import {Offer} from '@/api/types.ts';

export function groupBy<TSource, TValue>(
  source: TSource[],
  keySelector: (item: TSource) => string,
  valueSelector: (item: TSource) => TValue
): { [key: string]: TValue[] } {
  const groupedResults: { [key: string]: TValue[] } = {};

  source.forEach((item) => {
    const key = keySelector(item);
    const value = valueSelector(item);

    if (groupedResults[key]) {
      groupedResults[key].push(value);
    } else {
      groupedResults[key] = [value];
    }
  });

  return groupedResults;
}

export function GetOfferComparer(sortOption: SortOption) {
  switch (sortOption) {
    case SortOption.Default:
      return undefined;
    case SortOption.PriceLowToHigh:
      return (a: Offer, b: Offer) => a.price - b.price;
    case SortOption.PriceHighToLow:
      return (a: Offer, b: Offer) => b.price - a.price;
    case SortOption.TopRatedFirst:
      return (a: Offer, b: Offer) => b.rating - a.rating;
  }
}
