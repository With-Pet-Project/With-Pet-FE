import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset}

  body {
    background-color: #EEF2F8;
    color: #1F2633;
  }

  body * {
    box-sizing: border-box;
  }

  a:visited, a:link {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
