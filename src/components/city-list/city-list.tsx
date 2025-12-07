import {setCity} from '@/store/action.ts';
import {City} from '@/types/api.ts';
import {useAppSelector} from '@/hooks/use-app-selector.tsx';
import {useAppDispatch} from '@/hooks/use-app-dispatch.tsx';

export interface CityListProps {
  cities: City[];
}

export default function CityList({cities}: CityListProps) {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleCityChoose = (city: City) => {
    dispatch(setCity({city: city}));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city.name}>
            <a
              className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : ''}`}
              onClick={() => handleCityChoose(city)}
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>);
}
