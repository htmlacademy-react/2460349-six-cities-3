import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../store';
import { logoutAction } from '../../store/api-actions';
import { memo } from 'react';
import { selectAuthorizationStatus, selectUserData } from '../../store/user-slice/user-selectors';
import { selectFavoriteOffersCount } from '../../store/offers-slice/offers-selectors';

interface Props {
  isLoginPage?: boolean;
}

function HeaderImpl({ isLoginPage = false, }: Props) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserData);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const favorites = useAppSelector(selectFavoriteOffersCount);

  const email = user?.email ?? '';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {!isLoginPage && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={isAuth ? '/favorites' : '/login'}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {isAuth
                      ?
                      <>
                        <span className="header__user-name user__name">{email}</span>
                        <span className="header__favorite-count">{favorites}</span>
                      </>
                      :
                      <span className="header__login">Sign in</span>}
                  </Link>
                </li>
                {isAuth &&
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to="/"
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>}

              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

const Header = memo(HeaderImpl);

export default Header;
