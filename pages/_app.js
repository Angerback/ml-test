import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/_globalStyles';
import theme from '../styles/theme.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {' '}
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}

export default MyApp;
