# background

background-color : #fff000 | rgb(255,255,255) | red | agba(255.255.255.0.9)

background-image : url('paper.gif')

background-repeat : no-repreat(没有平铺) | repeat-x(水平平铺) | repeat-y(垂直平铺)

background-attachment :

| 值      | 说明                                            |
| ------- | ----------------------------------------------- |
| scroll  | 背景图片随页面的其余部分滚动。这是默认          |
| fixed   | 背景图像是固定的                                |
| inherit | 指定background-attachment的设置应该从父元素继承 |
| local   | 背景图片随滚动元素滚动                          |

background-position : center

| 单一关键字 | 等价的关键字                   |
| :--------- | :----------------------------- |
| center     | center center                  |
| top        | top center 或 center top       |
| bottom     | bottom center 或 center bottom |
| right      | right center 或 center right   |
| left       | left center 或 center left     |

## background-size

> 用于控制背景图片的尺寸的大小
>
> `background-size` : 宽 高
>
> `background-size: cover;` :
>
> ​ 作用 : 将背景图片按照比例缩放到最小尺寸, 使其可以完整覆盖背景区域
>
> ​ 主要作用于 : 背景图片 < 容器小
>
> `background: contian;` :
>
> ​ 作用: 将背景图片按比例将图片缩放到最大尺寸, 使其高宽都在背景区域总
>
> ​ 主要作用于 : 背景图片 > 容器 ( 背景图片可能会发生扭曲 )

```css
div {
  background: url(bg_flower.gif);
  -moz-background-size: 63px 100px; /* 老版本的 Firefox */
  background-size: 63px 100px;
  background-repeat: no-repeat;
}
```

## background-origin:规定背景图片的定位区域

> 背景图片可以放置于 content-box、padding-box 或 border-box 区域。

![](https://images.gitee.com/uploads/images/2020/0521/204114_f4fa818f_6545143.png)

```css
div {
  background: url(bg_flower.gif);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -webkit-background-origin: content-box; /* Safari */
  background-origin: content-box;
}
```

![](https://images.gitee.com/uploads/images/2020/0521/204314_74d8bc39_6545143.png)

```css
//多重背景图片
body {
  background-image: url(bg_flower.gif), url(bg_flower_2.gif);
}
```

## background-clip:规定背景的绘制区域

```css
background-clip: border-box|padding-box|content-box;
```
