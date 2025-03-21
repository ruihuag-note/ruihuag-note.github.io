# @keyframes

> 规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。

## 改变背景颜色

```css
@keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-o-keyframes myfirst /* Opera */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

div {
  animation: myfirst 5s;
  -moz-animation: myfirst 5s; /* Firefox */
  -webkit-animation: myfirst 5s; /* Safari 和 Chrome */
  -o-animation: myfirst 5s; /* Opera */
}
//把 "myfirst" 动画捆绑到 div 元素，时长：5 秒：
```

#### 多次改变背景颜色

> 当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变：

```css
@keyframes myfirst {
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }
}

@-o-keyframes myfirst /* Opera */ {
  0% {
    background: red;
  }
  25% {
    background: yellow;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }
}
```

#### 改变背景颜色和位置

```css
@keyframes myfirst {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

@-o-keyframes myfirst /* Opera */ {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}
```

| 属性                                                                                             | 描述                                                     |
| :----------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| [@keyframes](https://www.w3school.com.cn/cssref/pr_keyframes.asp)                                | 规定动画。                                               |
| [animation](https://www.w3school.com.cn/cssref/pr_animation.asp)                                 | 所有动画属性的简写属性，除了 animation-play-state 属性。 |
| [animation-name](https://www.w3school.com.cn/cssref/pr_animation-name.asp)                       | 规定 @keyframes 动画的名称。                             |
| [animation-duration](https://www.w3school.com.cn/cssref/pr_animation-duration.asp)               | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。         |
| [animation-timing-function](https://www.w3school.com.cn/cssref/pr_animation-timing-function.asp) | 规定动画的速度曲线。默认是 "ease"。                      |
| [animation-delay](https://www.w3school.com.cn/cssref/pr_animation-delay.asp)                     | 规定动画何时开始。默认是 0。                             |
| [animation-iteration-count](https://www.w3school.com.cn/cssref/pr_animation-iteration-count.asp) | 规定动画被播放的次数。默认是 1。                         |
| [animation-direction](https://www.w3school.com.cn/cssref/pr_animation-direction.asp)             | 规定动画是否在下一周期逆向地播放。默认是 "normal"。      |
| [animation-play-state](https://www.w3school.com.cn/cssref/pr_animation-play-state.asp)           | 规定动画是否正在运行或暂停。默认是 "running"。           |
| [animation-fill-mode](https://www.w3school.com.cn/cssref/pr_animation-fill-mode.asp)             | 规定对象动画时间之外的状态。                             |
