import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import EmptyFavoriteOfferList from '@/components/empty-favorite-offer-list/empty-favorite-offer-list.tsx';
import FavoriteOfferList from '@/components/favorite-offer-list/favorite-offer-list.tsx';
import Spinner from '@/components/spinner/spinner.tsx';

export default function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const isOfferListEmpty = !isOffersDataLoading && offers.length === 0;

  return (
    <div className={`page ${isOfferListEmpty && 'page--favorites-empty'}`}>
      <Header/>
      {isOffersDataLoading ? <Spinner/> :
        <main className={`page__main page__main--favorites ${isOfferListEmpty && 'page__main--favorites-empty'}`}>
          <div className="page__favorites-container container">
            {isOfferListEmpty
              ? <EmptyFavoriteOfferList/>
              : <FavoriteOfferList offers={offers}/>}
          </div>
        </main>}
      <Footer/>
    </div>);
}
