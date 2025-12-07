import {Offer} from '@/api/types.ts';
import Header from '@/components/header/header.tsx';
import OfferList from '@/components/offer-list/offer-list.tsx';
import Map from '@/components/map/map.tsx';
import {useState} from 'react';
import CityList from '@/components/city-list/city-list.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {cities} from '@/mocks/cities.ts';

export default function MainScreen(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.offers);
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={cities}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={currentOffers}
                  selectedOffer={selectedOffer}
                  setSelectedOffer={setSelectedOffer}
                  page={'cities'} width={260} height={200}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={currentCity} offers={currentOffers} selectedOffer={selectedOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}
