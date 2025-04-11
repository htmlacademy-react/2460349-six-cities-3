import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loadingSpinner}></div>
      <p className={styles.loadingText}>Loading, please wait...</p>
    </div>
  );
}

export default LoadingScreen;
