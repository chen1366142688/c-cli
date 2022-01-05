
const path = require('path')
module.exports = {
  entry: { //入口文件
    index: './src/index.js'
  },
  output: { //出口文件和名称
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}