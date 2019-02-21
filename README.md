## Pinghsu

![](https://user-images.githubusercontent.com/20245829/52165436-baad8b00-273b-11e9-8ae1-2b2eeaa7163d.png)

本主题移植于[chakhsu](https://github.com/chakhsu)的Typecho主题[pinghsu](https://github.com/chakhsu/pinghsu)，将其基于Hexo进行重写。

引用原作者对主题的一句话介绍：

> Pinghsu 是一款以前端性能优化为出发点而制作的 Hexo 主题，同时又兼顾设计美学和视觉传达。

非常感谢原作者写出这么精美的主题供我们使用。

## 更多预览

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

##  主题亮点

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

## 安装

### 前期准备

> 安装主题前请确保已根据Hexo官方文档已搭建好本地站点，并能正常启动。

参考链接：

- [概述](https://hexo.io/zh-cn/docs)
- [建站](https://hexo.io/zh-cn/docs/setup)

### 下载主题

进入`Hexo`博客目录下，下载主题至主题`themes`目录下：

```bash
$ cd your-hexo-site
$ git clone https://github.com/cccyb/hexo-theme-pinghsu.git themes/pinghsu
```

### 启用主题

修改根目录下的**站点配置文件**`_config.yml`中的 `theme` 字段为 `pinghsu`:

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: pinghsu
```

### 更新主题

进入`Hexo`博客目录下的主题`themes`目录下的`pinghsu`目录：

```bash
$ cd your-hexo-site/themes/pinghsu
$ git pull
```

## 主题设定

### 选择主题外观

主题提供两套外观进行选择，他们是：

- 三栏（three）- 默认三栏
- 单栏（one）

你可以通过修改`主题配置文件`下的`postListSwitch`字段进行修改：

```yaml
# 首页文章列表设置
# 默认三列
# three: 三列，one：一列
postListSwitch: three
```

### 设置网站通用配置

编辑**站点配置文件**`_config.yml`，修改相关配置：

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

### 设置语言和时区

编辑**站点配置文件**`_config.yml`，将 `language` 设置成你所需要的语言。建议明确设置你所需要的语言，例如选用简体中文。将`timezone`设置成你所在的时区，配置如下：

```yml
language: zh-CN
timezone: Asia/Shanghai
```

目前本主题支持以下语言：

| 语言     | 代码  | 设定示例          |
| -------- | ----- | ----------------- |
| 简体中文 | zh-CN | `language: zh-CN` |
| 繁體中文 | zh-TW | `language: zh-TW` |
| English  | en    | `language: en`    |
| 日本語   | ja    | `language: ja`    |
| Korean   | ko    | `language: ko`    |

默认使用简体中文（zh-CN）语言，如有需要，可以按需进行更改。

#### 禁用Hexo默认自带代码高亮
由于hexo默认自带的代码高亮配置与主题代码高亮样式有所冲突，所以需要将默认的禁用，后续在主题配置文件中进行代码高亮配置。

编辑**站点配置文件**`_config.yml`：

```yml
# Writing
...
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace: 
```

## 文档
详细文档见：[文档 | Doc](https://github.com/cccyb/hexo-theme-pinghsu/wiki)
 
## 感谢

再次感谢原作者[chakhsu](https://github.com/chakhsu)创作出这么精美的主题 [pinghsu](https://github.com/chakhsu/pinghsu) 。

## 贡献

欢迎各种形式的贡献，包括但不限于优化，添加功能，文档 & 代码的改进，问题和 bugs 的报告。

## 许可证

[MIT](https://opensource.org/licenses/MIT)