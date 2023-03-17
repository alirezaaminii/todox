import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  #__next {
    width: 100%;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    justify-content: center;
    min-width: 320px;
    width: 100%;
    min-height: 100vh;
  }
`;
export default GlobalStyles;
