var replaceImg = function(content) {
  // <a data-fancybox="gallery" href="https://ws1.sinaimg.cn/large/c542ee77ly1fzs832il5hj20jg0cs10v.jpg"><img src="https://ws1.sinaimg.cn/large/c542ee77ly1fzs832il5hj20jg0cs10v.jpg"></a>
  const reg = /<img src="(.*?)".*?>/g;
  content = content.replace(reg, '<a data-fancybox="gallery" href="$1" data-height="800"><img src="$1"></a>');
  return content;
};

hexo.extend.helper.register('replaceImg', replaceImg);