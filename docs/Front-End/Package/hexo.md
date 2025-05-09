# **hexo**

> - [官网](https://hexo.io/zh-cn/docs/)

## hexo常用指令

| 指令               | 指令                      |
| ------------------ | ------------------------- | ------- |
| 清理缓存           | `hexo clean`              |
| 生成静态文件       | `hexo generate            | hexo g` |
| 部署到git 上       | `hexo deploy              | hexo d` |
| 执行上面三条指令   | `hexo generate  --deploy` |
| 写作               | `hexo new noteName`       |
| 本地服务器打开运行 | `hexo server`             |

## 注意点

> 写笔记尽量不要少写链接, 可能会出现错误

## 新建blog

```basic
hexo init <folder>
cd <folder>
npm install // 安装依赖包
hexo server // 运行
```

## 问题

1. 部署到码云上没有样式

   修改配置文件\_config.yml

   ```yml
   # URL
   ## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
   url: http://grh-gitee.gitee.io/grh/
   root: /grh/
   permalink: :year/:month/:day/:title/
   permalink_defaults:
   ```

2. hexo 推送到多个平台

```shell
   deploy:
  type: git
  repo:
       github: git@github.com:AshinWang/AshinWang.github.io.git
       coding: git@git.coding.net:AshinWang/AshinWang.coding.me.git
       gitee: git@gitee.com:AshinWang/AshinWang.git
  branch: master
```

## 修改主题默认样式

### 1. 问题: li和p默认居中显示

修改source/css/\_partial/aricle.styl

```stylus
ul
  li
    text-align: left
p
  text-align: left
```

### 2.关闭tags的渲染,但是不关闭tag cloud

修改themes\landscape\layout_partial\sidebar.ejs

```ejs
<aside id="sidebar"<% if (theme.sidebar === 'bottom'){ %> class="outer"<% } %>>
  <% theme.widgets.forEach(function(widget){ %>
    <% if(widget!='tag') { %>
    <%- partial('_widget/' + widget) %>
    <% } %>
  <% }) %>
</aside>
```

## 从零开始制作hexo主题

> config变量 : 包含站点配置(即\_config.yml中的配置)
>
> page.posts : 获取单篇文章的数据, 并获取文章的标题, 内容等数据填充到模板中
>
> 无需刷新加载插件 [jquery-pjax](<[http://bsify.admui.com/jquery-pjax/?id=%e6%94%b9%e5%8f%98%e6%b5%8f%e8%a7%88%e5%99%a8url](http://bsify.admui.com/jquery-pjax/?id=改变浏览器url)>)
>
> 代码高亮插件 [highlight](https://highlightjs.org/download/)
>
> [图标和字体](https://highlightjs.org/download/)
>
> [开发参考](https://www.cnblogs.com/yyhh/p/11058985.html)

```ejs
  <% page.posts.each(function(post){ %>
        <% console.log(post)  %>
      <% }) %>
```

```
  <% site.posts.forEach(function(post){ %>
        <%- post.path %>
        <br />
        <%- post.slug %>// 笔记文件相对路径
        <br />
        <%- post._id %>
        <br />
        <%- post.title %>
        <br />
        <%- post.date %>
        <br />
        <a href="/<%- post.path %>"><%- post.title %></a>
    <% }) %>
<% console.log(site.posts) %>
这里是 layout.ejs
<%- include('index') %>
<%- include('post') %>
```

引入高亮插件问题

```js
localhost/:1拒绝从“http://localhost:4000/lib/ lighligh/styles /agate”应用样式。因为它的MIME类型('text/html')不是一个受支持的样式表MIME类型，并且启用了严格的MIME检查。
```

```html
// 换成该方法
<link
  rel="stylesheet"
  type="text/html"
  href="../source/lib/highlight/styles/dark.css" />
```

## 更换主题
