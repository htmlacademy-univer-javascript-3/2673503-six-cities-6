import Logo from '@/components/logo/logo.tsx';
import NavigationBar from '@/components/navigation-bar/navigation-bar.tsx';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {AuthorizationStatus} from '@/constants/auth-status.ts';
import NavigationBarNotLogged from '@/components/navigation-bar-not-logged/navigation-bar-not-logged.tsx';

export default function Header() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const authorized = authorizationStatus === AuthorizationStatus.Auth;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo/>
          {authorized
            ? <NavigationBar email={'imposter@gmail.com'} favoriteOffersCount={42}/>
            : <NavigationBarNotLogged/>}
        </div>
      </div>
    </header>);
}
