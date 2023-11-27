const path = require('path')
// html plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const outputPath = path.resolve(__dirname, 'dist')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',

  devServer: {
    hot: true
  },

  // ... 其他配置
  plugins: [
    // 根据template里的内容为底，根据entry里的配置注入
    new HtmlWebpackPlugin({
      filename: 'index.html', // 输出文件名
      template: 'public/index.html'
    }),
    // 引入vue-loader
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    filename: '[name].bundle.js',
    path: outputPath,
    clean: true
  },
  // 把vue的解析引入
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}
