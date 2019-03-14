// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入时间moment.js
import Moment from 'moment'
//定义moment全局过滤器
Vue.filter('converTime' , function (data,formatStr) {
  return Moment(data).format(formatStr);
});
Vue.filter('relativeTime' , function (data) {
  return Moment(data).locale('zh_CN').fromNow();
});

Vue.config.productionTip = false

//使用mint-ui引入全部的组件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

//配置axios
import Axios from 'axios'
Vue.prototype.$axios = Axios
//配置公共url
Axios.defaults.baseURL='http://localhost:3000/'

//图片查看器
import VuePreview from 'vue-preview'
Vue.use(VuePreview)//内部会原型Vue.component('vue-preview',{})

//引入全局css
import '../src/assets/css/global.css'


//注册全局导航栏
import Navbar from '@/components/Common/Navbar'
Vue.component(Navbar.name,Navbar)

//注册全局评论组件
import Comment from '@/components/Common/Comment'
Vue.component(Comment.name,Comment)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
