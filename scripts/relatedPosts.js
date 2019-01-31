var relatedPosts = function(page, limit) {
    var res = [];
    page.tags.forEach(function(tag) {
        tag.posts.forEach(function(post) {
            // 结果数组中不存在且不是当前文章
            if (!isExist(post, res) && post._id !== page._id) {
                res.push(post);
            }
        })
    })
    return sort(res, 'date', 'desc').slice(0, limit);
}

/**
 * 判断指定是否在文章列表中
 * @param {*} post 
 * @param {*} posts 
 */
function isExist(post, posts) {
    return posts.some(function(item) {
        return item._id == post._id;
    })
}

/**
 * 数组根据指定key排序
 * @param {*} arr 
 * @param {*} key 
 * @param {*} sort 
 */
function sort(arr, key, sort) {
    return arr.sort(function(a, b) {
        return sort === 'asc' ? a[key] - b[key] : b[key] - a[key];
    })
}

hexo.extend.helper.register('relatedPosts', relatedPosts);