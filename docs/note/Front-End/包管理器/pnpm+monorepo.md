# [`pnpm+monorepo`](/)

## 容器(root)安装模块

```shell
pnpm add <package-name> -w
```

## 运行子模块命令

```shell
pnpm run --filter package1 start
```

## 在子模块安装包

```shell
pnpm add <module-name> -W --filter <package-name>`
# eg
pnpm add lodash -W --filter package1
```

## 卸载子模块的包

```shell
pnpm remove <module-name> --filter <package-name>
# eg
pnpm remove lodash --filter package1
```
