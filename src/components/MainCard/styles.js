import styled from 'styled-components';
import { lighten, darken, linearGradient } from 'polished';

function getChangedColor(theme) {
  if(theme === 'dark'){
    return  lighten(0.05, 'hsl(228, 28%, 20%)');
  } else{
    return darken(0.05, 'hsl(227, 47%, 96%)');
  }
}

function getBar(type){
  switch (type) {
    case 'facebook':
      return 'hsl(203, 89%, 53%)';
    case 'twitter':
      return('hsl(195, 100%, 50%)');
    case 'youtube':
      return('hsl(348, 97%, 39%)');
    case 'instagram':
      return(linearGradient({ colorStops: ['hsl(37, 97%, 70%)', 'hsl(329, 70%, 58%)'], fallback: '#fff', toDirection: 'to right' }));

    default:
      break;
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
  height: 240px;
  background: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.cardText};
  display: flex;
  flex-direction: column;
  border: 0;
  border-radius: 0 0 5px 5px;

  transition: transform  0.2s, opacity 0.2s;

  &:hover{
    transform: scale(1.03);
    background: ${props => getChangedColor(props.theme.title)};
  }

  header#cards{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;

    img{
      margin-right: 8px;
    }
  }

  .main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    margin-bottom: 50px;

    p{
      color: ${props => props.theme.colors.text};
      font-size: 50px;
      font-weight: bold;
    }
  }

`;

export const BarColor = styled.span`
    width: 100%;
    border-radius: 30px 30px 0 0;
    height: 4px;
    margin-bottom: 20px;

    background: ${props => getBar(props.barColor)};
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => getTextColor(props.arrowType)};

  img{
    margin-right: 8px;
  }

`;
