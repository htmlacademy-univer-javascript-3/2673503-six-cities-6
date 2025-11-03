import {Offer} from '@/api/types.ts';
import {useState} from 'react';
import PlaceCard from '@/components/place-card/place-card.tsx';

export interface OfferListProps {
  offers: Offer[];
  page: string;
  width: number;
  height: number;
}

export default function OfferList({offers, page, width, height}: OfferListProps) {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  console.log(activeOffer);
  return (
    <>
      {offers.map((offer) => (
        <div key={offer.id} onMouseOver={() => setActiveOffer(offer)}>
          <PlaceCard offer={offer} page={page} width={width} height={height}/>
        </div>
      ))}
    </>
  );
}
