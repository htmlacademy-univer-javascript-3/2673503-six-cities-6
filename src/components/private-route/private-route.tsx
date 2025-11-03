import {Navigate} from 'react-router-dom';
import {AppRoute} from '@/constants/app-routes.ts';

interface PrivateRouteProps {
  hasAccess?: boolean;
  children: JSX.Element;
}

export default function PrivateRoute({hasAccess, children}: PrivateRouteProps): JSX.Element {
  return hasAccess ? children : <Navigate to={AppRoute.Login}/>;
}
