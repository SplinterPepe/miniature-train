/*
 * action types
 */
export const HIDE_KITTEN = 'HIDE_KITTEN';
export const SHOW_KITTEN = 'SHOW_KITTEN';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const FETCH_NEW_KITTEN = 'FETCH_NEW_KITTEN';
export const SET_COLOR = 'SET_COLOR';
export const TOGGLE_TEXT_MENU = 'TOGGLE_TEXT_MENU';
export const SET_TEXT = 'SET_TEXT';
export const RETURN_TEXT = 'RETURN_TEXT';
export const TOGGLE_GIF = 'TOGGLE_GIF';
export const SET_FILTER = 'SET_FILTER';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
/*
 * action
 */
export function hideKitten() {
  return { type: HIDE_KITTEN };
}

export function showKitten() {
  return { type: SHOW_KITTEN };
}

export function incScore() {
  return { type: INCREASE_SCORE };
}

export function setColor() {
  return { type: SET_COLOR };
}

export function toggleTextMenu() {
  return { type: TOGGLE_TEXT_MENU };
}

export function setText(payload) {
  return { type: SET_TEXT, payload };
}

export function toggleGif() {
  return { type: TOGGLE_GIF };
}

export function setFilter() {
  return { type: SET_FILTER };
}
export function startTimer() {
  return { type: START_TIMER };
}
export function stopTimer() {
  return { type: STOP_TIMER };
}
