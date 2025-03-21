Node.js 从 **v20.0.0** 开始，实验性支持 **Single Executable Applications (SEA)**，允许你将 Node.js 应用程序打包成一个独立的可执行文件（如 `.exe` 或二进制文件），无需依赖外部的 Node.js 运行时环境。以下是使用 Node.js SEA 功能的详细步骤：

---

### 1. 确认 Node.js 版本

确保你的 Node.js 版本是 **v20.0.0** 或更高版本。可以通过以下命令检查版本：

```bash
node -v
```

如果版本低于 v20.0.0，请升级 Node.js：

- 使用 [nvm](https://github.com/nvm-sh/nvm)（推荐）：

  ```bash
  nvm install 20
  nvm use 20
  ```

- 或者从 [Node.js 官网](https://nodejs.org/)下载最新版本。

---

### 2. 创建 Node.js 项目

假设你有一个简单的 Node.js 项目，结构如下：

```
my-app/
├── index.js
└── package.json
```

- **`index.js`**：

  ```javascript
  console.log('Hello, Single Executable Application!');
  ```

- **`package.json`**：

  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "main": "index.js"
  }
  ```

---

### 3. 生成 SEA 配置文件

Node.js SEA 需要一个配置文件来指定入口文件和打包选项。运行以下命令生成配置文件：

```bash
node --experimental-sea-config sea-config.json
```

- 这会生成一个 `sea-config.json` 文件，内容如下：

  ```json
  {
    "main": "index.js",
    "output": "sea-prep.blob"
  }
  ```

---

### 4. 准备 SEA Blob 文件

运行以下命令，将你的 Node.js 代码打包成一个 `.blob` 文件：

```bash
node --experimental-sea-config sea-config.json
```

- 这会生成一个 `sea-prep.blob` 文件，其中包含了你的应用程序代码和必要的元数据。

---

### 5. 创建可执行文件

接下来，将 `sea-prep.blob` 文件嵌入到一个 Node.js 二进制文件中，生成独立的可执行文件。

#### 对于 Windows

1. 下载 Node.js 的 Windows 二进制文件（如 `node.exe`）。
2. 使用以下命令将 `sea-prep.blob` 嵌入到 `node.exe` 中：

   ```bash
   npx postject node.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
   ```

3. 重命名生成的可执行文件：

   ```bash
   mv node.exe my-app.exe
   ```

#### 对于 macOS/Linux

1. 下载 Node.js 的 macOS/Linux 二进制文件（如 `node`）。
2. 使用以下命令将 `sea-prep.blob` 嵌入到 `node` 中：

   ```bash
   npx postject node NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
   ```

3. 重命名生成的可执行文件：

   ```bash
   mv node my-app
   ```

---

### 6. 运行可执行文件

现在，你可以直接运行生成的可执行文件，无需安装 Node.js：

- **Windows**：

  ```bash
  ./my-app.exe
  ```

- **macOS/Linux**：

  ```bash
  ./my-app
  ```

输出：

```
Hello, Single Executable Application!
```

---

### 7. 高级配置

#### 打包静态资源

如果你的项目包含静态资源（如 HTML、CSS、图片等），可以将这些资源一起打包到 `.blob` 文件中。在 `sea-config.json` 中指定资源路径：

```json
{
  "main": "index.js",
  "output": "sea-prep.blob",
  "resources": [
    "public/**/*"
  ]
}
```

#### 压缩可执行文件

可以使用工具（如 `upx`）进一步压缩生成的可执行文件：

```bash
upx my-app.exe
```

---

### 8. 注意事项

- **实验性功能**：Node.js SEA 目前是实验性功能，未来可能会有变化。
- **平台支持**：SEA 目前支持 Windows、macOS 和 Linux。
- **文件大小**：生成的可执行文件会包含 Node.js 运行时，因此文件体积较大。

---

### 9. 示例项目结构

```
my-app/
├── index.js
├── package.json
├── sea-config.json
├── sea-prep.blob
└── my-app.exe (或 my-app)
```

---

### 总结

- Node.js 的 Single Executable Applications (SEA) 功能允许你将应用程序打包成独立的可执行文件。
- 通过生成 `.blob` 文件并将其嵌入到 Node.js 二进制文件中，可以创建无需外部依赖的可执行文件。
- 该功能目前是实验性的，适合测试和小型项目。

希望这些步骤能帮助你成功打包 Node.js 应用程序！
