import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import styles from './not-found-screen.module.css';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>6 Cities 404</title>
      </Helmet>
      <div className={styles.content}>
        <h1 className={styles.title}>
          404 / Page Not Found
        </h1>
        <p className={styles.text}>
          Oops! The page you are looking for does not exist.
        </p>
        <p className={styles.text}>Go to Main?</p>
        <Link to="/" className={styles.link}>Yes</Link>
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
