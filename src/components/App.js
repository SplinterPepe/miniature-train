import React from 'react';
import styled from 'styled-components';
import Kitten from './Kitten';
import ScoreBoard from './ScoreBoard';
import logo from './logo.png';
import logoText from './logoText.png';

const App = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledLogo>
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logoText" />
        </StyledLogo>
      </StyledHeader>
      <StyledMenu />
      <Kitten />
      <ScoreBoard />
      <StyledFooter />
    </StyledApp>
  );
};
const StyledMenu = styled.div`
  height: 70px;
  background-color: #fac472;
`;
const StyledApp = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.header`
  background: #f9ad84;
  color: #111110;
  display: flex;
  justify-content: flex-start;
  height: 100px;
`;
const StyledLogo = styled.div`
  cursor: pointer;
  width: 200px;
  height: 100px;
  margin-left: 15%;
  > img {
    height: 100px;
  }
`;

const StyledFooter = styled.div`
  background-color: #111110;
  width: 100%;
  height: 50px;
`;

export default App;
