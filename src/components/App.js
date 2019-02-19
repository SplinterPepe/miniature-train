import React, { Component } from 'react';
import styled from 'styled-components';
import KittenImg from './KittenImg.js'
import ScoreBoard from './ScoreBoard.js';

class App extends Component {


  render() {
    return (
      <StyledApp>
        <StyledHeader>
          <StyledLogo>
            ULTIMATE KITTEN CLICKER
          </StyledLogo>
        </StyledHeader>
        <StyledDivider/>
        <StyledContentWrapper>
          <KittenImg />
          <StyledDivider/>
          <ScoreBoard />
        </StyledContentWrapper>
      </StyledApp>
    );
  }
} 

export default App;
const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
`;
const StyledHeader = styled.header`  
  background: black;
  color: cornflowerblue;
  display: flex;
  justify-content: center; 
  height:100px;
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

const StyledContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;


`