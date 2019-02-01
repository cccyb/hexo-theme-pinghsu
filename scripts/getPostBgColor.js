const arr = [ 'blue', 'purple', 'green', 'yellow', 'red', 'orange' ];

var getPostBgColor = function(colorBgPosts, color, defaultColor = 'deepgrey') {
  if (colorBgPosts) {
    if (arr.indexOf(color) >= 0) {
      return `bg-${color}`;
    }
    return 'bg-' + randBgColor();
  }
  return 'bg-' + defaultColor;
};

function randBgColor() {
  return arr[randomInt(0, 5)];
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

hexo.extend.helper.register('getPostBgColor', getPostBgColor);