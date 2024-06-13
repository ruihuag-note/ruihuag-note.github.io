# [`ios 17 input 聚焦页面出现抖动`](/)

* 解决办法： input focus 给 body 添加 height: 100vh; overflow: hidden; 样式。input blur 取消 focus 添加的样式。
