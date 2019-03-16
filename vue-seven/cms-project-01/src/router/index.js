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
import GoodsList from '@/components/Goods/GoodsList'
import GoodsDetail from '@/components/Goods/GoodsDetail'
import GoodsComment from '@/components/Goods/GoodsComment'


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
      component:NewsDetail,
      props:{
        title:"新闻详情"
      }
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
    },
    //商品列表
    {
      path: '/goods/list/:page',
      name: 'good.list',
      component:GoodsList
    },
    {
      path: '/goods/detail/:id',
      name: 'good.detail',
      component:GoodsDetail
    },

    //商品图文介绍
    {
      path:'/goods/photo/info',
      name:'photo.info',
      component:NewsDetail,
      props:{
        title:"图文介绍"
      }
    },
    //图文评论
    {
      path: '/goods/comment',
      name: 'good.comment',
      component:GoodsComment
    }
  ]
})
