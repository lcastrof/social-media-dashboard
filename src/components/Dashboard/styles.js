import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -250px;
  background: transparent;
  padding: 0;
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  header.main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9px;
    background: transparent;
    margin-bottom: 30px;
    flex-wrap: wrap;
    max-width: 1110px;
    max-height: 47,2px;

    .sideText{
      display: flex;
      flex-direction: column;
      justify-content: center;

      .main {
        font-weight: bold;
        font-size: 25px;
      }

      .sub {
        color: ${props => props.theme.colors.cardText};
      }
   }

   div.dark {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        color: ${props => props.theme.colors.cardText};
        font-weight: bold;
        margin-right: 15px;
      }
    }
  }

  .mainCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }

`;

export const Overview = styled.div`
  p.title{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .miniCards{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
