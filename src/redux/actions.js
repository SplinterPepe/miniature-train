/*
 * action types
 */
export const HIDE_KITTEN = 'HIDE_KITTEN';
export const SHOW_KITTEN = 'SHOW_KITTEN';
export const INCREASE_SCORE = 'INCREASE_SCORE';
/*
 * action
 */
export function shootKitten() {
  return { type: HIDE_KITTEN }
}

export function resKitten() {
  return { type: SHOW_KITTEN }
}
export function incScore(){
  return { type: INCREASE_SCORE }
}