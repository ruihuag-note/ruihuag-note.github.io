import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import path from 'path'
import { fileURLToPath } from 'url'
import rules from './webpack.rules.js'
// const { ESBuildPlugin } = require('esbuild-loader')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  mode: 'development',
  target: 'web',
  output: {
    filename: '[name].[hash:8].js', // 打包的文件名
    path: path.resolve(__dirname, '../../docs'),
  },
  // stats: 'errors-only',
  experiments: {
    outputModule: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: [
      '.tsx',
      '.js',
      '.ts',
      '.less',
      '.css',
      '.module.less',
      '.d.ts',
      '.md',
    ],
  },
  module: {
    rules,
  },
  plugins: [
    new CopyPlugin({
      // patterns:
      patterns: [
        {
          from: '../note',
          // from: 'public/note',
          to: 'note',
        },
      ],
    }),
    // new ESBuildPlugin(),
    //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      // title: '0Design',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html', //打包后的文件名
      hash: true,
      // cache: false,
      cache: true,
      // favicon: './src/assets/images/favicon.ico',
      minify: {
        // removeComments: true,
        // removeAttributeQuotes: true,
        // collapseWhitespace: true,
        // minifyJS: true, // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        // minifyCSS: true // 缩小CSS样式元素和样式属性
      },
    }),
  ],
}
