var getPostIcon = function (icon) {
  if (icon) {
    return 'bg-ico-' + icon;
  }
  return 'bg-ico-' + randBgIco();
};

function randBgIco() {
  const arr = ['book', 'game', 'note', 'chat', 'code', 'image', 'web', 'link', 'design', 'lock'];
  return arr[randomInt(0, 9)];
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

hexo.extend.helper.register('getPostIcon', getPostIcon);