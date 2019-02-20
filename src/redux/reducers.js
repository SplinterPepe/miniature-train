import { combineReducers } from 'redux';
import { HIDE_KITTEN, SHOW_KITTEN, INCREASE_SCORE } from './actions';

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

export const rootReducer = combineReducers({
  showKitten,
  incScore
});
