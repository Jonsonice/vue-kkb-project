import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import Vip from '@/components/Vip/vip'
import Search from '@/components/Search/search'
import Cart from '@/components/Cart/cart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  linkActiveClass:"link-active",

  routes: [
    {
      path:'/',
      redirect:'/home'
    },
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
    //新闻列表
    {
      path: '/news/list',
      name: 'news.list',
      component:NewsList
    },
    {
      path: '/news/detail',
      name: 'detail',
      component:NewsDetail
    },
    //图文分享
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component:PhotoList
    },
    {
      path: '/photo/detail',
      name: 'photo.detail',
      component:PhotoDetail
    }
  ]
})
