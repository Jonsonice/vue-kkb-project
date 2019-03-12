var path = require('path');

module.exports = {
  //入口
  entry:{
    //可以有多个入口，也可以有一个，如果有一个就默认从这一个入口开始解析
    "main":"./src/main.js"
  },
  output:{
    path:path.resolve('./dist'),
    filename:'./build.js'
  },
  module:{
    loaders:[
      {//style-loader css-loader
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.(jpg|png|jpeg|gif|svg)$/,
        loader:'url-loader?limit=12301474'
      },
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader'
      },

    ]
  },
  watch:true,
  //文件监视改动，自动产出build.js
}
