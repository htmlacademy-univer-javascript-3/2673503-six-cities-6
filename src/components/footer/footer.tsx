import {Link} from 'react-router-dom';
import {AppRoute} from '@/constants/app-routes.ts';

export default function Footer() {
  return (
    <footer className="footer container">
      <Link to={AppRoute.Root}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  );
}
