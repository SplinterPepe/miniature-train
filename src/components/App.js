import React, { Component } from 'react';
import styled from 'styled-components';
import KittenImg from './KittenImg.js'
import ScoreBoard from './ScoreBoard.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      howisit: 'Bad',
      daytime: 'afternoon',
      whoisyou: 'Some guy',
      name:'PPD'};
  }
  
  render() {
    return (
      <div className="App">
        <StyledHeader>
            {this.state.howisit} {this.state.daytime}. {this.state.whoisyou} {this.state.name}.
        </StyledHeader>
        <KittenImg />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;

const StyledHeader = styled.header`
  height:150px;
  background: yellowgreen;
  color: black;
`;