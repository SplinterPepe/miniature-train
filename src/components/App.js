import React from 'react';
import styled from 'styled-components';
import ScoreBoard from './ScoreBoard';
import Menu from './Menu';
import Kitten from './Kitten';
import logoText from './logoText.png';
import coolCat from './coolCat.webp';

function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledLogo>
          <img src={coolCat} alt="coolCat" />
          <img src={logoText} alt="logo" />
        </StyledLogo>
      </StyledHeader>
      <Menu />
      <Kitten />
      <ScoreBoard />
      <StyledFooter />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.header`
  background: #f9ad84;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;
const StyledLogo = styled.div`
  cursor: pointer;
  width: auto;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  > img {
    height: 100px;
    width: auto;
  }
`;
const StyledFooter = styled.div`
  background-color: #111110;
  width: 100%;
  height: 50px;
`;

export default App;
