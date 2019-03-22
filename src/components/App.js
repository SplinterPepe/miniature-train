import React from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import Menu from './Menu';
import Kitten from './Kitten';
import logoText from './img/logoText.png';
import coolCat from './img/coolCat.webp';

function App() {
  return (
    <AppStyled>
      <HeaderStyled>
        <LogoStyled>
          <img src={coolCat} alt="coolCat" />
          <img src={logoText} alt="logo" />
        </LogoStyled>
      </HeaderStyled>
      <Menu />
      <Kitten />
      <ScoreBoard />
      <FooterStyled>
        Made by <span> &#128465;</span>
      </FooterStyled>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderStyled = styled.header`
  background: #f9ad84;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  @media (max-width: 600px) {
    display: none;
  }
`;

const LogoStyled = styled.div`
  cursor: pointer;
  width: auto;
  height: 95%;
  background-size: contain;
  background-repeat: no-repeat;
  > img {
    height: 90px;
    width: auto;
  }
`;

const FooterStyled = styled.div`
  min-height: 30px;
  font-size: 15px;
  color: #aaa;
  background-color: #111110;
  width: 100%;
  height: auto;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default App;
