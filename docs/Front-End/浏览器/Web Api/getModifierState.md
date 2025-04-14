# [`getModifierState`](/)

- 获取按下的按键

## 提示用户大写锁定已开启

```js
const inputElement = document.querySelector('#your-input-element')

inputElement.addEventListener('keydown', function (event) {
  if (event.getModifierState('CapsLock')) {
    console.log('大写锁定是打开的')
  } else {
    console.log('大写锁定是关闭的')
  }
})
```

## 自定义键盘快捷操作

```js
document.addEventListener('keydown', function(event) {
    if (event.getModifierState('Shift') && event.getModifierState('Alt') && event.key === 'Z') {
        // 执行自定义操作
    }
})
```

## 检测数字锁定

```js
document.addEventListener('keydown', function(event) {
    if (event.getModifierState('NumLock')) {
        console.log('Num Lock is active');
    }
})
```

## 检测滚动锁定

```js
document.addEventListener('keydown', function (event) {
  if (event.getModifierState('ScrollLock')) {
    console.log('Scroll Lock is active')
  }
})
```

## 检测其他特殊修饰键

```js
document.addEventListener('keydown', function (event) {
  if (event.getModifierState('AltGraph')) {
    console.log('AltGraph is active')
  }
  if (event.getModifierState('OS')) {
    console.log('OS key (Windows key or Command key) is active')
  }
})
```
