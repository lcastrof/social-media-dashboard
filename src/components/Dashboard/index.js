import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import MainCard from '../MainCard';
import MiniCard from '../MiniCard';

import { Container, Overview } from './styles';

export default function Dashboard ({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return(
    <Container>
      <header className="main">
        <div className="sideText">
          <p className="main">Social Media Dashboard</p>
          <p className="sub">Total Followers: 23,004</p>
        </div>
        <section className="bar"/>
        <div className="dark">
          <span>Dark Mode</span>
          <Switch
            className="switcher"
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={25}
            width={50}
            handleDiameter={18}
            offColor={colors.switch.on}
            onColor={colors.switch.off}
          />
        </div>
      </header>

      <div className="mainCards">
        <MainCard type='facebook' name='@nathanf' followers='1987' today='12'></MainCard>
        <MainCard type='twitter' name='@nathanf' followers='1044' today='99'></MainCard>
        <MainCard type='instagram' name='@realnathanf' followers='11k' today='1099'></MainCard>
        <MainCard type='youtube' name='Nathan F.' followers='8239' today='144' arrow='down'></MainCard>
      </div>

      <Overview>
        <p className="title">Overview - Today</p>
        <div className="miniCards">
        <MiniCard type='facebook' name='Page Views' number='87' percentage='3%'/>
        <MiniCard type='facebook' name='Likes' number='52' percentage='2%' arrow='down'/>
        <MiniCard type='instagram' name='Likes' number='5462' percentage='2257%'/>
        <MiniCard type='instagram' name='Profile Views' number='52k' percentage='1375%'/>
        <MiniCard type='twitter' name='Retweets' number='117' percentage='303%'/>
        <MiniCard type='twitter' name='Likes' number='507' percentage='553%'/>
        <MiniCard type='youtube' name='Likes' number='107' percentage='19%'/>
        <MiniCard type='youtube' name='Total Views' number='1407' percentage='12%'/>
        </div>
      </Overview>
    </Container>
  );
}
