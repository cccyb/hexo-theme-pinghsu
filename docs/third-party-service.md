## 第三方服务

静态站点拥有一定的局限性，因此我们需要借助于第三方服务来扩展站点的功能。 以下是 pinghsu 目前支持的第三方服务，你可以根据你的需求集成一些功能进来。

### 百度统计

1. 登录 [百度统计](http://tongji.baidu.com/)，定位到站点的代码获取页面
2. 复制 `hm.js?` 后面那串统计脚本 id，如下图所示：

![](https://ws1.sinaimg.cn/large/c542ee77ly1g0d71hj37aj20ih06ot8v.jpg)

3. 编辑**主题配置文件**，修改字段 `baiduAnalytics`，值设置成你的百度统计脚本 id。

### 不蒜子统计

编辑 **主题配置文件** 中的`busuanz`的配置项，设置为`true`即可开启不蒜子统计，开启后默认在页面底部展示站点UV和站点PV

### 评论系统

本主题评论系统使用[Valine](https://valine.js.org/)进行底层支持，由于[Valine](https://valine.js.org/)是由第三方服务`LeanCloud`进行支持，因此需要先获取`LeanCloud`的相关配置。以下我将进行简要介绍，具体可以参考[Valine](https://valine.js.org/)使用文档。

**创建应用**

请先[登录](https://leancloud.cn/dashboard/login.html#/signin)或[注册](https://leancloud.cn/dashboard/login.html#/signup) `LeanCloud`, 进入[控制台](https://leancloud.cn/dashboard/applist.html#/apps)后点击左下角[创建应用](https://leancloud.cn/dashboard/applist.html#/newapp)：

![](https://ws1.sinaimg.cn/large/c542ee77ly1g0d79y5ej9j20h40coaak.jpg)

应用名称无具体要求，建议使用有明确含义的名称。

**新建Comment的Class**

新建相应的`Class`，`Class`名称为`Comment`：

![](https://ws1.sinaimg.cn/large/c542ee77ly1g0d7f6k0qxj21z010mjz4.jpg)

**获取APP ID 和 APP Key**

应用创建好以后，进入刚刚创建的应用，选择左下角的`设置`>`应用Key`，然后就能看到你的`APP ID`和`APP Key`了：

![](https://ws1.sinaimg.cn/large/c542ee77ly1g0d7bbuhwmj20xe0etjt4.jpg)

**配置安全域名**

为了你的数据安全，请设置自己的`安全域名`：

![](https://ws1.sinaimg.cn/large/c542ee77ly1g0d7hz3bmdj20qd0go40h.jpg)

**修改配置文件**

编辑**主题配置文件**，将`enable`字段设为`true`以启用评论系统，将前面获取的`AppID`和`AppKey`填写进配置文件：

```yaml
# valine评论系统
valine:
  enable: true
  appId: 你的应用AppID
  appKey: 你的应用AppKey
  placeholder: Your commnet here. Be cool.
  pageSize: 10
  avatar: mp
  ...
```

目前本主题仅支持配置以上选项，具体详情可参考：[Valine配置项](https://valine.js.org/configuration.html)，其他配置项均使用默认配置。

### 文章阅读量统计

主题使用`Valine`自带的文章阅读量统计功能，按如下配置即可开启：

```yaml
# valine评论系统
valine:
  ...
  visitor: true
```