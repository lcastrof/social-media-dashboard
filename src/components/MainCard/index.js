import React from 'react';

import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import youtube from '../../images/icon-youtube.svg';
import instagram from '../../images/icon-instagram.svg';
import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

import { Container, BarColor, Bottom } from './styles';

const MainCard = ({ type, name, followers, today, arrow }) => {

  function getIcon(type) {
    let icon = facebook;

    switch (type) {
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
    <Container type={type}>
      <BarColor barColor={type}/>
      <header id="cards">
        <img src={getIcon(type)} alt={type}/>
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
    </Container>
  );
}

export default MainCard;
