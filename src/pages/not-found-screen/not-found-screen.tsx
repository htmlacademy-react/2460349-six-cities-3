import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

function NotFoundPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>6 Cities 404</title>
      </Helmet>
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}
      >
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#4481c3' }}>
          404 / Page Not Found
        </h1>
        <p style={{ fontSize: '18px', color: '#383838' }}>
          Oops! The page you are looking for does not exist.
        </p>
        <p style={{ fontSize: '18px', color: '#383838' }}>Go to Main?</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px' }}>Yes</Link>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
