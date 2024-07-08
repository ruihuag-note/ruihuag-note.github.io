# [`Node.js中使用ES6报错`](/)

背景
index.js：

```js
import hello from './cpoy';
hello();
```

cpoy/index.js：

```js
const hello = () => {
    console.log("hello world!")
}
export default hello
```

* 在 package.json 中添加了"type": "module"配置。

报错
`Directory import xxxx is not supported resolving ES modules imported from xxxx`

解决
正确导入方式为`import hello from './cpoy'/index.js`，而不是`import hello from './cpoy'；`不要忘了`.js`。
