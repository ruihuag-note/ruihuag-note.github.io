# CSS Text(文本)

## 文本颜色

> color : blue | #00ff00 | rgb(255,0,0)

## 对齐方式

> text-align : center | left | right | justify [ 每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）]

## 文字方向

> text-direction : ltr [左到右] | rtl [右到左] | inherit[从父元素继承direction属性值]

## 字符间距

> letter-spacing : normal(默认) | length(数字,可以为负) | inherit(从父元素继承)

## 行高

> line-height : normal(默认) | number(行间距=当前字体尺寸\*number) | lenght | % | inherit

## 文本的首行元素 缩进

> text-indent : length(默认值: 0) | %(为父元素的百分比缩进) | inherit

## 文字阴影

> text-shadow : none(默认值)
>
> 语法: `text-shadow: *h-shadow v-shadow blur color*;`
>
> | 值         | 描述                                                                                         |
> | :--------- | :------------------------------------------------------------------------------------------- |
> | _h-shadow_ | 必需。水平阴影的位置。允许负值。                                                             |
> | _v-shadow_ | 必需。垂直阴影的位置。允许负值。                                                             |
> | _blur_     | 可选。模糊的距离。                                                                           |
> | _color_    | 可选。阴影的颜色。参阅 [CSS 颜色值](https://www.w3cschool.cn/cssref/css-colors-legal.html)。 |

## 元素中的字母

> text-transform :
>
> ​ none: 默认
>
> ​ capitalize: 文本中每个单词以大写字母开头
>
> ​ uppercase: 定义仅有大写字母
>
> ​ lowercase: 定义无大写字母,仅有小写字母
>
> ​ inherit: 规定从父元素继承text-transform属性

## 设置或返回文本是否被重写

> `unicode-bidi: normal|embed|bidi-override|initial|inherit;`
>
> | 值            | 描述                                                                                           | 测试                                                     |
> | :------------ | :--------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
> | normal        | 默认。不使用附加的嵌入层面。                                                                   | [测试 »](https://www.w3cschool.cn/css/css-css_quiz.html) |
> | embed         | 创建一个附加的嵌入层面。                                                                       | [测试 »](https://www.w3cschool.cn/css/css-css_quiz.html) |
> | bidi-override | 创建一个附加的嵌入层面。重新排序取决于 direction 属性。                                        | [测试 »](https://www.w3cschool.cn/css/css-css_quiz.html) |
> | initial       | 设置该属性为它的默认值。请参阅 [_initial_](https://www.w3cschool.cn/cssref/css-initial.html)。 | [测试 »](https://www.w3cschool.cn/css/css-css_quiz.html) |
> | inherit       | 从父元素继承该属性。请参阅 [_inherit_](https://www.w3cschool.cn/cssref/css-inherit.html)。     |                                                          |

## 元素垂直对齐

> vertical-align:
>
> | 值          | 描述                                                          |
> | ----------- | ------------------------------------------------------------- |
> | baseline    | 默认。元素放置在父元素的基线上。                              |
> | sub         | 垂直对齐文本的下标。                                          |
> | super       | 垂直对齐文本的上标                                            |
> | top         | 把元素的顶端与行中最高元素的顶端对齐                          |
> | text-top    | 把元素的顶端与父元素字体的顶端对齐                            |
> | middle      | 把此元素放置在父元素的中部。                                  |
> | bottom      | 把元素的顶端与行中最低的元素的顶端对齐。                      |
> | text-bottom | 把元素的底端与父元素字体的底端对齐。                          |
> | length      |                                                               |
> | %           | 使用 "line-height" 属性的百分比值来排列此元素。允许使用负值。 |
> | inherit     | 规定应该从父元素继承 vertical-align 属性的值。                |

## 元素中空白的处理方式

> white-space:
>
> | 值       | 描述                                                             |
> | :------- | :--------------------------------------------------------------- |
> | normal   | 默认。空白会被浏览器忽略。                                       |
> | pre      | 空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签。      |
> | nowrap   | 文本不会换行，文本会在在同一行上继续，直到遇到 `<br>` 标签为止。 |
> | pre-wrap | 保留空白符序列，但是正常地进行换行。                             |
> | pre-line | 合并空白符序列，但是保留换行符。                                 |
> | inherit  | 规定应该从父元素继承 white-space 属性的值。                      |

## 字间距

> word-spacing:
>
> | 值       | 描述                                         |
> | :------- | :------------------------------------------- |
> | normal   | 默认。定义单词间的标准空间。                 |
> | _length_ | 定义单词间的固定空间。                       |
> | inherit  | 规定应该从父元素继承 word-spacing 属性的值。 |
