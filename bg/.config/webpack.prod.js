import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import cfg from './webpack.base.js'

cfg.mode = 'production'
// cfg.performance = {
//   hints: 'warning', // 或 'error'/'false'
//   maxEntrypointSize: 512 * 1024, // 入口文件阈值（默认244KB）
//   maxAssetSize: 512 * 1024, // 资源文件阈值
// }
cfg.optimization = {
  runtimeChunk: 'single',
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
      extractComments: false,
      terserOptions: {
        format: {
          comments: false,
        },
      },
      // minify: TerserPlugin.uglifyJsMinify,
    }),
  ],
  splitChunks: {
    chunks: 'all', // 对所有 chunk 进行优化
    minSize: 2000, // 最小尺寸，默认0
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/, // 提取 node_modules 代码
        name: 'vendors',
        priority: 10,
        enforce: true,
      },
      common: {
        minChunks: 2, // 被引用 2 次以上的代码提取
        name: 'common',
        priority: 5,
      },
    },
  },
}

cfg.plugins.unshift(
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['.docs/**/*'],
  }),
)

export default cfg
