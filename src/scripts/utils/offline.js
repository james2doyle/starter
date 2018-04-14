export default function offline() {
  const initialize = () => {
    const networkStatus = () => {
      document.body.classList.toggle('is-offline', !navigator.onLine);
    };

    window.addEventListener('online', networkStatus);
    window.addEventListener('offline', networkStatus);

    networkStatus();
  };

  window.addEventListener('load', initialize);
}
