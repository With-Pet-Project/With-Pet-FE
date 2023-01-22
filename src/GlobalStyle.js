import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
 ${reset}

  div {
    color: red;
  }
`;

export default GlobalStyle;
