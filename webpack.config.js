const path = require('path')
// 导入 copy 和 html plugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const outputPath = path.resolve(__dirname, 'dist'); 

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
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
  },
  // ... 其他配置
  plugins: [
    // 复制 public 文件到输出目录
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: outputPath
        }
      ]
    }),
    // 生成空 HTML 文件,不需要内容
    // new HtmlWebpackPlugin({
    //   title: 'Hello Vue',
    //   filename: 'index.html', // 输出文件名
    //   templateContent: '' // 不生成内容
    // }),
    // 引入vue-loader
    new VueLoaderPlugin()
  ]
}
