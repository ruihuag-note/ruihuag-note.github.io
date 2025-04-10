# npm publish 时提示需要升级TLS 1.2的解决方案

从2021年10月4日开始，所有与npm网站和npm注册表的连接（包括软件包安装）必须使用TLS 1.2或更高版本。

很多朋友在发布npm包时可能会遇到提示：

```shell
npm notice Beginning October 4, 2021, all connections to the npm registry - including for package installation - must use TLS 1.2 or higher. You are currently using plaintext http to connect. Please visit the GitHub blog for more inf
ormation: <https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/>
npm ERR! code E426
```

这时候可以首先将npm镜像地址设为https的地址：

`npm config set registry <https://registry.npmjs.org>`
然后再尝试发布，如果还是报错，可以运行以下命令支持TLS 1.2：

`npm install -g <https://tls-test.npmjs.com/tls-test-1.0.0.tgz>`
运行完会收到提示：

```shell
Hello! The tls-test package was successfully downloaded and installed. Congratulations! Your package manager appears to support TLS 1.2.
```

如果收到错误提示，可以升级node到包含npm7以上的版本以支持TLS1.2，升级完检查下npm版本，如果没到7.0可以按照提示升级到7.0以上。
