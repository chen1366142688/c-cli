//由于我们的webpack系列配置文件
//都是使用cli工具加载的，本质上都是通过node命令执行的
// 默认在这类文件中都只能使用CommonJs的模块加载方式
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//引入抽取css样式插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')


module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map', //独立配置源代码映射 如果报错就会在源代码中找到，不配置就在index.bundle.js中，功能就是便于查找错误位置
//   output: {
//     filename: '[name]-[hash].bundle.js'
//   },
  module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					MiniCssExtractPlugin.loader,//抽取css样式文件
					{loader:'css-loader'},
					{loader:'postcss-loader'},
				]
			},
			{
				test:/\.scss$/,
				use:[
					MiniCssExtractPlugin.loader,//抽取css样式文件
					{loader:'css-loader'},
					{loader:'postcss-loader'},
					{loader:'sass-loader'}
				]
			}
		]
	},
  plugins: [ //修改文件后构建的时候会生成一个新的文件，生成新的hash值，浏览器返回的时候就访问到的永远是最新的那个文件，而且会把之前的文件直接替换掉
    new CleanWebpackPlugin(),
    //配置样式抽取插件，生成的css文件名称为[name],[name]为entry中定义的key，生成外部文件，避免所有css都打包到bundlejs中
    new MiniCssExtractPlugin({
        //这个方括号name和HTMLWEbpackPlugin的chunks是一个意思
        //和output中的filename也是一个意思，它会识别entry里的key
        filename:'[name].css'
    }),
    new CompressionPlugin({
        algorithm: "gzip",
        test: /\.js$|\.html$|\.css$/,
        threshold: 10240,
        minRatio: 0.8
    }),
    new CopyPlugin({
        patterns: [
            { 
                from: path.resolve(__dirname,'public'),
                to: path.resolve(__dirname,'dist')
            },
        ],
        options: {
            concurrency: 100,
        },
    })
  ]
})
