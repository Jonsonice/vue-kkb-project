<template>
  <div id="app">
    <!-- 顶部栏区域 -->
    <mt-header fixed title="好车网">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由组件的出口 -->

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>


    <div class="tabBar">
      <ul>
        <li v-for="(tab,index) in tabs" :key="tab.id">
          <router-link :to="tab.routerName"
                        exact @click.native="changeHash(index)"
                        :class="{'link-active':index == currentIndex}">
            <img :src="tab.imgSrc" alt="">
            <mt-badge size="small" type="error" v-if="index===2">{{pickNum}}</mt-badge>
            <p>{{tab.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 底部栏 -->
    <!-- <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/images/sy.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/images/hy.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/images/gwc.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/images/cz.png">
        查找
      </mt-tab-item>
    </mt-tabbar> -->
  </div>
</template>

<script>

import home from './assets/images/sy.png'
import vip from './assets/images/hy.png'
import cart from './assets/images/gwc.png'
import search from './assets/images/cz.png'


let tabs=[
  {id:1,title:'首页',imgSrc:home,routerName:{name:'home'}},
  {id:2,title:'会员',imgSrc:vip,routerName:{name:'vip'}},
  {id:3,title:'购物车',imgSrc:cart,routerName:{name:'cart'}},
  {id:4,title:'查找',imgSrc:search,routerName:{name:'search'}},
];

import GoodsTool from '@/GoodsTool'

export default {
  name: 'App',
  data() {
    return {
      selected:'',
      tabs:tabs,
      currentIndex:0,
      pickNum:0
    }
  },
  methods: {
    changeHash(index){
      this.currentIndex = index;
    }
  },
  // watch: {
  //   selected (newV, oleV) {
  //     console.log(newV);
  //     console.log(this.selected);
  //     console.log(oleV);
  //     this.$router.push({
  //       name: this.selected
  //     });
  //   }
  // }
  created() {
    //绑定事件
    this.$bus.$on('sendPickNum',(data)=>{
      this.pickNum+=data;
    });
    //获取购物总数
    this.pickNum = GoodsTool.getTotalCount();
    // console.log(pickNum);
  },
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .tabBar{
    width: 100%;
    height: 55px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(180deg, #d9d9d9,#d9d9d9d9 50%,transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-color: #fafafa;
  }

  .tabBar ul{
    width: 100%;
    overflow: hidden;
  }

  .tabBar ul li{
    float: left;
    width: 25%;
    height: 55px;
    text-align: center;
  }

  .tabBar ul li a{
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 5px;
    position: relative;
  }
  .tabBar ul li a.link-active{
    background-color:#ccc;
  }
  .tabBar ul li p{
    font-size: 12px;
    color: black;
  }
  .tabBar ul li a img{
    width: 25px;
    height: 25px;
  }
  .mint-badge{
    position: absolute;
    top: 0;
    right: 10px;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
