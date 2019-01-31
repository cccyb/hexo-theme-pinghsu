var yearArchivePosts = function(posts) {
    if (posts.count() === 0) return [];
    let res = [];
    let list = [];
    let year;
    posts.forEach((post, index) => {
        const _year = post.date.format('YYYY');

        if (!year) year = _year; // 初始化第一年

        if (_year === year) { // 如果年份还属于当前列表的年份，则push进去
            list.push(post);
        } else { // 如果年份已经改变
            // 将上一个年份的list放到回显数据中
            res.push({
                title: year,
                list: list
            })

            // 改变新年份，清空文章列表，并将当前文章push进去作为第一个文章
            year = _year;
            list = [];
            list.push(post);
        }

        // 如果是最后一篇了，则push到回显数据中
        if (index === posts.count() - 1) {
            res.push({
                title: year,
                list: list
            });
        }
    })
    return res;
}

hexo.extend.helper.register('yearArchivePosts', yearArchivePosts);