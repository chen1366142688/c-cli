
const path = require('path') //nodeJS自带的
const HtmlWebpackPlugin = require('html-webpack-plugin') //用于解析public中的HTML文件，把和src中的js文件关联起来
module.exports = {
  entry: { //入口文件,可以配置多个 配合plugin中的chunks
    index: './src/index.js'
    // test: './src/test.js'
  },
  output: { //出口文件和名称 webpack只提供了混淆压缩babel
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', //自动识别entry中的key来生成文件名
    publicPath: ''
  },
  module: {
    rules: [ //规则
      {
        test: /\.js$/, //正则匹配以js结尾的文件
        use: { //使用babel-loader处理
          loader: 'babel-loader'
        }
      },
      { //在webpack.base.js中增加file-loader用来解析文件，转换成静态资源和可访问的文件路径
        test:/\.(png|jpg|jpeg|gif)$/,
          use:[
            {loader:'file-loader'}
          ]
      }
    ]
  },
  plugins: [ //拦截webpack生命周期
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      //用于将entry里面解析出来的加工之后的js部分和HTML网页进行关联
      // chunks: ['index', 'test']
      chunks: ['index']
    })
  ],
  resolve:{ //路径解析
    //配置免后缀的文件类型
    extensions:['.js','.jsx','.vue','.css','.less','.scss'],
    //为全路径配置缩写@
		alias:{
			'@':path.resolve(__dirname,'src')
		}
  }
}