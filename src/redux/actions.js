/*
 * action types
 */
export const HIDE_KITTEN = 'HIDE_KITTEN';
export const SHOW_KITTEN = 'SHOW_KITTEN';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const FETCH_NEW_KITTEN = 'FETCH_NEW_KITTEN';
export const SET_COLOR = 'SET_COLOR';
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
