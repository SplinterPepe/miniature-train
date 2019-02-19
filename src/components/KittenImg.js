import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { getKittenStatus, getScore} from '../redux/selectors';
import { shootKitten, resKitten, incScore } from '../redux/actions';

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
          ? <img onClick={() => {this.props.handleScoreInc(); this.props.handleHideClick()}} src="http://placekitten.com/g/500/500" alt="Here should be kitten."></img>
          : <StyledButtonWrapper>
              <p>You clicked the kitten.</p> 
              <p>Click again.</p>
              <StyledButton onClick={()=> this.props.handleShowClick()}>
                RESURRECT
              </StyledButton>
            </StyledButtonWrapper>
          }
      </StyledWrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KittenImg);

const StyledButtonWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center; 
  background: yellowgreen;
  padding: 10px;
`;

const StyledWrapper = styled.div`
	display: flex;
  flex-direction: row;
  background: cornflowerblue;
  justify-content: center;
  height: 500px;
`;

const StyledButton = styled.button`
  background: cornflowerblue;
  font-size: 30px;
  color: black;
`;


