import { combineReducers } from 'redux';
import {
  HIDE_KITTEN,
  SHOW_KITTEN,
  INCREASE_SCORE,
  SET_COLOR,
  SET_FILTER,
  SET_TEXT,
  TOGGLE_TEXT_MENU,
  TOGGLE_GIF,
  START_TIMER,
  STOP_TIMER
} from './actions';

const isCatVisible = (state = true, action) => {
  switch (action.type) {
    case HIDE_KITTEN:
      return false;
    case SHOW_KITTEN:
      return true;
    default:
      return state;
  }
};

const score = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return state + 1;
    default:
      return state;
  }
};

const color = (state = '', action) => {
  switch (action.type) {
    case SET_COLOR:
      switch (state) {
        case '':
          return '/orange';
        case '/orange':
          return '/black';
        case '/black':
          return '';
        default:
          return '';
      }
    case TOGGLE_GIF:
      return '';
    default:
      return state;
  }
};

const isTextMenuToggled = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_TEXT_MENU:
      return !state;

    default:
      return state;
  }
};

const text = (state = '', action) => {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;
    default:
      return state;
  }
};
const isGif = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_GIF:
      return !state;
    case SET_COLOR:
      return false;
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER:
      switch (state) {
        case '':
          return '?filter=blur&';
        case '?filter=blur&':
          return '?filter=mono&';
        case '?filter=mono&':
          return '?filter=sepia&';
        case '?filter=sepia&':
          return '?filter=negative&';
        case '?filter=negative&':
          return '?filter=paint&';
        case '?filter=paint&':
          return '?filter=pixel&';
        case '?filter=pixel&':
          return '';
        default:
          return '';
      }
    default:
      return state;
  }
};
const isClicking = (state = false, action) => {
  switch (action.type) {
    case START_TIMER:
      return true;
    case STOP_TIMER:
      return false;
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  isCatVisible,
  score,
  color,
  isTextMenuToggled,
  text,
  isGif,
  filter,
  isClicking
});
