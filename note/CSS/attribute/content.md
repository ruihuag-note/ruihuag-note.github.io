# content

- 值
  - none : 不会产生伪类元素
  - normal : `:before` 和 `:after`伪类元素会被视为 none
  - `<string>`: 文本内容
  - `<uri> url()` : uri 会指定一个外部资源 (比如图片) , 不能正常显示就会被忽略, 或显示一些占位符(无图片标志)
  - `<counter>`
    - counter(计数器名 [, style])
    - counters(计数器名称 [, string] [,style])
  - attr(X) : 将元素的 X 属性以字符串的形式返回, 该元素没有该属性就会返回空字符串
  - open-quote | close-quote : 这些值会被 quotes 中定义的字符串替换
  - no-open-quote | no-close-quote : 不会产生任何内容, 但是会改变(增加或降低) 引号的层级

## content counter

1. counter 属性对多个项目进行连续编号, 计数器课任意命名
2. counter-increment 属性设置 counter 属性值所指定的计数器名
3. 使用 content 追加内容 coutent : '第' counter(计数器名称) '个'
4. 指定彪悍种类: content: counter(计数器名, 种类["upper-alpha"])
5. 编号嵌套需要在大标题中使用 counter-reset 进行编号重置

### 插入编号

```html
<style>
  h4::before {
    content: counter(num) '.';
    color: #f00;
  }
  h4 {
    counter-increment: num;
  }
</style>
<body>
  <h4>标题一</h4>
  <h4>标题二</h4>
  <h4>标题三</h4>
  <h4>标题四</h4>
  <h4>标题五</h4>
</body>
```

### 指定编号种类

```html
<style>
  h4::before {
    content: counter(num, upper-alpha) '.';
    color: #f00;
  }
  h4 {
    counter-increment: num;
  }
</style>
<body>
  <h4>标题一</h4>
  <h4>标题二</h4>
  <h4>标题三</h4>
  <h4>标题四</h4>
  <h4>标题五</h4>
</body>
```

### 编号嵌套

```html
<style>
  h1::before {
    content: counter(num) '.';
  }
  h1 {
    counter-increment: num;
    counter-reset: littenum; /* 重置小标题编号 */
  }
  h4::before {
    content: counter(littenum) '.';
  }
  h4 {
    counter-increment: littenum;
    margin-left: 40px;
  }
</style>
<body>
  <h1>标题</h1>
  <h4>小标题</h4>
  <h4>小标题</h4>
  <h4>小标题</h4>
  <h1>标题</h1>
  <h4>小标题</h4>
  <h4>小标题</h4>
  <h4>小标题</h4>
  <h1>标题</h1>
  <h4>小标题</h4>
  <h4>小标题</h4>
  <h4>小标题</h4>
</body>
```
