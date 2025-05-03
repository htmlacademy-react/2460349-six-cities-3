import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store';
import { selectAuthorizationStatus } from '../../store/user-slice/user-selectors';

function PrivateRoute({ children }: React.PropsWithChildren) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
