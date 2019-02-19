import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import scoreImg from './scull.png';
import { getScore } from '../redux/selectors.js';

const mapStateToProps = state => ({
  score: getScore(state),
});

class ScoreBoard extends Component {
  render(){
    const score = this.props.score;

    let RenderScore = [];
    let Progress;
    for (var i = 0; i < score; i++) {
      RenderScore.push(<StyledScore />)
    }
    
    if (score === 0) {
      Progress = <StyledMessege>Click HERE</StyledMessege>
    } else if(score < 5){
      Progress = <StyledMessege>MORE</StyledMessege>
    } else if(score < 10){
      Progress = <StyledMessege>YEP</StyledMessege>
    } else if(score < 15){
      Progress = <StyledMessege>CLICK MORE</StyledMessege>
    } else{
      Progress = <StyledMessege>:)</StyledMessege>
    }

    return (
      <StyledScoreBoard>
        {RenderScore}
        {Progress}
      </StyledScoreBoard>
    )
  }
}

export default connect(mapStateToProps)(ScoreBoard);

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