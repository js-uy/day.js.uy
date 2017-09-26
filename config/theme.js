export const black = '#0f1010';
export const blue = '#101931';
export const gray = '#27292c';
export const gridColumns = 12;
export const gridColumnWidth = 70;
export const gridSpacing = 30;
export const headerHeight = 60;
export const lightblue = '#42f0ff';
export const lightgray = '#ccc';
export const mobileThreshold = 992;
export const white = '#fff';
export const yellow = '#faf200';
export const horizontalPadding = `
  calc(50vw - ${(gridColumns * gridColumnWidth + (gridColumns - 1) * gridSpacing) / 2}px)
`;

export default {
  black,
  blue,
  gray,
  gridColumns,
  gridColumnWidth,
  gridSpacing,
  headerHeight,
  horizontalPadding,
  lightblue,
  lightgray,
  mobileThreshold,
  white,
  yellow,
};
