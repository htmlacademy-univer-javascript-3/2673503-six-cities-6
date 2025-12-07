import PlaceCard from '@/components/place-card/place-card.tsx';
import {setSelectedOffer} from '@/store/action.ts';
import {Offer} from '@/types/api.ts';
import {useAppDispatch} from '@/hooks/use-app-dispatch.tsx';

export interface OfferListProps {
  offers: Offer[];
  page: string;
}

export default function OfferList({offers, page}: OfferListProps) {
  const dispatch = useAppDispatch();
  const handleOfferUpdate = (offer: Offer | undefined) => {
    dispatch(setSelectedOffer({selectedOffer: offer}));
  };
  return (
    <>
      {offers.map((offer) => (
        <div key={offer.id}
          onMouseEnter={() => handleOfferUpdate(offer)}
          onMouseLeave={() => handleOfferUpdate(undefined)}
        >
          <PlaceCard offer={offer} page={page} width={260} height={200}/>
        </div>
      ))}
    </>);
}
