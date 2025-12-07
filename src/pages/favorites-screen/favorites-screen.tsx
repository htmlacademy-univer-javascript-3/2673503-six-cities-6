import Footer from '@/components/footer/footer.tsx';
import Header from '@/components/header/header.tsx';
import {groupBy} from '@/utils/utils.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '@/constants/app-routes.ts';
import PlaceCard from '@/components/place-card/place-card.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';

export default function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const groupedCityOffers = groupBy(offers, (offer) => offer.city.name, (offer) => offer);

  const cityOffers = Object.keys(groupedCityOffers).map((city) => (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {groupedCityOffers[city]
          .filter((offer) => offer.isFavorite)
          .map((offer) =>
            <PlaceCard offer={offer} page={'favorites'} width={150} height={110} key={offer.id}/>)}
      </div>
    </li>));

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityOffers}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>);
}
