import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getColor } from '../redux/selectors';
import { setColor } from '../redux/actions';

const mapStateToProps = state => ({
  color: getColor(state)
});

const mapDispatchToProps = {
  handleColorSet: setColor
};

const Menu = state => {
  const { color } = state;
  let colorStr;
  switch (color) {
    case '/orange':
      colorStr = 'Orange';
      break;
    case '/black':
      colorStr = 'Black';
      break;
    default:
      colorStr = 'Any color';
  }
  return (
    <StyledMenu>
      <StyledString>What kind of cats do you want?</StyledString>
      <StyledButton
        onClick={() => {
          state.handleColorSet();
        }}
      >
        {colorStr}
      </StyledButton>
      <StyledButton
        onClick={() => {
          state.handleColorSet();
        }}
      >
        {colorStr}
      </StyledButton>
      <StyledButton
        onClick={() => {
          state.handleColorSet();
        }}
      >
        {colorStr}
      </StyledButton>
    </StyledMenu>
  );
};
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
