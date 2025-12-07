import GroupedFavoriteOffers from '@/components/grouped-favorite-offers/grouped-favorite-offers.tsx';
import {Offer} from '@/types/api.ts';

interface FavoriteOfferListProps {
  offers: Offer[];
}

export default function FavoriteOfferList({offers}: FavoriteOfferListProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <GroupedFavoriteOffers offers={offers}/>
      </ul>
    </section>);
}
