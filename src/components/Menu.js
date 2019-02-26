import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getColor, getIsTextMenuToggled, getText } from '../redux/selectors';
import { setColor, toggleTextMenu, setText } from '../redux/actions';

const mapStateToProps = state => ({
  color: getColor(state),
  isTextMenuToggled: getIsTextMenuToggled(state),
  text: getText(state)
});

const mapDispatchToProps = {
  handleColorSet: setColor,
  handleTextMenuToggle: toggleTextMenu,
  handleSetText: setText
};

class Menu extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    isTextMenuToggled: PropTypes.bool,
    handleSetText: PropTypes.func.isRequired,
    handleColorSet: PropTypes.func.isRequired,
    handleTextMenuToggle: PropTypes.func.isRequired
  };

  static defaultProps = {
    text: '',
    color: '',
    isTextMenuToggled: false
  };

  static COLORS = {
    '/orange': 'Orange',
    '/black': 'Black'
  };

  menuRef = React.createRef();

  render() {
    const {
      text,
      color,
      handleSetText,
      handleColorSet,
      isTextMenuToggled,
      handleTextMenuToggle
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
                placeholder={text !== '' ? `Says "${text}"` : 'Say nothing'}
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
      </StyledMenu>
    );
  }
}

const StyledTextSubmitionDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 1;
  background-color: #f9ad00;
  border-right: 2px solid #f91;
  border-left: 2px solid #f91;
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
