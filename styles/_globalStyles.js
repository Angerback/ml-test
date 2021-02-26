import { createGlobalStyle } from 'styled-components';
import reset from 'react-style-reset/string';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    background: #efefef;
    font-family: sans-serif;
    font-size: 14px;
  }

  p {
    line-height: 1.5;
    
  }

  h1 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export default GlobalStyle;
