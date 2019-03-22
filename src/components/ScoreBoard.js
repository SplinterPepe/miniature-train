import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getScore } from '../redux/selectors';
import scoreImg from './img/star.png';

const mapStateToProps = state => ({
  score: getScore(state)
});

function ScoreBoard(state) {
  const { score } = state;
  return (
    <StyledScoreBoard>
      {score !== 0 ? (
        <StyledScoreDiv>
          <StyledStar />
          <StyledMessege>x{score}</StyledMessege>
        </StyledScoreDiv>
      ) : (
        <StyledMessege>START CLICKING CATS</StyledMessege>
      )}
    </StyledScoreBoard>
  );
}

const StyledScoreBoard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-shrink: 0;
  flex-grow: 1;
  background: #d1d168;
  min-height: 110px;
`;

const StyledScoreDiv = styled.div`
  display: flex;
  align-self: center;
  align-content: center;

  flex-direction: row;
  height: 100%;
`;

const StyledStar = styled.div`
  height: 100px;
  width: 100px;
  background: url(${scoreImg});
  background-size: contain;
  align-self: center;
`;

const StyledMessege = styled.div`
  align-self: center;
  font-size: 40px;
  font-weight: 700;
  color: #111110;
`;

export default connect(mapStateToProps)(ScoreBoard);
