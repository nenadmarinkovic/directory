import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

/* @font-face {
	font-family: 'SpaceMono';
  src: url('/fonts/SpaceMono-Regular.ttf')
} */

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    background: white;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 1160px;
    max-width: 100%;
    margin: 0 auto;
    padding: 10px 15px 0 15px;

    @media (min-width: 1540px) {
      width: 1200px;
    }
  }
`;
