import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import waitingCat from './img/waitingCat.gif';
import fireworksImg from './img/fireworks.png';

import {
  getKittenStatus,
  getColor,
  getText,
  getIsGif,
  getFilter,
  getIsClicking
} from '../redux/selectors';
import { hideKitten, showKitten, incScore } from '../redux/actions';

const mapStateToProps = state => ({
  isVisible: getKittenStatus(state),
  color: getColor(state),
  text: getText(state),
  isGif: getIsGif(state),
  filter: getFilter(state),
  isClicking: getIsClicking(state)
});

const mapDispatchToProps = {
  handleHide: hideKitten,
  handleShow: showKitten,
  handleScoreInc: incScore
};

class Kitten extends React.Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    color: PropTypes.string,
    text: PropTypes.string,
    isGif: PropTypes.bool,
    filter: PropTypes.string,
    isClicking: PropTypes.bool,
    handleHide: PropTypes.func.isRequired,
    handleShow: PropTypes.func.isRequired,
    handleScoreInc: PropTypes.func.isRequired
  };

  static defaultProps = {
    isVisible: true,
    color: '',
    text: '',
    isGif: false,
    filter: '',
    isClicking: false
  };

  handleClick() {
    const { handleHide, handleShow, handleScoreInc } = this.props;
    handleHide();
    handleScoreInc();
    setTimeout(() => {
      handleShow();
    }, 1000);
  }

  render() {
    const { isVisible, color, text, isGif, filter, isClicking } = this.props;
    return (
      <WrapperStyled>
        {isVisible && !isClicking && (
          <ImgStyled
            src={`https://cataas.com/cat${
              isGif === true ? '/gif' : ''
            }${color}${
              text !== '' ? `/says/${text}` : ''
            }${filter}?tm=${Date.now()}`}
            alt="Here should be a cat."
            onClick={() => {
              this.handleClick();
            }}
          />
        )}
        {isClicking && <WaitingMessegeStyled />}
        {!isVisible && !isClicking && (
          <AfterClickMessegeStyled>
            <p>Good job!</p>
            <p>Click again</p>
          </AfterClickMessegeStyled>
        )}
      </WrapperStyled>
    );
  }
}

const WrapperStyled = styled.div`
  display: flex;
  background: #70c8be;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  min-height: 300px;
  height: 60%;
`;

const AfterClickMessegeStyled = styled.div`
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

const WaitingMessegeStyled = styled.div`
  width: 100%;
  background-image: url(${waitingCat});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
const ImgStyled = styled.img`
  cursor: pointer;
  background-repeat: no-repeat;
  min-width: 300px;
  max-width: 500px;
  height: 100%;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kitten);
