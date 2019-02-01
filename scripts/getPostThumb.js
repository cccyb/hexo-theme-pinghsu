const getPostThumb = function(post, theme) {
    // 1. 填写了thumb字段
    if (post.thumb && validUrl(post.thumb)) { // 填写了thumb字段且字段地址合法
        return post.thumb;
    }

    // url不合法 => 2
    
    // 2. 如果没有填写thumb字段，或者thumb字段不合法，则取文章内容中寻找是否有图片，如果有，且图片地址合法，则使用第一张
    if (getFirstImgSrc(post.content)) {
        return getFirstImgSrc(post.content);
    }
    
    // 如果文章内没有图片，或者有图片，但是地址不合法 => 3

    // 3. 如果文章内也没有图片，且启用了默认缩略图，且默认缩略图合法，则使用默认缩略图
    if (theme.defaultThumb && validUrl(theme.defaultThumb)) {
        return theme.defaultThumb;
    }
    
    // 4. 如果没有开启默认缩略图或者默认缩略图地址不合法，且开启了随机缩略图选项，则使用/images/thumbs/下的初始默认随机图片，否则为空
    return randPostThumb(theme);
}

// 获取随机的默认缩略图
function randPostThumb(theme) {
    if (theme.randomThumb === 0) {
        return "";
    } else {
        const prefix = '/images/thumbs/';
        const number = theme.randomThumb && typeof theme.randomThumb === 'number' ? theme.randomThumb : 18; 
        return prefix + randomInt(1, number) + '.jpg';
    }
};

// 校验url是否是合法，可以是外链，要符合http(s)开头，也可以是source内/images/下的以（jpg | png | jpeg |webp）结尾的图片
function validUrl(url) {
    const regUrl = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*\.{1}(png|jpg|jpeg|webp)$/i;
    const regFolder = /^\/images\/.+\.{1}(png|jpg|jpeg|webp)$/i
    return regUrl.test(url) || regFolder.test(url);
}

function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

// 获取文章内容中第一张图片的src
function getFirstImgSrc(text) {
    const reg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
    return text.match(reg) && text.match(reg)[1] && validUrl(text.match(reg)[1]) && text.match(reg)[1] || false;
}

hexo.extend.helper.register('getPostThumb', getPostThumb);