# [`Bug`](/)

## position sticky 失效

> 在 Iphone6 plus 上使用 position sticky 不生效

解决办法：

```css
position: sticky;
position: -webkit-sticky; // 兼容写法需要写在下面
```

## `new Date().toLocaleDateString()` 获取当前的日期字符串无效

> 当系统语言是新加坡英语的时候，使用这个方法获取当前的日期字符串会出现 Invalid Date，toLocaleDateString 是有两个参数的，不指定语言就会出现这个问题，而且只在手机上出现，不太好排查，new Date().toLocaleDateString('en-Us') 调用的时候指定语言就没问题了；

## 两行溢出显示省略号但是部分手机上出现第三行截断痕迹

![](./.assets/index-2025-04-10-15-26-37.png)

> 例如设置了高度为 36px，line-height 18px，但是出现了第三行截断痕迹，应该是文字 baseline 的对其方式问题，试着设置 vertical-align 也不行。解决办法就是不给文字的盒子设置高度，如果一定要个高度兜底，可以在文字的盒子再套一个盒子，在套的那个盒子设置高度。

## 泰文字体文本溢出隐藏，但是第二行出现截断痕迹

原因，应该是泰语的字体行高要求比较高，暂时的解决办法：加高文本行高

## useEffect 首次获取 dom 的 clientHeight 不对

初步感觉是因为 css 样式加载慢了，导致第一次获取到的高度是没有样式的高度，而且又是偶现的；所以在这个组件或者 hooks 重新 render 的时候去获取高度，如果获取到最新的高度发生变化，去同步修改 state 保存的高度。

```jsx
import { useEffect, useState } from 'react'
export default function useTop() {
  const [top, setTop] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(document.body.clientHeight)
  const newestTop =
    (document.getElementById('nav-header')?.clientHeight || 0) - 1

  if (newestTop !== top) {
    // nav header height may change
    setTop(newestTop)
    setBodyHeight(document.body.clientHeight - (newestTop + 1))
  }

  useEffect(() => {
    const nav = document.getElementById('nav-header')
    const navHeight = nav?.clientHeight ?? 0
    setTop(navHeight - 1)
    setBodyHeight(document.body.clientHeight - navHeight)
  }, [])
  return { top, bodyHeight }
}
```

## 一个页面中有两个滚动条，两个滚动条几乎同时触发滚动条的滚动方法,后执行的不生效

> 两个滚动条，一个使用 scrollBy 方法，另一个使用 scrollIntoView 方法，behavior 属性都为 smooth，这个属性会让滚动条平滑移动，导致滚动条事件一直在触发状态，另一个滚动方法就执行不了了。解决方法：让先执行的方法 behavior 属性为 auto；或者在第一个滚动条结束之后再执行第二个滚动条的方法，可以让第二个方法 setTimeout 100ms 左右，不能超过 300ms，否则用户会感觉卡顿。

## iphone6 手机上横向或者纵向滑动不了

> 原因，可能是 dom 结构问题，导致低端 ios 机型没有识别到生成滚动条，导致不能滚动，android 和其他 ios 机型正常；

```html
<div className="list-tabs-wrap">
  <div className="list-tabs">
    <div className="tab-item">tab1</div>
    <div className="tab-item">tab2</div>
    <div className="tab-item">tab3</div>
  </div>
</div>
```

```css
.list-tabs-wrap {
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}
.list-tabs {
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 50px;
  background-color: #fff;
}
.list-tabs::-webkit-scrollbar {
  display: none;
  background-color: transparent;
  color: transparent;
  width: 0;
  height: 0;
}
.tab-item {
  width: 50vw;
}
```

> 解决办法，新增一个 container 结构，container dom 宽度为 max-content，overflow 拆开写

```html
<div className="list-tabs-wrap">
  <div className="list-tabs">
    <div className="list-tabs-container">
      <div className="tab-item">tab1</div>
      <div className="tab-item">tab2</div>
      <div className="tab-item">tab3</div>
    </div>
  </div>
</div>
```

```css
.list-tabs-container {
  overflow-x: scroll; // overflow 拆开写
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  width: max-content; // 纵向设置 height
}
```

> 用上面方法解决 iPhone6 滚动条问题后，又出现一个滚动条隐藏样式不生效的问题；解决办法，设置一个外层的盒子，固定高度然后 overflow: hidden，需要滚动的盒子加一个 padding-bottom: 10px，padding 大小看着改，能放下一个滚动条就可以，这样滚动条会出现在 padding 里，然后又因为外层盒子 overflow: hidden 了，所以滚动条和 padding 都看不到了；愿世界再无 iphone6.

## 在 Android webview 中，window.location.reload 和 replace 失效

```js
const reload = () => {
  const timeStamp = new Date().getTime()
  const oldUrl = window.location.href
  const url = `${oldUrl}${
    oldUrl.includes('?') ? '&' : '?'
  }timeStamp=${timeStamp}`
  window.location.href = url
}
const locationReplace = (url) => {
  if (history.replaceState) {
    history.replaceState(null, document.title, url)
    history.go(0)
  } else {
    location.replace(url)
  }
}
```

## 部分安卓手机把请求参数的字符串中间的空格转义成+号

> 发现在 谷歌 Pixel 3 XL 手机上，会把请求参数的字符串中间的空格转义成+号，比如 '[{"filterField":"accommodationType","value":"Hotel,Entire apartment"}]' => '[{"filterField":"accommodationType","value":"Hotel,Entire+apartment"}]'。调试了下，发现在发起请求前参数打印是正常的，是浏览器在请求的时候在请求体中字段转义的。不过好像对后端的搜索结果并不影响，所以这里就没有改动。

> 解决办法，对字符串 encode 下，后端收到参数后再 decode。

## ios 17 input 聚焦页面出现抖动

> 解决办法： input focus 给 body 添加 height: 100vh; overflow: hidden; 样式。input blur 取消 focus 添加的样式。
