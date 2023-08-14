# 展示您的游戏

首先需要准备好以下信息：

* 游戏 ID：游戏唯一 ID，使用英文，不能与其他游戏重复
* 游戏标题
* 开发者名称
* 发布日期
* 发布地址：可公开访问的页面链接，比如项目主页、商店、博客、视频等
* 游戏封面：宽度 616 像素，高度 353 像素

## 通过 Pull Requests 提交您的游戏

Fork [WebGAL_HomePage](https://github.com/MakinoharaShoko/WebGAL_HomePage) 这个仓库。

将准备好的封面添加到 `/public/images/games`。

打开文件 `/data/games.ts` ，找到 `games` ，在结尾根据以下模板添加：

``` typescript
  {
    id: '游戏 ID',
    title: '游戏标题',
    developer: '开发者名称',
    releaseDate: 'xxxx-xx-xx',
    url: 'https://example.com/',
    cover: '游戏封面文件名.webp',
  },
```

确认无误后发起 pull requests 请求。

## 通过 Issues 提交您的游戏

打开 WebGAL_HomePage 仓库的 [Issues 页面](https://github.com/MakinoharaShoko/WebGAL_HomePage/issues) 。

点击 `New issue` ，填入准备好的信息，确认无误后点击 `Submit new issue` 。

## 通过其他渠道提交您的游戏

准备好需要的信息后，可以通过讨论社区或者邮箱联系我们，来提交您的游戏。
