import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';
import EmptyFavoriteOfferList from '@/components/empty-favorite-offer-list/empty-favorite-offer-list.tsx';
import FavoriteOfferList from '@/components/favorite-offer-list/favorite-offer-list.tsx';
import Spinner from '@/components/spinner/spinner.tsx';
import {useAppSelector} from '@/hooks/use-app-selector.tsx';

export default function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.offers).filter((offer) => offer.isFavorite);
  const isLoading = useAppSelector((state) => state.isLoading);
  const offerListEmpty = !isLoading && favoriteOffers.length === 0;

  return (
    <div className={`page ${offerListEmpty && 'page--favorites-empty'}`}>
      <Header/>
      {isLoading ? <Spinner/> :
        <main className={`page__main page__main--favorites ${offerListEmpty && 'page__main--favorites-empty'}`}>
          <div className="page__favorites-container container">
            {offerListEmpty
              ? <EmptyFavoriteOfferList/>
              : <FavoriteOfferList offers={favoriteOffers}/>}
          </div>
        </main>}
      <Footer/>
    </div>);
}
