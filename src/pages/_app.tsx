import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import { Nav } from '../components/Nav';
import { ContactFormProvider } from '../contexts/ContactFormContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContactFormProvider>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </ContactFormProvider>
  );
}

export default MyApp;
