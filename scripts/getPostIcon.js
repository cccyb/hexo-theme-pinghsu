const arr = ['book', 'game', 'note', 'chat', 'code', 'image', 'web', 'link', 'design', 'lock'];

var getPostIcon = function (icon) {
  if (arr.indexOf(icon) >= 0) {
    return 'bg-ico-' + icon;
  }
  return 'bg-ico-' + randBgIco();
};

function randBgIco() {
  return arr[randomInt(0, 9)];
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

hexo.extend.helper.register('getPostIcon', getPostIcon);