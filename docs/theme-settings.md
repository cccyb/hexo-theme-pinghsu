## 主题配置

对主题文件夹内`themes/pinghsu`下的`_config.yml`配置文件进行修改，具体配置文件可以参考主题内的默认配置：[_config.yml](https://github.com/cccyb/hexo-theme-pinghsu/blob/master/_config.yml)。部分简单配置参考配置文件中的注释即可，配置过程中需要注意的事项主要有将在下面进行介绍。

### 菜单设置

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

### 分类页设置

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

### 标签页设置

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

### 自定义页面设置

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

### 社交设置

可以通过修改`主题配置文件`进行页面底部的社交按钮配置，你可以在`social`字段下自定义添加社交选项，格式为`name: link`形式，`name`为显示在页面上的文案，`link`为对应的跳转链接：

```yaml
# Social Setting 社交设置
social:
  知乎: 
  Github: 
```

### 个性化色块设置

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

### 个性化徽标设置

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

### 文章缩略图设置

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

### 代码高亮设置

主题支持代码高亮设置，支持对常见的编程语言进行代码高亮。

将主题配置文件中的`highlight` 选项的`enable`设置为`true`即可实现代码高亮，默认高亮主题样式为`atom-one-dark`。

```yml
highlight:
  enable: true
  theme: atom-one-dark
```

若需修改其他高亮主题，可以在[https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/)网站中右下角自行选择你满意的主题`styles`，将其名称所有字母小写，按`-`分隔开，填入`theme`即可。

比如，如果你选中的主题`styles`为`Atom One Dark`，则将其改写成`atom-one-dark`即可。

### 设置RSS

社交链接中可以添加`rss`链接，但是需要先进行配置。

**安装rss插件**

在命令行中执行：

```bash
$ cd your-hexo-site
$ npm install hexo-generator-feed --save
```

**添加rss配置**

打开根目录下的**站点配置文件**`_config.yml`，添加以下配置项：

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

###  打赏功能设置

主题支持在文章页对文章进行打赏，编辑**主题配置文件**：

```yaml
reward:
  enable: true # 是否启用
  text: 如果我的文章对你有很大帮助，那么不妨 # 打赏文案
  wechat: /images/wechat.jpg # 微信支付二维码地址
  alipay: /images/alipay.jpg # 支付宝二维码地址
```

其中二维码图片需要放置在主题目录下的`/source/images/`。

### 字数统计功能设置

主题支持显示文章字数统计 & 文章阅读时间 & 全站字数统计功能，需要手动安装`hexo-wordcount`插件进行启用，在博客目录下执行以下命令：

```bash
npm i hexo-wordcount --save
```

### 音乐播放器设置

主题支持在文章页底部添加音乐播放器，编辑**主题配置文件**，添加以下配置以启用这一功能：

```yaml
music:
  enable: true # 是否启用
  id:  # song id / playlist id / album id / search keyword
  server:  # music platform: netease, tencent, kugou, xiami, baidu
  type:  # song, playlist, album, search, artist
  auto: # music link, support: netease, tencent, xiami
  autoplay: false # 是否自动播放
```

- `id`：歌曲id，歌单id，专辑id，搜索关键词

- `server`：音乐平台，支持

  - `netease`：网易云音乐
  - `tencent`：QQ音乐
  - `kugou`：酷狗音乐
  - `xiami`：虾米音乐
  - `baidu`：百度音乐

- `type`：音乐播放类型，对应`id`

  - `song`：单曲
  - `playlist`：歌单
  - `album`：专辑
  - `search`：搜索
  - `artist`：未知

- `auto` ：音乐链接，支持网易云音乐，QQ音乐，虾米音乐
- `autoplay`：自动播放

更详细配置项介绍可参考：[https://github.com/metowolf/MetingJS](https://github.com/metowolf/MetingJS)

### 首页分页设置

```yml
index_generator:
  path: ''
  per_page: 12
  order_by: -date
```

- per_page：首页文章每页多少条
- order_by：首页文章分页排序规则，默认按时间降序

主题首页三列布局下建议设置`per_page`为`3`的倍数最佳，建议`12条`。

### 归档页设置

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

### 分类详情页和标签详情页设置

```yml
category_generator:
  per_page: 12
  
tag_generator:
  per_page: 12
```

主题中分类详情页和标签详情页双列展示，建议设置为`2`的倍数最佳。