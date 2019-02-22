import { combineReducers } from 'redux';
import { HIDE_KITTEN, SHOW_KITTEN, INCREASE_SCORE, SET_COLOR } from './actions';

const showKitten = (
  state = {
    isVisible: true
  },
  action
) => {
  switch (action.type) {
    case HIDE_KITTEN:
      return {
        isVisible: false
      };
    case SHOW_KITTEN:
      return {
        isVisible: true
      };
    default:
      return state;
  }
};

const incScore = (
  state = {
    score: 0
  },
  action
) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return {
        score: state.score + 1
      };
    default:
      return state;
  }
};

const setColor = (
  state = {
    color: ''
  },
  action
) => {
  switch (action.type) {
    case SET_COLOR:
      switch (state.color) {
        case '':
          return {
            color: '/orange'
          };
        case '/orange':
          return {
            color: '/black'
          };
        case '/black':
          return {
            color: ''
          };
        default:
          return {
            color: ''
          };
      }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  showKitten,
  incScore,
  setColor
});
