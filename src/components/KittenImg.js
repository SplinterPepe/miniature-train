import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { getKittenStatus, getScore} from '../redux/selectors';
import { shootKitten, resKitten, incScore } from '../redux/actions';
import KittenJpg from './kitten.jpg';

const mapStateToProps = state => ({
  isVisible: getKittenStatus(state),
  score: getScore(state),
});

const mapDispatchToProps = {
  handleHideClick: shootKitten,
  handleShowClick: resKitten,
  handleScoreInc: incScore,
}

class KittenImg extends Component {
  render() {
    const isVisible = this.props.isVisible;
    return (
      <StyledWrapper>
        {isVisible
          ? <StyledImgWrapper onClick={() => {
              this.props.handleScoreInc();
              this.props.handleHideClick();
              ((setTimeout(() => {
                this.props.handleShowClick()}, 1000))
              )
            }}/>
          :
            <StyledMessege>
              <p>Good job!</p>
            </StyledMessege>
        }
      </StyledWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KittenImg);

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
  height: 638px;

`;
const StyledImgWrapper = styled.div`
  cursor: pointer;
  background-image: url(${KittenJpg});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 400px;

  /* min-width: 50px;
  min-height: fit-content;
  max-width: 700px;
  max-height: fit-content; */

`