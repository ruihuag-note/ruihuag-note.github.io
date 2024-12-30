# [`在 Android webview 中，window.location.reload 和 replace 失效`](/)

```js
const reload = () => {
  const timeStamp = new Date().getTime()
  const oldUrl = window.location.href
  const url = `${oldUrl}${oldUrl.includes('?') ? '&' : '?'}timeStamp=${timeStamp}`
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
