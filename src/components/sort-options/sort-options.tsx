import {useState} from 'react';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {setSortOption} from '@/store/actions.ts';
import {SortOption} from '@/constants/sort-option.ts';
import {useAppDispatch} from '@/components/hooks/use-app-dispatch.tsx';


export default function SortOptions() {
  const [isShow, setIsShow] = useState(false);
  const currentOption = useAppSelector((state) => state.sortOption);
  const dispatch = useAppDispatch();

  const handleSortOptionChoose = (sortOptions: SortOption) => {
    dispatch(setSortOption({sortOption: sortOptions}));
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsShow(!isShow)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isShow &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortOption).map((option) =>
            (
              <li
                key={option as SortOption}
                className={`places__option ${option === currentOption && 'places__option--active'}`}
                tabIndex={0}
                onClick={() => handleSortOptionChoose(option as SortOption)}
              >{option}
              </li>
            ))}
        </ul>}
    </form>
  );
}
