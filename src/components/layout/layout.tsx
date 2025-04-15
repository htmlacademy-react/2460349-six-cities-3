import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import clsx from 'clsx';

function Layout() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isFavoritesPage = location.pathname === '/favorites';

  const pageClass = clsx('page', {
    'page--gray page--main': location.pathname === '/',
    'page--gray page--login': isLoginPage,
  });

  return (
    <div className={pageClass}>
      <Header isLoginPage={isLoginPage} />
      <Outlet />
      {isFavoritesPage && <Footer />}
    </div>
  );
}

export default Layout;
