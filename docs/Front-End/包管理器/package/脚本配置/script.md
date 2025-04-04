# Script

> 脚本

## 列出可运行脚本

> `npm i -g ntl`
> 到对应的目录下运行`npm run`

## 并行运行脚本

> `&&` 符号依次运行多个脚本
> `并行运行脚本`: [concurrently](https://www.npmjs.com/package/concurrently)

```json
{
  "start": "concurrently \"command1 arg\" \"command2 arg\""
}
```

### 延迟运行脚本直到端口准备就绪

```json
"dev": "concurrently \"cross-env BROWSER=none npm run start\" \"wait-on http://localhost:3000 && electron .\""
```

> `wait-on`: 只有在`http://localhost:3000`启动好, 才打开electron窗口
> React默认情况下会打开一个浏览器窗口，但对于 Electron 开发来说，这是不必要的。咱们可以通过传递环境变量BROWSER=none来禁用此行为

## 不同目录运行脚本

```shell
# 手动打开到对应目录
cd folder && npm start && cd ..
# 使用prefix
npm start --prefix path/to/your/folder
```

```json
{
  "start": "concurrently \"(npm start --prefix client)\" \"(npm start --prefix server)\""
}
```

## 脚本跨平台

> `cross-env` > `npm i -D cross-env`

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```
