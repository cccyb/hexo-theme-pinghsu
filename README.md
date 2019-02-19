---
title: Pinghsu，A Hexo Theme
date: 2019/02/02 12:46:25
categories:
- Tutorials
tags:
- Hexo
- Theme
- Pinghsu
thumb: https://ws1.sinaimg.cn/large/c542ee77ly1fzs83ifsetj20jg0d015w.jpg
---
## Pinghsu

![](https://ws1.sinaimg.cn/large/c542ee77ly1fzsfoy2cpkj21i40w4agz.jpg)

本主题移植于[chakhsu](https://github.com/chakhsu)的Typecho主题[pinghsu](https://github.com/chakhsu/pinghsu)，将其基于Hexo进行重写。

引用原作者对主题的一句话介绍：

> Pinghsu 是一款以前端性能优化为出发点而制作的 Hexo 主题，同时又兼顾设计美学和视觉传达。

非常感谢原作者写出这么精美的主题供我们使用。

## Preview 更多预览

| 首页  -  三栏                                                | 首页  -  单栏                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs472hub0j212o0u0x4b.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs47jccpdj212o0u0asm.jpg) |

| 文章内容页 -  题图                                           | 文章页 -  目录                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4ebe3g8j212o0u04c1.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4ekgj9zj212o0u0gtj.jpg) |

| 页面内容页                                                   | 归档页                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4et3z9jj212o0u0afa.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4eyxefjj212o0u0tdo.jpg) |

| 分类页                                                       | 分类详情页                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4fstfgvj212o0u0af9.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4fzojorj212o0u0wkl.jpg) |

| 标签页                                                       | 标签详情页                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4g6fv2xj212o0u0wkg.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4gbxbb3j212o0u0wjy.jpg) |

| 移动端  -  首页                                              | 移动端  -  文章页                                            | 移动端  - 归档页                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4nqaebfj20yi22ohdz.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4nvydnvj20yi22o7g3.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4q06qtnj20yi22ok05.jpg) |

