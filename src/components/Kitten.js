import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getKittenStatus, getScore } from '../redux/selectors';
import { hideKitten, showKitten, incScore } from '../redux/actions';
import fireworksImg from './fireworks.png';

const mapStateToProps = state => ({
  isVisible: getKittenStatus(state),
  score: getScore(state)
});

const mapDispatchToProps = {
  handleHide: hideKitten,
  handleShow: showKitten,
  handleScoreInc: incScore
};

const KittenImg = state => {
  function handleClick() {
    state.handleHide();
    state.handleScoreInc();
    setTimeout(() => {
      state.handleShow();
    }, 1000);
  }
  const { isVisible } = state;
  return (
    <StyledWrapper>
      {isVisible ? (
        <StyledImg
          src={`https://cataas.com/cat?height=450?tm=${Date.now()}`}
          alt="Here should be cat"
          onClick={() => {
            handleClick();
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
};

const StyledMessege = styled.div`
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
  display: flex;
  color: #000;
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
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width: auto;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KittenImg);
