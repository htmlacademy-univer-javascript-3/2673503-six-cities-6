import {Link} from 'react-router-dom';
import {AppRoute} from '@/constants/app-routes.ts';
import {useAppDispatch} from '@/components/hooks/use-app-dispatch.tsx';
import {logoutAction} from '@/store/api-actions.ts';

interface NavigationBarProps {
  email: string;
  favoriteOffersCount: number;
}

export default function NavigationBar({email, favoriteOffersCount}: NavigationBarProps) {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{email}</span>
            <span className="header__favorite-count">{favoriteOffersCount}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a
            className="header__nav-link"
            onClick={handleSignOut}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>);
}
