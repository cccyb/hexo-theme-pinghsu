var monthArchivePosts = function(posts) {
    if (posts.count() === 0) return [];
    let res = [];
    let list = [];
    let year, month;
    posts.forEach((post, index) => {
        const _year = post.date.format('YYYY');
        const _month = post.date.format('MMM');

        if (!year) year = _year; // 初始化第一年
        if (!month) month = _month; // 初始化第一个月

        if (_year === year && _month === month) { // 如果年份和月份还满足前一个条件，则push进去
            list.push(post);
        } else if (_month !== month) { // 如果月份已经改变
            // 将上一个月份的list放到回显数据中
            res.push({
                title: month + ' ' + year,
                list: list
            })

            // 改变新年份，清空文章列表，并将当前文章push进去作为第一个文章
            year = _year;
            month = _month;
            list = [];
            list.push(post);
        }

        // 如果是最后一篇了，则push到回显数据中
        if (index === posts.count() - 1) {
            res.push({
                title: month + ' ' + year,
                list: list
            });
        }
    })
    return res;
}

hexo.extend.helper.register('monthArchivePosts', monthArchivePosts);