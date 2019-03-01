import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  getColor,
  getIsTextMenuToggled,
  getText,
  getIsGif,
  getFilter
} from '../redux/selectors';
import {
  setColor,
  toggleTextMenu,
  setText,
  toggleGif,
  setFilter,
  stopTimer,
  startTimer
} from '../redux/actions';

const mapStateToProps = state => ({
  color: getColor(state),
  isTextMenuToggled: getIsTextMenuToggled(state),
  text: getText(state),
  isGif: getIsGif(state),
  filter: getFilter(state)
});

const mapDispatchToProps = {
  handleColorSet: setColor,
  handleTextMenuToggle: toggleTextMenu,
  handleSetText: setText,
  handleToggleGif: toggleGif,
  handleFilterSet: setFilter,
  handleStartTimer: startTimer,
  handleStopTimer: stopTimer
};

class Menu extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    isGif: PropTypes.bool,
    filter: PropTypes.string,
    handleFilterSet: PropTypes.func.isRequired,
    handleToggleGif: PropTypes.func.isRequired,
    isTextMenuToggled: PropTypes.bool,
    handleSetText: PropTypes.func.isRequired,
    handleColorSet: PropTypes.func.isRequired,
    handleTextMenuToggle: PropTypes.func.isRequired,
    handleStartTimer: PropTypes.func.isRequired,
    handleStopTimer: PropTypes.func.isRequired
  };

  static defaultProps = {
    text: '',
    color: '',
    filter: '',
    isGif: false,
    isTextMenuToggled: false
  };

  static COLORS = {
    '/orange': 'Orange',
    '/black': 'Black'
  };

  static FILTERS = {
    '?filter=blur&': 'Blur',
    '?filter=mono&': 'Mono',
    '?filter=sepia&': 'Sepia',
    '?filter=negative&': 'Minus',
    '?filter=paint&': 'Paint',
    '?filter=pixel&': 'Pixel'
  };

  menuRef = React.createRef();

  state = {
    timer: null
  };

  handleTimeout(ms = 2000) {
    const { handleStartTimer, handleStopTimer } = this.props;
    const { timer } = this.state;

    if (timer) {
      clearTimeout(timer);
    } else handleStartTimer();

    const newTimer = setTimeout(() => {
      handleStopTimer();
      this.setState({
        timer: null
      });
    }, ms);

    this.setState({
      timer: newTimer
    });
  }

  render() {
    const {
      text,
      color,
      isGif,
      filter,
      isTextMenuToggled,
      handleSetText,
      handleColorSet,
      handleTextMenuToggle,
      handleToggleGif,
      handleFilterSet
    } = this.props;

    return (
      <MenuStyled>
        <StringStyled>What kind of cats do you want?</StringStyled>
        <ButtonPanelStyled>
          <ButtonStyled
            onClick={() => {
              handleColorSet();
              this.handleTimeout(2000);
            }}
          >
            {Menu.COLORS[color] || 'Any color'}
          </ButtonStyled>
          {isTextMenuToggled ? (
            <TextSubmitionDivStyled>
              <TwoRowButtonBoxStyled>
                <TextSubmitionInputStyled
                  ref={this.menuRef}
                  placeholder="Say nothing"
                  size="1"
                />

                <SubmitButtonStyled
                  onClick={() => {
                    handleTextMenuToggle();
                    handleSetText(this.menuRef.current.value);
                    this.handleTimeout(2000);
                  }}
                >
                  Say this
                </SubmitButtonStyled>
              </TwoRowButtonBoxStyled>
              <SubmitButtonStyled
                onClick={() => {
                  handleTextMenuToggle();
                }}
              >
                No change
              </SubmitButtonStyled>
            </TextSubmitionDivStyled>
          ) : (
            <ButtonStyled
              onClick={() => {
                handleTextMenuToggle();
              }}
            >
              {text !== '' ? `Says "${text}"` : 'Says nothing'}
            </ButtonStyled>
          )}
          <ButtonStyled
            onClick={() => {
              handleToggleGif();
              this.handleTimeout(2000);
            }}
          >
            {isGif ? 'Gif' : 'Not Gif'}
          </ButtonStyled>
          <ButtonStyled
            onClick={() => {
              handleFilterSet();
              this.handleTimeout(2000);
            }}
          >
            {Menu.FILTERS[filter] || 'No filter'}
          </ButtonStyled>
        </ButtonPanelStyled>
      </MenuStyled>
    );
  }
}

const TextSubmitionDivStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 1;
  background-color: #f9ad00;
  padding: 0 5px;
`;

const TwoRowButtonBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  min-width: 100px;
`;

const TextSubmitionInputStyled = styled.input`
  justify-content: center;
  background-color: #fac480;
  border: 3px solid #f91;
  color: #111110;
  &:focus {
    background-color: #f9a111;
    border: 3px solid #555;
  }
`;

const SubmitButtonStyled = styled.button`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  flex: 1;
  background-color: #f9ad00;
  cursor: pointer;
  min-width: 30px;

  &:hover {
    background-color: #f91;
  }
  &:active {
    background-color: #fac480;
  }
`;

const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  font-size: 17px;
  font-weight: 700;
  flex: 1;
  background-color: #f9ad00;
  cursor: pointer;
  padding: 0 5px;
  min-width: 50px;
  min-height: 70px;

  &:hover {
    background-color: #f91;
  }
  &:active {
    background-color: #fac480;
  }
`;
const ButtonPanelStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 60px;
  max-height: 90px;
  flex: 1;
`;
const StringStyled = styled.div`
  width: 140px;
  flex-grow: 0;
  font-size: 15px;
  font-weight: 700;
  align-self: center;
`;
const MenuStyled = styled.div`
  flex-wrap: wrap;
  flex-shrink: 0;
  background-color: #fac472;
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 80px;
  max-height: 365px;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