| 移动端  -  分类页                                            | 移动端  -  标签页                                            | 移动端  -  详情归档页                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4oif8u9j20yi22ownz.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4on2tsrj20yi22ogx7.jpg) | ![](https://ws1.sinaimg.cn/large/c542ee77ly1fzs4ot9p54j20yi22ok43.jpg) |

下载地址：[https://github.com/cccyb/hexo-theme-pinghsu](https://github.com/cccyb/hexo-theme-pinghsu)

在线预览：[https://chenyubo.me](https://chenyubo.me)

## Features 主题亮点

- 页面预加载与DNS预解析保证极快访问速度
- 无JQuery，无前端框架，无webfont
- HighlightJS代码高亮，支持22种编程代码
- 响应式设计，支持平板与手机，访问体验甚至优于桌面
- 支持图片CDN镜像，支持多种文章缩略图设置
- 支持首页三栏和单栏选择，文章题图和色块
- 支持文章目录、相关文章与数学公式渲染
- 支持文章个性化标徽设置，10种标徽选择
- 支持个人社交按钮，社交分享
- 还有更多亮点等你去发现~

## Install 安装

### Prepare 前期准备

> 安装主题前请确保已根据Hexo官方文档已搭建好本地站点，并能正常启动。

参考链接：

- [概述](https://hexo.io/zh-cn/docs)
- [建站](https://hexo.io/zh-cn/docs/setup)

### Download 下载主题

进入`Hexo`博客目录下，下载主题至主题`themes`目录下：

```bash
$ cd your-hexo-site
$ git clone https://github.com/cccyb/hexo-theme-pinghsu.git themes/pinghsu
```

### Start 启用主题

修改根目录下的配置文件`_config.yml`中的 `theme` 字段为 `pinghsu`:

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: pinghsu
```

### Update 更新主题
进入`Hexo`博客目录下的主题`themes`目录下的`pinghsu`目录：

```bash
$ cd your-hexo-site/themes/pinghsu
$ git pull
```

## Setting 主题设置

### Site Setting 网站通用设置

对**站点根目录**配置文件`_config.yml`进行相关配置：

#### 网站通用设置

```yml
# Site
title: 输入你的博客标题
...
description: 输入你的博客描述
keywords: 输入你的博客关键词
author: 输入你的名字

# URL
url: 你的域名
```

#### 国际化语言（i18n）和时区设置

```yml
language: zh-CN
timezone: Asia/Shanghai
```

本主题现支持以下语言：

- 简体中文：zh-CN
- 繁体中文：zh-TW
- 英文：en
- 日文：ja
- 韩文：ko

默认使用简体中文（zh-CN）语言，如有需要，可以按需进行更改。

#### 禁用Hexo默认自带代码高亮

```yml
# Writing
...
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```

由于hexo默认自带的代码高亮配置与主题代码高亮样式有所冲突，所以需要将默认的禁用，后续在主题配置文件中进行代码高亮配置。

#### 首页分页设置

```yml
index_generator:
  path: ''
  per_page: 12
  order_by: -date
```

- per_page：首页文章每页多少条
- order_by：首页文章分页排序规则，默认按时间降序

主题首页三列布局下建议设置`per_page`为`3`的倍数最佳，建议`12条`。

#### 归档页设置

```yml
archive_generator:
  enabled: true
  per_page: 0
  yearly: true
  monthly: true
  daily: false
  order_by: -date
```

- per_page - 归档页每页展示文章数量，`0`表示不分页
- order_by - 文章排序规则，默认按照创建时间降序

#### 分类详情页和标签详情页设置

```yml
category_generator:
  per_page: 12
  
tag_generator:
  per_page: 12
```

主题中分类详情页和标签详情页双列展示，建议设置为`2`的倍数最佳。

### Theme Setting 主题个性配置

对主题文件夹内`themes/pinghsu`下的`_config.yml`配置文件进行修改，具体配置文件可以参考主题内的默认配置：[_config.yml](https://github.com/cccyb/hexo-theme-pinghsu/blob/master/_config.yml)。部分简单配置参考配置文件中的注释即可，配置过程中需要注意的事项主要有将在下面进行介绍。

#### Menu菜单设置

Menu菜单设置主要包括两部分，第一是菜单项（名称和链接），第二是菜单项的显示文本。

**菜单项设置**

修改**主题配置文件**中的`menu`字段，设置格式为`name：link`，注意，`name`并不是显示页面上的文本，而是一个`key`用以匹配链接和文本。

`menu`选项的设置顺序将决定了页面中的菜单项顺序，设置中的顺序从上至下将依次在页面中从左到右展示。

```yml
menu:
  categories: /categories
  tags: /tags
  archives: /archives
  links: /links
  about: /about
```

pinghsu主题默认的菜单项包括：分类，标签，归档，友情链接，关于我。**但是需要注意：**只有归档页（archives）的页面是默认可以显示的，分类页（categories）、标签页（tags）分别参考下面的分类页设置和标签页设置，友情链接（links）、关于我（about）参考下面的自定义页面设置。

**菜单项文本设置**

我们第一步设置的菜单项的`name`并不是直接用于页面展示，Hexo在生成页面的时候会使用`name`去对应的语言配置文件中寻找对应的翻译文本展示到页面上。这些翻译文本放置在主题目录下的`languages/{language}.yml`中。

我们以简体中文为例，如果你在第一步中添加了一个额外的菜单项`example: /example`，那么就需要在对应的简体中文语言文件`languages/zh-CN.yml`中，在`menu`字段下添加一项：

```yml
menu:
  categories: 分类
  tags: 标签
  archives: 归档
  links: 友情链接
  about: 关于我
  example: 示例菜单
```

#### 分类页设置

分类页默认不存在，需要进行手动配置才能在页面上正确展示。

**新建分类页面**

在终端中进入Hexo站点目录，使用`hexo new page`新建一个页面，命名为`categoies`：

```bash
$ cd your-hexo-site
$ hexo new page categories
```

**设置页面类型**

打开刚刚新建的`source/categories/index.md`，将页面的`type`设置成`categories`，主题将自动为这个页面显示成分类页。

```markdown
title: 分类
date: 2019-02-01 12:39:04
type: "categories"
---
```

**修改菜单**

主题已默认添加分类菜单。

#### 标签页设置

标签页与分类页设置相似，只是需要将对于的categories改为tags即可。

**新建标签页面**

在终端中进入Hexo站点目录，使用`hexo new page`新建一个页面，命名为`tags`：

```bash
$ cd your-hexo-site
$ hexo new page tags
```

**设置页面类型**

打开刚刚新建的`source/tags/index.md`，将页面的`type`设置成`tags`，主题将自动为这个页面显示成标签页。

```markdown
title: 标签
date: 2019-02-01 12:39:04
type: "tags"
---
```

**修改菜单**

主题已默认添加标签菜单。

#### 自定义页面设置

自定义页面和分类和标签页面一样，本质上是一个独立页面，但与上述分类页和标签页不同，分类页和标签页的内容有主题中的内置模板决定，而普通自定义页面的内容将由`index.md`中的内容决定，最终渲染的效果与文章页相识，本质上就是一篇md文章。主题默认菜单中的`links`和`about`就是一个普通的自定义页面。

下面我们以关于我页面`about`为例，介绍自定义页面的设置过程：

**新建页面**

在终端中进入Hexo站点目录，使用`hexo new page`新建一个页面，名称自定义，我们这里使用`about`，

```bash
$ cd your-hexo-site
$ hexo new page about
```

**编辑页面内容**

打开刚刚新建的`source/about/index.md`，跟正常书写文章一样，进行页面内容的编辑，但是需要注意：自定义页面不支持文章的某些字段，比如：分类`categories`，标签`tags`，色块`color`，徽标`icon`，缩略图`thumb`。

**修改菜单**

友情链接`links`和关于我`about`页面的菜单项主题已默认添加，如果你添加了其他自定义页面，可以参照菜单设置进行对应的配置。

#### 个性化色块设置

本主题支持对文章进行个性化色块设置，需要在主题配置文件将`colorBgPosts`设置为`true`开启，色块出现的地方有首页，分类详情页，标签页，标签详情页。

```yml
colorBgPosts: true
```

设置方法为在文章md文件顶部添加自定义字段`color`，支持的字段值有：`blue`、`purple`、`green`、`yellow`、`red`。

```markdown
title: 文章标题
date: 2019-02-01 12:39:04
...
color：blue
---
```

如果文章中没有设置`color`或者`color`字段设置的值不在上述字段中，则会随机选择一个颜色。如果`colorBgPosts`为`false`，则默认为`deepgrey`灰色。

#### 个性化徽标设置

本主题支持对文章添加个性化徽标，个性化徽标默认显示，不可关闭，个性化徽标出现的地方有首页，分类详情页，标签详情页，相关文章。

设置方法类似个性话色块，在文章md文件顶部添加自定义字段`icon` ，支持的字段值有：`book` 、 `game` 、 `note` 、 `chat` 、 `code` 、 `image` 、 `web` 、 `link` 、 `design`、 `lock`。

```markdown
title: 文章标题
date: 2019-02-01 12:39:04
...
icon：book
---
```

如果文章中没有设置`icon`或者`icon`字段设置的值不在上述字段中，则会随机选择一个徽标。

#### 文章缩略图设置

本主题支持对文章进行缩略图配置：

```yml
# 默认缩略图
defaultThumb: 

# 随机缩略图设置
# 设为 0 则不使用主题自带的缩略图
# 不为 0 时表示默认随机缩略图的数量
randomThumb: 18

# 文章题图设置
# 启用则在文章页顶部显示缩略图
showPostThumb: true
```

文章缩略图出现的地方有首页，文章页顶部。

文章设置缩略图方法有三种，自定义字段`thumb`，文章第一张图片，默认缩略图。

优先级顺序为：自定义字段`thumb` → 文章第一张图片 → 默认缩略图 → 随机缩略图 → 无。

缩略图尺寸大小，高度至少250px，宽度大于高度，推荐高度为400px。

**自定义字段`thumb`**

在文章顶部添加`thumb`字段，可以填外链地址，要符合标准的url，以http(s)开头，也可以填写本地文件路径，比如`/images/xxx.jpg`,图片文件放置在主题的`/source/images`目录或其子目录下，图片后缀仅支持`png`，`jpg`，`jpeg`，`webp`。

若未添加`thumb`字段，或者添加的`thumb`字段不符合上述规则，则字段不生效，会使用下一优先级的缩略图配置。

**文章第一张图片**

主题会从文章正文中找出第一张图片的`src` 作为缩略图。若文章中没有插入图片，则会使用下一优先级缩略图配置。

**默认缩略图**

默认缩略图需要在配置文件中填写`defaultThumb` 字段，填写地址要求同自定义字段`thumb`，若留空或者地址不合法，则会使用下一优先级的缩略图配置。

**随机缩略图**

随机缩略图需要在配置文件中配置`randomThumb`字段。

```yml
randomThumb: 18
```

字段值为随机缩略图的数量，主题默认提供18张缩略图进行随机选择，如果需要新增图片或者删除图片，可以在`source/images/thumbs`目录下进行操作，注意，图片命名要为纯数字，从1开始，且后缀必须为`jpg`，比如`1.jpg`，自定义缩略图后，将`randomThumb`的值修改成文件夹内图片的数量。

**无缩略图**

若将`randomThumb`字段设为0，则表示禁用随机缩略图，则在首页缩略图部分显示个性化色块的颜色，在文章页顶部题图显示为灰色，所以建议至少开始随机缩略图选项。

**文章题图**

文章页顶部支持题图设置，若缩略图设置不为空，且`showPostThumb`设为`true`，则在文章页顶部会展示题图，图片内容为缩略图的内容。

#### 高亮设置

主题支持代码高亮设置，支持对常见的编程语言进行代码高亮。

将主题配置文件中的`highlight` 选项的`enable`设置为`true`即可实现代码高亮，默认高亮主题样式为`atom-one-dark`。

```yml
highlight:
  enable: true
  theme: atom-one-dark
```

若需修改其他高亮主题，可以在[https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/)网站中右下角自行选择你满意的主题`styles`，将其名称所有字母小写，按`-`分隔开，填入`theme`即可。

比如，如果你选中的主题`styles`为`Atom One Dark`，则将其改写成`atom-one-dark`即可。

#### rss配置

社交链接中可以添加`rss`链接，但是需要先进行配置。

**安装rss插件**

在命令行中执行：

```bash
$ cd your-hexo-site
$ npm install hexo-generator-feed --save
```

**添加rss配置**

打开根目录下的`_config.yml`，添加以下配置项：

```yml
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
  icon: icon.png
```

具体配置详情见：[https://github.com/hexojs/hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) ，请自己根据文档按需配置。

**添加菜单**

rss配置添加完成后，在主题配置文件`_config.yml`中的`social`字段中填写`rss`地址，值为`/atom.xml`。

```yml
social:
  ...
  rss: /atom.xml
  ... 
```

## Todos 未来

- 搜索页
- 谷歌分析
- 文章阅读次数
- 打赏功能
- 代码压缩
- 更完整的使用文档
- 图片点击放大预览
- ...more

## Thanks 感谢

再次感谢原作者[chakhsu](https://github.com/chakhsu)创作出这么精美的主题 [pinghsu](https://github.com/chakhsu/pinghsu) 。

## Contributing 贡献

欢迎各种形式的贡献，包括但不限于优化，添加功能，文档 & 代码的改进，问题和 bugs 的报告。

## License 许可证

[MIT](https://opensource.org/licenses/MIT)
