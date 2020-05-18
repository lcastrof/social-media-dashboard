import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: -250px;
  background: transparent;
  padding: 30px 0;
  color: ${props => props.theme.colors.text};

  header.main{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 9px;
    width: 100%;
    height: 100%;
    background: transparent;
    margin-bottom: 30px;
    flex-wrap: wrap;

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
  }

  .mainCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 50px;
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
