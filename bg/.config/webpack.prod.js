import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import config from './webpack.base.js'

config.mode = 'production'
config.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      include: /\.min\.js$/,
    }),
  ],
}
config.plugins.unshift(
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [
      '.docs/**/*',
    ],
  }),
)

export default config
