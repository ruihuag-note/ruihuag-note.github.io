# var

## var 在for循环问题

### 问题分析

> 1.for循环是同步的，内部事件处理函数是异步的，所以等到异步事件触发的时候，同步代码已经跑完，因此i也加完了（这就是为什么i固定为最大值不变的原因）。
>
> 2.处理的核心思想就是在他跑完前就立即记录i的值，以备异步事件处理函数使用。
>
> 3.说白了就是利用var只有函数作用域，制造独立空间，让每个i都是独立的。
>
> var 只有函数作用域, 没有块级作用域

### 解决方法

#### 添加自启动函数

> 思路: 固定i
>
> - 制作属性进行固定
> - 利用标签属性进行固定

```js
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    console.log(i)
  }
}
```
