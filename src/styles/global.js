import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    font-family: 'Inter', sans-serif;

    #top {
      width: 100%;
      height: 30vh;
      background: ${props => props.theme.colors.topBackground}
    }
  }

  #root {
    max-width: 1150px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
