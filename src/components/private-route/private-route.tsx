import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { type PropsWithChildren } from 'react';

interface PrivateRouteProps extends PropsWithChildren {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
