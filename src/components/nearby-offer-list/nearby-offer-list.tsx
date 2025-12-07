import OfferList from '@/components/offer-list/offer-list.tsx';
import {Offer} from '@/types/api.ts';
import {MAX_NEARBY_OFFERS_COUNT} from '@/constants/settings.ts';
import {memo} from 'react';

interface NearbyOfferListProps {
  nearbyOffers: Offer[];
}

function NearbyOfferList({nearbyOffers}: NearbyOfferListProps) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          <OfferList offers={nearbyOffers.slice(0, MAX_NEARBY_OFFERS_COUNT)} page={'near-places'}/>
        </div>
      </section>
    </div>);
}

const MemoizedNearbyOfferList = memo(NearbyOfferList);
export default MemoizedNearbyOfferList;
