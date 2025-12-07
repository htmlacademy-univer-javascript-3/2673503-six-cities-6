import {useState} from 'react';
import {SortOption} from '@/types/sort-option.ts';
import {useAppDispatch} from '@/hooks/use-app-dispatch.tsx';
import {useAppSelector} from '@/hooks/use-app-selector.tsx';
import {setSortOption} from '@/store/action.ts';


export default function SortOptions() {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const currentSortOption = useAppSelector((state) => state.sortOption);

  const handleSortOptionChoose = (sortOptions: SortOption) => {
    dispatch(setSortOption({sortOption: sortOptions}));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortOption).map((option) =>
            (
              <li
                key={option as SortOption}
                className={`places__option ${option === currentSortOption && 'places__option--active'}`}
                tabIndex={0}
                onClick={() => handleSortOptionChoose(option as SortOption)}
              >{option}
              </li>
            ))}
        </ul>}
    </form>
  );
}
