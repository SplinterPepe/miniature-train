import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import scoreImg from './star.png';
import { getScore } from '../redux/selectors';

const mapStateToProps = state => ({
  score: getScore(state)
});

const ScoreBoard = state => {
  const { score } = state;
  const RenderScoreStars = [];
  for (let i = 0; i < score; i += 1) {
    RenderScoreStars.push(<StyledScore />);
  }
  const RenderScore = score;
  return (
    <StyledScoreBoard>
      <StyledMessege>Score: {RenderScore}!</StyledMessege>
      <StyledStar>{RenderScoreStars}</StyledStar>
    </StyledScoreBoard>
  );
};

const StyledScoreBoard = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  background: cornflowerblue;
  display: flex;
  flex-direction: column;
`;
const StyledStar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
  width: 80%;
  align-self: center;
`;
const StyledScore = styled.div`
  height: 50px;
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

export default connect(mapStateToProps)(ScoreBoard);
