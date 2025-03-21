# 边框

## border-radius:圆角

```css
div {
  border: 2px solid;
  border-radius: 25px; //添加圆角
  -moz-border-radius: 25px; /* Old Firefox */
}
```

## box-shadow:边框阴影

```css
div {
  box-shadow: 10px 10px 5px #888888;
}
```

## border-image:边框图片

> 语法`box-shadow: h-shadow v-shadow blur spread color inset;`

| 值         | 描述                                     |
| :--------- | :--------------------------------------- |
| _h-shadow_ | 必需。水平阴影的位置。允许负值。         |
| _v-shadow_ | 必需。垂直阴影的位置。允许负值。         |
| _blur_     | 可选。模糊距离。                         |
| _spread_   | 可选。阴影的尺寸。                       |
| _color_    | 可选。阴影的颜色。请参阅 CSS 颜色值。    |
| inset      | 可选。将外部阴影 (outset) 改为内部阴影。 |

```css
div {
  border-image: url(border.png) 30 30 round;
  -moz-border-image: url(border.png) 30 30 round; /* 老的 Firefox */
  -webkit-border-image: url(border.png) 30 30 round; /* Safari 和 Chrome */
  -o-border-image: url(border.png) 30 30 round; /* Opera */
}
```
