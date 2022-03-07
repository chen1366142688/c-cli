const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')
module.exports = merge(base, {
  mode: 'development',//声明当前是开发环境
  devtool: 'inline-source-map', //源代码里内联，不需要生成外部文件，但是也能映射到源代码
  devServer: {
    static: [ //用于引用单独的js文件比如jquery.js,就需要放在public文件下并在index.html中引用才能在打包后的项目中使用
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'public'),
    ],
    host: 'localhost',
    port: 9999,
    open: true
  },
  module: {
    rules: [
      { //用来编译css代码
				test:/\.css$/,
        use: [
          //将得到的js样式对象动态插入到head标签整合到代码中
          { loader: 'style-loader' },
          //将css样式文件处理成webpack能认识的js对象
          { loader: 'css-loader' },
          //将css的兼容性问题和代码压缩问题解决
					{loader:'postcss-loader'},
				]
			},
			{ //用来编译sass代码
				test:/\.scss$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'},
					{loader:'postcss-loader'},
					{loader:'sass-loader'}
				]
			}
    ]
  }
})