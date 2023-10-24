const path = require('path')
// 导入 copy 和 html plugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/main.js',

  // ... 其他配置
  plugins: [
    // 生成空 HTML 文件,不需要内容
    new HtmlWebpackPlugin({
      title: 'Hello Vue',
      filename: 'index.html', // 输出文件名
      template: 'public/index.html'
    }),
    // 引入vue-loader
    new VueLoaderPlugin()
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
