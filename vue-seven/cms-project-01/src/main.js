// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


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

//引入全局css
import '../src/assets/css/global.css'


//注册全局导航栏
import Navbar from '@/components/Common/Navbar'
Vue.component(Navbar.name,Navbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
