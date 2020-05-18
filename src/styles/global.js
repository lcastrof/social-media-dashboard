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
      height: 250px;
      background: ${props => props.theme.colors.topBackground};

      @media (max-width: 520px) {
        border-radius: 0 0 15px 15px;
      }
    }
  }

  #root {
    max-width: 1150px;
    margin: 0 auto;
    padding: 40px 20px;

    @media (max-width: 1009px) {

      button{
        margin-bottom: 15px;
      }

    }

    @media (max-width: 520px) {

      button{
        width: 100%;
      }

      div.dark{
        width: 100%;
        justify-content: space-between;
        font-size: 18px;
      }

      section.bar{
        width: 100%;
        height: 1px;
        background: ${props => props.theme.colors.cardText};
        margin: 20px 0;
      }
    }
  }

  button {
    cursor: pointer;
    outline: 0;
  }
`;
