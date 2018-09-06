var path = require('path');
var webpack = require('webpack');
var ExtractTextplugin =require('extract-text-webpack-plugin');// 默认的webpack 会将require("style.css")文件嵌入js文件中，使用该插件会将css从js中提取出来
var HtmlWebpackPlugin = require('html-webpack-plugin');// 自动写入将引用写入html
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');//压缩JS
var CleanWebpackPlugin = require('clean-webpack-plugin'); //清除dist
var CopyWebpackPlugin = require('copy-webpack-plugin'); // copy图片

module.exports = {
	entry:'./src/js/index',
	output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: './dist',
    port: 8000,
    compress: true, //服务器压缩
    open: true //自动打开浏览器
  },
  module:{
    rules: [ //从右往左写，解析顺序
      {
        test: /\.css$/,
        use: ExtractTextplugin.extract({
          use: [{
              loader: 'css-loader'
            }]
        })
      }]
  },
  plugins:[
   new UglifyJsPlugin(),
   new HtmlWebpackPlugin({
   	template: './src/index.html',
      hash: true,
      minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
      },
   }),
   new ExtractTextplugin({
      filename: 'index.css'
    }),
   new CopyWebpackPlugin([
      {
        from: './src/images',
        to: './images'
      }
    ]),
   new CleanWebpackPlugin(['./dist'])
  ],
   //压缩
   optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    }
};