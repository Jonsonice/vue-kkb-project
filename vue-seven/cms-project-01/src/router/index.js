import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import Vip from '@/components/Vip/vip'
import Search from '@/components/Search/search'
import Cart from '@/components/Cart/cart'
import NewsList from '@/components/News/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/news/list',
      name: 'news.list',
      component:NewsList
    },
  ]
})
