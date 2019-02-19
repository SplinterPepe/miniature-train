import React, { Component } from 'react';
import styled from 'styled-components';
import scoreImg from './scull.png';
class ScoreBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {score: 0};
  }

  incScore = () => {
    console.log(this.state);

    this.setState(prevState => {
      return {
        
        score: prevState.score + 1}
    });
  }

  render(){
    let RenderScore = [];
    let Progress;
    for (var i = 0; i < this.state.score; i++) {
      RenderScore.push(<StyledScore />)
    }
    
    if (this.state.score === 0) {
      Progress = <StyledMessege>Click HERE</StyledMessege>
    } else if(this.state.score < 5){
      Progress = <StyledMessege>MORE</StyledMessege>
    } else if(this.state.score < 10){
      Progress = <StyledMessege>YEP</StyledMessege>
    } else if(this.state.score < 15){
      Progress = <StyledMessege>CLICK MORE</StyledMessege>
    } else{
      Progress = <StyledMessege>:)</StyledMessege>
    }

    return (
      <StyledScoreBoard onClick={this.incScore}>
        {RenderScore}
        {Progress}
      </StyledScoreBoard>
    )
  }
}

export default ScoreBoard;

const StyledScoreBoard =styled.div`
  height: 600px;
  background: black;
  display: flex;
  flex-wrap: wrap;
  align-content: center ;
  flex-direction: column;
`;
const StyledScore = styled.div`
  height:100px;
  width: 100px;
  background: url(${scoreImg});
`;
const StyledMessege = styled.h1`
  color: cornflowerblue;
`;