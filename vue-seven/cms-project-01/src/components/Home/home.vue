<template>
  <div class="home">
    <!-- 轮播图 -->
    <!-- <mt-swipe :auto="4000" style="height:200px;" class="swiper">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe> -->
    <MySwiper url="lunboindex" myHeight="250px"/>
    <!-- 九宫格 -->
    <div class="list">
      <ul>
        <li v-for="(grid,index) in grids" :key="grid.id">
          <router-link :to="grid.router">
            <img :src="grid.src" alt="">
          </router-link>
          <p>{{grid.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import src1 from '../../assets/images/home/xw.png'
import src2 from '../../assets/images/home/tw.png'
import src3 from '../../assets/images/home/sp.png'
import src4 from '../../assets/images/home/kf.png'
import src5 from '../../assets/images/home/ly.png'
import src6 from '../../assets/images/home/ss.png'

var grids = [
  {id:1,src:src1,title:'新闻资讯',router:{name:'news.list'}},
  {id:2,src:src2,title:'图文分享',router:{name:'photo.list',params:{categoryId:0}}},
  {id:3,src:src3,title:'商品展示',router:{name:'good.list',params:{page:1}}},
  {id:4,src:src4,title:'资讯',router:{name:'news.list'}},
  {id:5,src:src5,title:'留言反馈',router:{name:'news.list'}},
  {id:6,src:src6,title:'联系我们',router:{name:'news.list'}},
];


export default {
  name: 'home',
  data() {
    return {
      imgs:[],
      grids:grids,
    }
  },
  created() {
    // this.$axios.get('lunboindex')
    // .then(res=>{
    //   // console.log(res.data)
    //   this.imgs=res.data
    // })
    // .catch(err=>{
    //   console.log('轮播图数据异常',err);
    // })
  },
}
</script>

<style scoped>
  .list{
    width: 100%;
  }
  .list ul{
    display: flex;
    flex-wrap: wrap;
  }
  .list ul li{
    width: 33%;
    height: 100px;
    text-align: center;
    font-size: 14px;
    margin-top: 15px;
  }
  .list ul li a{
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  .list ul li a img{
    width: 50px;
  }
</style>
