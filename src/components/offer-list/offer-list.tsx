import {Offer} from '@/api/types.ts';
import PlaceCard from '@/components/place-card/place-card.tsx';
import {useAppDispatch} from '@/components/hooks/use-app-dispatch.tsx';
import {setSelectedOffer} from '@/store/actions.ts';

export interface OfferListProps {
  offers: Offer[];
  page: string;
  width: number;
  height: number;
}

export default function OfferList({offers, page, width, height}: OfferListProps) {
  const dispatch = useAppDispatch();
  const handleOfferChoose = (offer: Offer | undefined) => {
    dispatch(setSelectedOffer({selectedOffer: offer}));
  };
  return (
    <>
      {offers.map((offer) => (
        <div key={offer.id}
          onMouseEnter={() => handleOfferChoose(offer)}
          onMouseLeave={() => handleOfferChoose(undefined)}
        >
          <PlaceCard offer={offer} page={page} width={width} height={height}/>
        </div>
      ))}
    </>
  );
}
