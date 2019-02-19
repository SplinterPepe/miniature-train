import { combineReducers } from 'redux';
import {
  HIDE_KITTEN,
  SHOW_KITTEN,
  INCREASE_SCORE
} from './actions';

const showKitten = (state = {
  count: 0,
  isVisible: true
}, action) => {
  switch (action.type) {
    case HIDE_KITTEN: 
      return {
        ...state,
        isVisible: false
      };
    case SHOW_KITTEN:
    return {
      ...state,
      isVisible: true
    };
    // case INCREMENT: 
    //   return {
    //     ...state,
    //     count: state.count + 1
    //   };
    default:
      return state;  
  }
}

const rootReducer = combineReducers({
  showKitten
})

export default rootReducer;