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
  handleHideClick: hideKitten,
  handleShowClick: showKitten,
  handleScoreInc: incScore
};

const KittenImg = state => {
  const { isVisible } = state;
  return (
    <StyledWrapper>
      {isVisible ? (
        <StyledImgWrapper
          onClick={() => {
            state.handleScoreInc();

            state.handleHideClick();

            setTimeout(() => {
              state.handleShowClick();
            }, 1000);
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
const StyledImgWrapper = styled.div`
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
