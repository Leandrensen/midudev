import { createContext } from 'react';

import '../styles/globals.css';

// prototip de aplicacion de dark theme a traves de context
// Donde se hace ? Aca en _app porque es el access point mas root de toda la aplicacion
const ThemeContext = createContext('dark');

// En _app van todos los `Providers`
// Todo lo que sea informacion global
function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext.Provider value="dark">
      <Component {...pageProps} />;
    </ThemeContext.Provider>
  );
}

export default MyApp;
