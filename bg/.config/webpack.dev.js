import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.base.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(
  {
    port: '5300', //默认是8080
    // client: { logging: "error" },//浏览器中设置日志级别
    compress: true, //是否启用 gzip 压缩
    open: false,
    hot: false,
    liveReload: true,
    // https: true,
    historyApiFallback: true,
    watchFiles: ['src/**/*', 'public/**/*'],
    static: {
      directory: path.join(__dirname, '../../docs'), // 提供 public 目录中的静态文件
    },
    proxy: {
      '/vr/': 'http://localhost:13000/',
    },
  },
  compiler,
)

server.start()
