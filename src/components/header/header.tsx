import Logo from '@/components/logo/logo.tsx';
import NavigationBar from '@/components/navigation-bar/navigation-bar.tsx';
import {AuthorizationStatus} from '@/constants/auth-status.ts';
import NavigationBarNotLogged from '@/components/navigation-bar-not-logged/navigation-bar-not-logged.tsx';
import {useAppSelector} from '@/hooks/use-app-selector.tsx';

export default function Header() {
  const avatarUrl = useAppSelector((state) => state.avatarUrl);
  const email = useAppSelector((state) => state.email);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const authorized = authorizationStatus === AuthorizationStatus.Auth;
  const favoriteOffersCount = useAppSelector((state) => state.offers).filter((offer) => offer.isFavorite).length;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo/>
          {authorized
            ? <NavigationBar avatarUrl={avatarUrl!} email={email!} favoriteOffersCount={favoriteOffersCount}/>
            : <NavigationBarNotLogged/>}
        </div>
      </div>
    </header>);
}
