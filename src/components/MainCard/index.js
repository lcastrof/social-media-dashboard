import React from 'react';

import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import youtube from '../../images/icon-youtube.svg';
import instagram from '../../images/icon-instagram.svg';
import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

import { Container, BarColor, Bottom, Content } from './styles';

const MainCard = ({ social, name, followers, today, arrow }) => {

  function getIcon(social) {
    let icon = facebook;

    switch (social) {
      case 'twitter':
        icon = twitter;
        break;
      case 'youtube':
        icon = youtube;
        break;
      case 'instagram':
        icon = instagram;
        break

      default:
        break;
    }

    return icon;
  }

  function getArrow(arrow){
    if(arrow){
      return arrowDown;
    }

    return arrowUp;
  }

  return (
    <Container social={social}>
      <BarColor barColor={social}/>
        <Content>
        <header id="cards">
          <img src={getIcon(social)} alt={social}/>
          {`${name}`}
        </header>
        <div className="main">
          <p>{followers}</p>
          F O L L O W E R S
        </div>
        <Bottom arrowType={arrow}>
          <img src={getArrow(arrow)} alt="arrow icon"/>
          {`${today} Today`}
        </Bottom>
        </Content>
    </Container>
  );
}

export default MainCard;
