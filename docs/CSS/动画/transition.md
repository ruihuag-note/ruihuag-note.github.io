# transition

> 过渡

```css
div {
  transition: width 2s, height 2s, transform 2s;
  -moz-transition: width 2s, height 2s, -moz-transform 2s;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
  -o-transition: width 2s, height 2s, -o-transform 2s;
}

div:hover {
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
  -moz-transform: rotate(180deg); /* Firefox 4 */
  -webkit-transform: rotate(180deg); /* Safari and Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
//实现鼠标移至元素div上,div会变成div:hover{},过渡时间为2s
```

| 属性                                                                                               | 描述                                         |
| :------------------------------------------------------------------------------------------------- | :------------------------------------------- |
| [transition](https://www.w3school.com.cn/cssref/pr_transition.asp)                                 | 简写属性，用于在一个属性中设置四个过渡属性。 |
| [transition-property](https://www.w3school.com.cn/cssref/pr_transition-property.asp)               | 规定应用过渡的 CSS 属性的名称。              |
| [transition-duration](https://www.w3school.com.cn/cssref/pr_transition-duration.asp)               | 定义过渡效果花费的时间。默认是 0。           |
| [transition-timing-function](https://www.w3school.com.cn/cssref/pr_transition-timing-function.asp) | 规定过渡效果的时间曲线。默认是 "ease"。      |
| [transition-delay](https://www.w3school.com.cn/cssref/pr_transition-delay.asp)                     | 规定过渡效果何时开始。默认是 0。             |
