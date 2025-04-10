# 优化

## 文档碎片

- `DocumentFragment`  是一个非常有用的 DOM 接口，它被用于创建一个轻量级的文档对象，它的独特之处在于它不会被渲染到页面中，但可以包含各种 DOM 节点。这种方法可以用于优化 DOM 操作，因为它可以减少页面上的回流和重绘次数。

```js
let content = document.createDocumentFragment()
const list_item = document.querySelector('.list')
for (let i = 0; i < 10000; i++) {
  let li = document.createElement('li')
  li.innerHTML = '我是小丽'
  content.appendChild(li)
}
container.appendChild(content)
```

- 同样避免了 dom 节点的频繁操作，而且在语义结构上更加的丰富和完善

## 减少回流操作

- 回流是指浏览器为了重新渲染部分或全部文档而重新计算元素的位置和尺寸的过程。在回流过程中，浏览器会根据各种样式属性（如宽高、边距、填充、边框等）重新计算元素的位置和大小，然后绘制到屏幕上。(这是比较消耗时间的)
- 触发回流操作
  - DOM 元素的添加、删除或修改：任何对 DOM 结构的改变都会导致回流。
  - 样式计算：修改元素的样式属性（如宽高、边距、填充等）可能导致回流。
  - 尺寸调整：调整浏览器窗口大小或添加/删除滚动条也会触发回流。
  - 获取某些属性：读取某些属性（如 offsetWidth、offsetHeight、scrollTop 等）时，浏览器可能需要回流来确保返回最新的值。

```js
for (let i = 0; i < 10000; i++) {
  document.querySelector('.list').innerHTML += `<li>我是小丽</li>`
}
```

- `document.querySelector('.list')`应当提出到循环外面用变量保存，不然每次都需要重新进行选择
- 减少操作原生 dom 的次数，不能像循环中一样每次循环操作一次。争取一次性操作完成，可以像下面这样

```js
const list_item = document.querySelector('.list')
let str = ''
for (let i = 0; i < 10000; i++) {
  str += `<li>我是小丽</li>`
}
list_item.innerHTML = str
```

## 避免直接使用标签选择器

```html
<ul class="list">
  <li class="list-item"></li>
</ul>

ul*10>li*10 // 这里代表着10个ul里面每个都拥有10个li标签
```

- 优先使用 class 选择器使用, 减少 标签选择性使用
