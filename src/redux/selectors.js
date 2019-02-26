export const getKittenStatus = state => state.showKitten.isVisible;
export const getScore = state => state.incScore.score;
export const getColor = state => state.setColor.color;
export const getIsTextMenuToggled = state =>
  state.toggleTextMenu.isTextMenuToggled;
export const getText = state => state.text;
