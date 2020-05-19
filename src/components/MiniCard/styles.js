import styled from 'styled-components';
import { lighten, darken } from 'polished';

function getChangedColor(theme) {
  if(theme === 'dark'){
    return  lighten(0.05, 'hsl(228, 28%, 20%)');
  } else{
    return darken(0.05, 'hsl(227, 47%, 96%)');
  }
}

function getTextColor(arrowType){
  if(arrowType){
    return 'hsl(356, 69%, 56%)';
  } else {
    console.log(arrowType);
    return 'hsl(163, 72%, 41%)';
  }
}

export const Container = styled.button`
  width: 240px;
  height: 120px;
  background: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.cardText};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0;
  transition: transform  0.2s, opacity 0.2s;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-left: 2.5px;
  margin-right: 2.5px;

  &:hover{
    transform: scale(1.03);
    background: ${props => getChangedColor(props.theme.title)};
  }

  .items{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 80px;

    p.type{
      font-size: 14px;
    }

    p.number{
      color: ${props => props.theme.colors.text};
      font-size: 35px;
    }
  }

  .iconPercentage{
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }

`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => getTextColor(props.arrowType)};

  p.percentageNumber{
    font-size: 14px;
  }

  img{
    margin-right: 8px;
  }

`;
