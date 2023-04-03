export const decreaseFontSize = () => {
  // Get current font size
  let currentFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize,
  );

  // Decrease font size by 1 pixels, but don't go below 14 pixels
  let newFontSize = Math.max(currentFontSize - 1, 14);

  document.documentElement.style.fontSize = newFontSize + 'px';
};

export const increaseFontSize = () => {
  // Get current font size
  let currentFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize,
  );

  // Increase font size by 1 pixels, but don't go above 18 pixels
  let newFontSize = Math.min(currentFontSize + 1, 18);

  document.documentElement.style.fontSize = newFontSize + 'px';
};

export const resetFontSize = () => {
  // Set font size to default value (16px)
  document.documentElement.style.fontSize = '16px';
};
