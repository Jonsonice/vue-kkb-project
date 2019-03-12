var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packagejson = require('./package.json');
const webpack = require('webpack');

module.exports = {
  //入口
  entry:{
    //可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始解析
    "main":"./src/main.js",
    "util":Object.keys(packagejson.dependencies)
  },
  output:{
    path:path.resolve('./dist'),
    filename:'./[name].js'
  },
  watch:true,
  //文件监视改动，自动产出build.js
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      filename:'[name].js',
    }),
    new HtmlWebpackPlugin({
      //主要用于多入口文件,当你有多个入口文件的时候就会编译生成多个打包后的文件 ，chunks就能选择你要使用那些js文件
      chunks:['common','util','main'],
      template:"./src/index.html",
      inject:true,
    }),
  ]
}
