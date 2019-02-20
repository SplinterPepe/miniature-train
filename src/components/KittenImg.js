import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getKittenStatus, getScore } from '../redux/selectors';
import { hideKitten, showKitten, incScore } from '../redux/actions';

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
        <StyledImgWrapper
          src={`https://cataas.com/cat?tm=${Date.now()}`}
          alt="Here should be cat"
          onClick={() => {
            handleClick();
          }}
        />
      ) : (
        <StyledMessege>
          <p>Good job!</p>
        </StyledMessege>
      )}
    </StyledWrapper>
  );
};

const StyledMessege = styled.div`
  flex-direction: column;
  font-size: 37px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  background: yellowgreen;
  padding: 10px;
`;

const StyledWrapper = styled.div`
  display: flex;
  background: yellowgreen;
  justify-content: center;
  flex-shrink: 1;
  flex-grow: 0;
  height: 600px;
`;
const StyledImgWrapper = styled.img`
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  width: 400px;
`;
// background-image: ${({ catUrl }) => `url(${catUrl})`};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KittenImg);
