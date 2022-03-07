
const path = require('path') //nodeJS自带的
const HtmlWebpackPlugin = require('html-webpack-plugin') //用于解析public中的HTML文件，把和src中的js文件关联起来
const { VueLoaderPlugin } = require('vue-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: { //入口文件,可以配置多个 配合plugin中的chunks
        main: './src/main.js'
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
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html',
            chunks:['main']
        }),
        new VueLoaderPlugin(),
        new BundleAnalyzerPlugin({
            //  可以是`server`，`static`或`disabled`。
            //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
            //  在“静态”模式下，会生成带有报告的单个HTML文件。
            //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
            analyzerMode: 'server',
            //  将在“服务器”模式下使用的主机启动HTTP服务器。
            analyzerHost: '127.0.0.1',
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            analyzerPort: 8889, 
            //  路径捆绑，将在`static`模式下生成的报告文件。
            //  相对于捆绑输出目录。
            reportFilename: 'report.html',
            //  模块大小默认显示在报告中。
            //  应该是`stat`，`parsed`或者`gzip`中的一个。
            //  有关更多信息，请参见“定义”一节。
            defaultSizes: 'parsed',
            //  在默认浏览器中自动打开报告
            openAnalyzer: true,
            //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
            generateStatsFile: false, 
            //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
            //  相对于捆绑输出目录。
            statsFilename: 'stats.json',
            //  stats.toJson（）方法的选项。
            //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
            //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
            statsOptions: null,
            logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
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