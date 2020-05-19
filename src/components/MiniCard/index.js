import React from 'react';

import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import youtube from '../../images/icon-youtube.svg';
import instagram from '../../images/icon-instagram.svg';
import arrowUp from '../../images/icon-up.svg';
import arrowDown from '../../images/icon-down.svg';

import { Container, Bottom } from './styles';

const MiniCard = ({ type, name, number, percentage, arrow }) => {

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
      <div className="items">
        <p className="type">{`${name}`}</p>
        <p className="number">{number}</p>
      </div>
      <div className="iconPercentage">
        <img src={getIcon(type)} alt={type}/>
        <Bottom arrowType={arrow}>
          <img src={getArrow(arrow)} alt="arrow icon"/>
          <p className="percentageNumber">{percentage}</p>
        </Bottom>
      </div>
    </Container>
  );
}

export default MiniCard;
