var getPostBgColor = function(colorBgPosts, color, defaultColor = 'deepgrey') {
  if (colorBgPosts === 'true') {
    if (color) {
      return `bg-${color}`;
    }
    return 'bg-' + randBgColor();
  }
  return 'bg-' + defaultColor;
};

function randBgColor() {
  const arr = [ 'blue', 'purple', 'green', 'yellow', 'red', 'orange' ];
  return arr[randomInt(0, 5)];
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

hexo.extend.helper.register('getPostBgColor', getPostBgColor);