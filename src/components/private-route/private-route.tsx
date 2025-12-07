import {Navigate} from 'react-router-dom';
import {AppRoute} from '@/constants/app-routes.ts';
import {AuthorizationStatus} from '@/constants/auth-status.ts';
import {useAppSelector} from '@/hooks/use-app-selector.tsx';

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
