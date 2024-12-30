## max-device-width 与 max-width 区别

- max-width 指的是显示区域的宽度，比如浏览器的显示区域宽度\*\*

- max-device-width 指的是设备整个渲染（显示）区域的宽度，比如设备的实际屏幕大小，也就是设备分辨率\*\*

## FF2.0

> 父元素不能支持自适应子元素的高度

**Mozilla Firefox 2**是**Firefox**的版本的问题,

## 置换元素,不可替换元素

a) 置换元素：浏览器根据元素的标签和属性，来决定元素的具体显示内容。
例如：浏览器会根据`<img>`标签的 src 属性的 值来读取图片信息并显示出来，而如果查看(x)html 代码，则看不到图片的实际内容；`<input>`标签的 type 属性来决定是显示输入 框，还是单选按钮等。 (x)html 中 的`<img>、<input>、<textarea>、<select>、<object>` 都是置换元素。这些元素往往没有实际的内容，即是一个空元素。

置换元素在其显示中生成了框，这也就是有的内联元素能够设置宽高的原因。

b) 不可替换元素：(x)html 的大多数元素是不可替换元素，即其内容直接表现给用户端（如浏览器）。

例如： `<label>label 中的内容</label>` 标签`<label>`是一个非置换元素，文字 label 中的内容”将全被显示。

## 默认支持跨域的标签

- image, iframe,img,

## fieldset>legend

```html
<fieldset>
  <legend>类型名</legend>
  内容显示
</fieldset>
```

## 预备格式化标签

```html
<pre>>
```
