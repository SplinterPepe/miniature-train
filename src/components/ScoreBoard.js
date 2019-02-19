import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import scoreImg from './star.png';
import { getScore } from '../redux/selectors.js';

const mapStateToProps = state => ({
  score: getScore(state),
});

class ScoreBoard extends Component {
  render(){
    const score = this.props.score;

    let RenderScore = [];
    for (var i = 0; i < score; i++) {
      RenderScore.push(<StyledScore />)
    }

    let Progress;
    if (score === 0) {
      Progress = <StyledMessege>Click some kittens</StyledMessege>
    } else if(score < 5){
      Progress = <StyledMessege>More</StyledMessege>
    } else if(score < 10){
      Progress = <StyledMessege>Yep</StyledMessege>
    } else if(score < 15){
      Progress = <StyledMessege>Click more</StyledMessege>
    } else{
      Progress = <StyledMessege>:)</StyledMessege>
    }
    // {(score === 0) 
    //   ? Progress = <StyledMessege>Click some kittens</StyledMessege> :
    //   (score < 5)
    //     ? Progress = <StyledMessege>More</StyledMessege> :
    //     (score < 10)
    //       ? Progress = <StyledMessege>Yep</StyledMessege> :
    //       (score <15)
    //         ? Progress = <StyledMessege>Click more</StyledMessege> :
    //         Progress = <StyledMessege>:)</StyledMessege>
    // }
    return (
      <StyledScoreBoard>
        {Progress}
        <StyledStarWrapper>
          {RenderScore} 
        </StyledStarWrapper>    
      </StyledScoreBoard>
    )
  }
}

export default connect(mapStateToProps)(ScoreBoard);

const StyledScoreBoard = styled.div`
  height: 350px;
  background: cornflowerblue;
  display:flex; 
  flex:1;
  flex-direction: column;
`;
const StyledStarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center ;
  flex-direction: row;
  width: 80%;
  align-self: center;
`;
const StyledScore = styled.div`
  height:50px;
  width: 50px;
  background: url(${scoreImg});
  background-size: contain;
`;
const StyledMessege = styled.div`
  align-self: center; 
  font-size: 30px;
  font-weight: 600;
  color: black;
`;