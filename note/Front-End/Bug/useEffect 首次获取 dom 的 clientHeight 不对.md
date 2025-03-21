# [`useEffect 首次获取 dom 的 clientHeight 不对`](/)

- 初步感觉是因为 css 样式加载慢了，导致第一次获取到的高度是没有样式的高度，而且又是偶现的；所以在这个组件或者 hooks 重新 render 的时候去获取高度，如果获取到最新的高度发生变化，去同步修改 state 保存的高度。

```js
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
