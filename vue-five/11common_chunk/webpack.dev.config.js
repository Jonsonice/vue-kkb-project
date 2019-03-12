var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packagejson = require('./package.json');
const webpack = require('webpack');

module.exports = {
  //入口
  entry:{
    //可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始解析
    "main1":"./src/main1.js",
    "main2":"./src/main2.js",
    "vender":Object.keys(packagejson.dependencies)
  },
  output:{
    path:path.resolve('./dist'),
    filename:'./[name].js'
  },
  watch:true,
  //文件监视改动，自动产出build.js
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:['vender','runtime'],
      filename:'[name].js',
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:['runtime'],
    //   filename:'[name].js',
    //   chunks:['vender']//子文件
    // })
  ]
}
