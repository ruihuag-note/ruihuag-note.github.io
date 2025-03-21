# [`获取网站favicon.icon`](/)

## 方法一

直接在网站网址后面加favicon.ico
例如：<https://www.baidu.com/favicon.ico>
（有一些网站可能会直接跳转到网站页面，并不会显示图标文件）

## 方法二

F12或者右键查看网页源代码，然后再网页头部找到 ,链接指向即为favicon.ico的地址
例如：有道翻译网站的图标获取

`<link rel="shortcut icon" href="http://shared.ydstatic.com/images/favicon.ico" type="image/x-icon">`

但一些网站（例如方法一中的百度的ico文件）是指向静态资源目录，无法获取到

## 方法三

也是我比较推荐的方法
<http://www.google.com/s2/favicons?domain=网站地址>
例如获取百度的：<http://www.google.com/s2/favicons?domain=www.baidu.com>
