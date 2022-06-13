import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

  html {
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.font.principalFont};
    line-height: 1.4;
    background-color: ${({ theme }) => theme.colors.mainBlue};
  }

  input,
  textarea {
    font-family: ${({ theme }) => theme.font.principalFont};
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  header {
    position: relative;
    height: 100vh;
  }

  main {
    background-color: ${({ theme }) => theme.colors.mainBlue};
    position: relative;
  }
`;

export default GlobalStyles;
