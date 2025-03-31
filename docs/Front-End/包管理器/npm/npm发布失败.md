## npm 发布失败, 并要`npm adduser`, 运行后会跳转到`cnpm`登录页

- 查看淘宝镜像
  `npm get registry`
- 如果不是<https://registry.npmjs.org/>
- 重新设置

```shell
npm config set registry <https://registry.npmjs.org/>
```

然后再切回原本自己的镜像

```shell
npm config set registry https://registry.npmmirror.com/
```
