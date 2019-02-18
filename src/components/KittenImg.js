import React, { Component } from 'react';
import styled from 'styled-components';

class KittenImg extends Component {

  constructor(props) {
    super(props);
    this.state = {showKitten: true};
  }

  showOnClick = () => {
    console.log(this.state);
    this.setState(state => ({
      showKitten: true
    }));
  }
  hideOnClick = () => {
    console.log(this.state);
    this.setState(state => ({
      showKitten: false
    }));
  }
  render() {

    const showKitten = this.state.showKitten;

    let Show;

    if (showKitten) {
      Show = <img onClick={this.hideOnClick} src="http://placekitten.com/500/500" alt="Here should be kitten."></img>
    } else {
      Show = <StyledButtonWrapper>
              <p>You clicked the kitten.</p>
              <p>Click again.</p>
              <StyledButton onClick={this.showOnClick}>
                RESURRECT
              </StyledButton>
            </StyledButtonWrapper>
    }

    return (
      <StyledWrapper>
        {Show}
      </StyledWrapper>
    );
  }
}

export default KittenImg;

const StyledButtonWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center; 
  background: yellowgreen;
  padding: 10px;
`;

const StyledWrapper = styled.div`
	display: flex;
  flex-direction: row;
  background: cornflowerblue;
  justify-content: center;
  height: 500px;
`;

const StyledButton = styled.button`
  background: cornflowerblue;
  font-size: 30px;
  color: black;
`;


