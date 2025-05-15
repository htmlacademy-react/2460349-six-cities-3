import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store';
import { selectAuthorizationStatus } from '../../store/user-slice/user-selectors';

function PublicRoute({ children }: React.PropsWithChildren) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Root} />
  );
}

export default PublicRoute;
