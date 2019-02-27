import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  getKittenStatus,
  getScore,
  getColor,
  getText,
  getIsGif,
  getFilter
} from '../redux/selectors';
import { hideKitten, showKitten, incScore } from '../redux/actions';
import fireworksImg from './fireworks.png';

const mapStateToProps = state => ({
  isVisible: getKittenStatus(state),
  score: getScore(state),
  color: getColor(state),
  text: getText(state),
  isGif: getIsGif(state),
  filter: getFilter(state)
});

const mapDispatchToProps = {
  handleHide: hideKitten,
  handleShow: showKitten,
  handleScoreInc: incScore
};

function handleClick(state) {
  state.handleHide();
  state.handleScoreInc();
  setTimeout(() => {
    state.handleShow();
  }, 1000);
}

function Kitten(state) {
  let textUrl;
  switch (state.text) {
    case '':
      textUrl = '';
      break;
    default:
      textUrl = `/says/${state.text}`;
  }
  let gifUrl;
  switch (state.isGif) {
    case true:
      gifUrl = '/gif';
      break;
    default:
      gifUrl = '';
  }
  return (
    <StyledWrapper>
      {state.isVisible ? (
        <StyledImg
          src={`https://cataas.com/cat${gifUrl}${state.color}${textUrl}${
            state.filter
          }?tm=${Date.now()}`}
          alt="Here should be a cat."
          onClick={() => {
            handleClick(state);
          }}
        />
      ) : (
        <StyledMessege>
          <p>Good job!</p>
          <p>Click again</p>
        </StyledMessege>
      )}
    </StyledWrapper>
  );
}

const StyledMessege = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
  color: #111110;
  background-image: url(${fireworksImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
`;
const StyledWrapper = styled.div`
  display: flex;
  background: #70c8be;
  justify-content: center;
  flex-shrink: 1;
  flex-grow: 0;
  height: 500px;
`;
const StyledImg = styled.img`
  cursor: pointer;
  background-repeat: no-repeat;
  min-width: 300px;
  max-width: 500px;
  max-height: 500px;
  min-height: 0px;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kitten);
