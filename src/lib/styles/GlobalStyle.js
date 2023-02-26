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
    font-family: 'Pretendard Variable', Pretendard,
      -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans', 'Noto Sans KR',
      'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a:visited, a:link {
    text-decoration: none;
    color: inherit;
  }

  input:focus {
    outline: none;
    background-color: #fff;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
