import {Navigate} from 'react-router-dom';
import {AppRoute} from '@/constants/app-routes.ts';
import {useAppSelector} from '@/components/hooks/use-app-selector.tsx';
import {AuthorizationStatus} from '@/constants/auth-status.ts';

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login}/>;
}
