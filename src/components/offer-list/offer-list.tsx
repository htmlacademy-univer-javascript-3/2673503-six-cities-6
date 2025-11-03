import {Offer} from '@/api/types.ts';
import PlaceCard from '@/components/place-card/place-card.tsx';

export interface OfferListProps {
  offers: Offer[];
  selectedOffer: Offer | undefined;
  setSelectedOffer: (offer: Offer | undefined) => void;
  page: string;
  width: number;
  height: number;
}

export default function OfferList({offers, selectedOffer, setSelectedOffer, page, width, height}: OfferListProps) {
  console.log(selectedOffer);
  return (
    <>
      {offers.map((offer) => (
        <div key={offer.id}
          onMouseEnter={() => setSelectedOffer(selectedOffer)}
          onMouseLeave={() => setSelectedOffer(undefined)}
        >
          <PlaceCard offer={offer} page={page} width={width} height={height}/>
        </div>
      ))}
    </>
  );
}
