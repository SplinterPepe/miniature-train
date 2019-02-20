import React from 'react';
import styled from 'styled-components';
import KittenImg from './KittenImg';
import ScoreBoard from './ScoreBoard';

const App = () => {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledLogo>ULTIMATE KITTEN CLICKER</StyledLogo>
      </StyledHeader>
      <StyledDivider />
      <KittenImg />
      <StyledDivider />
      <ScoreBoard />
      <StyledDivider />
      <StyledFooter />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.header`
  background: black;
  color: cornflowerblue;
  display: flex;
  justify-content: center;
  height: 100px;
`;
const StyledLogo = styled.div`
  font-size: 37px;
  font-weight: 600;
  text-align: center;
  align-self: center;
`;

const StyledDivider = styled.div`
  height: 2px;
  background: gainsboro;
`;

const StyledFooter = styled.div`
  background-color: black;
  width: 100%;
  height: 50px;
`;

export default App;
