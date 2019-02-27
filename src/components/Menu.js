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
  setFilter
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
  handleFilterSet: setFilter
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
    handleTextMenuToggle: PropTypes.func.isRequired
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
    '?filter=negative&': 'Negative',
    '?filter=paint&': 'Paint',
    '?filter=pixel&': 'Pixel'
  };

  menuRef = React.createRef();

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
      <StyledMenu>
        <StyledString>What kind of cats do you want?</StyledString>
        <StyledButton
          onClick={() => {
            handleColorSet();
          }}
        >
          {Menu.COLORS[color] || 'Any color'}
        </StyledButton>
        {isTextMenuToggled ? (
          <StyledTextSubmitionDiv>
            <StyledTwoRowButtonBox>
              <StyledTextSubmitionInput
                ref={this.menuRef}
                placeholder="Say nothing"
              />

              <StyledSubmitButton
                onClick={() => {
                  handleTextMenuToggle();
                  handleSetText(this.menuRef.current.value);
                }}
              >
                Say this
              </StyledSubmitButton>
            </StyledTwoRowButtonBox>
            <StyledButton
              onClick={() => {
                handleTextMenuToggle();
              }}
            >
              Nevermind
            </StyledButton>
          </StyledTextSubmitionDiv>
        ) : (
          <StyledButton
            onClick={() => {
              handleTextMenuToggle();
            }}
          >
            {text !== '' ? `Says "${text}"` : 'Says nothing'}
          </StyledButton>
        )}
        <StyledButton
          onClick={() => {
            handleToggleGif();
          }}
        >
          {isGif ? 'Gif' : 'Not Gif'}
        </StyledButton>
        <StyledButton
          onClick={() => {
            handleFilterSet();
          }}
        >
          {Menu.FILTERS[filter] || 'No filter'}
        </StyledButton>
      </StyledMenu>
    );
  }
}

const StyledTextSubmitionDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 2;
  background-color: #f9ad00;
  padding: 0 5px;
`;

const StyledTwoRowButtonBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  flex: 1;
`;

const StyledTextSubmitionInput = styled.input`
  justify-content: center;
  background-color: #fac480;
  border: 3px solid #f91;
  width: 100%;
  color: #111110;
  &:focus {
    background-color: #f9a111;
    border: 3px solid #555;
  }
`;

const StyledSubmitButton = styled.button`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  flex: 1;
  background-color: #f9ad00;
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    background-color: #f91;
  }
  &:active {
    background-color: #fac480;
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  font-size: 20px;
  font-weight: 700;
  flex: 1;
  background-color: #f9ad00;
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    background-color: #f91;
  }
  &:active {
    background-color: #fac480;
  }
`;
const StyledString = styled.div`
  width: 140px;
  flex-grow: 0;
  font-size: 15px;
  font-weight: 700;
  align-self: center;
`;
const StyledMenu = styled.div`
  height: 70px;
  background-color: #fac472;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
