import { Suspense, lazy, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import ErrorBoundary from "./ErrorBoundary";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import NetConnection from "./Components/NetConnection";
import CustomLoader from "./Components/CustomLoader";
import Toast from "./Utils/Toast";

function App() {
  const AppRouter = lazy(() => import("./Routes"));

  /* Handling Net Status & Visible Title */

  // Function to handle visibility change
  const handleVisibilityChange = () => {
    if (document.hidden) {
      document.title = "Please come back !";
    } else {
      document.title = "E-Commerce";
    }
  };

  useEffect(() => {
    const handleOnline = () => {
      Toast("s", "Internet connection restored!", "top-center");
    };

    const handleOffline = () => {
      Toast("w", "Internet connection lost!", "top-center");
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-Commerce</title>
        <link rel="canonical" href="https://master.d19xbm45443o91.amplifyapp.com/static/media/logo.727cba3082132d2f1f50.png" /> 
        <meta property="og:image" content="https://master.d19xbm45443o91.amplifyapp.com/static/media/logo.727cba3082132d2f1f50.png" /> 
        <meta name="description" content="Rockingham" />
      </Helmet>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense fallback={<CustomLoader />}>
            <ErrorBoundary>
              <AppRouter />
            </ErrorBoundary>
          </Suspense>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;