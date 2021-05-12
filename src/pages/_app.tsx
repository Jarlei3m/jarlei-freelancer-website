import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import { Nav } from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
