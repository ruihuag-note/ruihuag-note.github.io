# 水平垂直居中

## absolute + 负margin

> 兼容性也很好，缺点是需要知道子元素的宽高

```html
<div class="out">
  <div class="inner">12345</div>
</div>

<style type="text/css">
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    width: 100px;
    height: 100px;
    background: yellow;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
  }
</style>
```

## absolute + auto margin

> 缺点是需要知道子元素的宽高

```css
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    width: 100px;
    height: 100px;
    background: yellow;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
```

## absolute + calc

> 依赖于 calc，且也需要知道宽高

```css
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    width: 100px;
    height: 100px;
    background: yellow;
    left: calc(50% - 50px);
       top: calc(50% - 50px);
  }
```

## absolute + transform

兼容性依赖 translate，不需要知道子元素宽高

```html
<style type="text/css">
  .out{
    position: relative;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    position: absolute;
    background: yellow;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
```

## table

css新增的table属性，可以让我们把普通元素，变为table元素的显示效果，通过这个特性也可以实现水平垂直居中。
这种方法兼容性也不错。

```html
<style type="text/css">
  .out{
    display: table-cell;
    width: 300px;
    height: 300px;
    text-align: center;
    vertical-align: middle;
    background: red;
  }

  .inner{
    display: inline-block;
    background: yellow;
    width: 100px;
    height: 100px;
  }
</style>
```

## flex

flex 实现起来比较简单，三行代码即可搞定。可通过父元素指定子元素的对齐方式，也可通过 子元素自己指定自己的对齐方式来实现。第二种方式见 grid 布局。

```html
<style type="text/css">
  .out{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    background: yellow;
    width: 100px;
    height: 100px;
  }
</style>
```

## grid

grid 布局也很强大，大体上属性跟 flex 差不多。

```html
//方法一：父元素指定子元素的对齐方式
<style type="text/css">
  .out{
    display: grid;
    align-content: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    background: yellow;
    width: 100px;
    height: 100px;
  }
</style>

//方法二：子元素自己指定自己的对齐方式
<style type="text/css">
  .out{
    display: grid;
    width: 300px;
    height: 300px;
    background: red;
  }

  .inner{
    background: yellow;
    width: 100px;
    height: 100px;
    align-self: center;
    justify-self: center;
  }
</style>
```
