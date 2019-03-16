<template>
  <div class="goodsdetail">
    <Navbar title="商品详情"/>
    <div class="outer-swiper">
      <div class="swiper">
        <MySwiper :url="url" myHeight="300px"/>
      </div>
    </div>
    <div class="product-desc">
      <ul>
        <li>
          <span class="product-desc-span">商品标题</span>
        </li>
        <li class="price-li">
          市场价：<s>￥{{goodsinfo.market_price}}</s>
          销售价：<span style="font-size:18px">￥{{goodsinfo.sell_price}}</span>
        </li>
        <li class="number-li">
          购买数量：<span @click="substract">-</span><span>{{pickNum}}</span><span @click="add">+</span>
        </li>
        <li>
          <mt-button type="primary" size="small">立刻购买</mt-button>
          <mt-button type="danger" size="small" @click="ballHandler">加入购物车</mt-button>
        </li>
      </ul>
    </div>
    <transition name="ball" @after-enter="afterEnter">
      <div class="ball" v-if="isExist"></div>
    </transition>

    <div class="product-props">
      <ul>
        <li>商品参数</li>
        <li>商品货号：{{goodsinfo.goods_no}}</li>
        <li>库存情况：{{goodsinfo.stock_quantity}}辆</li>
        <li>上架时间：{{goodsinfo.add_time | converTime( 'YYYY-MM-DD' )}}</li>
      </ul>
    </div>
    <div class="product-info">
      <ul>
        <li>
          <mt-button type="primary" size="large" plain @click.native = "showShopInfo">图文介绍</mt-button>
        </li>
        <li>
          <mt-button type="danger" size="large" plain @click.native = "showComment">商品评论</mt-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetail',
  data () {
    return {
      url:'photolunbo/'+this.$route.params.id,
      goodsinfo:{},
      pickNum:1,
      isExist:false
    }
  },
  methods: {
    //小球事件
    ballHandler(){
      this.isExist = true;
    },
    afterEnter(){
      this.isExist = false;
    },
    showShopInfo(){
      //通过动态路由进行跳转
      this.$router.push({
        name:"photo.info",
        query:{
          id:this.$route.params.id
        }
      })
    },
    showComment(){
      this.$router.push({
        name:"good.comment",
        query:{
          id:this.$route.params.id
        }
      })
    },
    //数量加减
    substract(){
      if(this.pickNum===1){
        return;
      }
      this.pickNum--;
    },
    add(){
      if(this.pickNum < this.goodsinfo.stock_quantity){
        this.pickNum++;
      }
    }
  },
  created () {
    this.$axios.get('getinfo/'+ this.$route.params.id)
    .then(res=>{
      this.goodsinfo = res.data;
    })
    .catch(err=>{
      console.log("商品详情异常",err);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .goodsdetail{
    padding-bottom: 100px;
  }
  .ball-enter-active{
    animation: bounce-in 1s;
  }
  .ball-leave{
    opacity: 0;
  }
  @keyframes bounce-in {
    0%{
      transform: translate3d(0,0,0);
    }
    50%{
      transform: translate3d(100px,-50px,0);
    }
    75%{
      transform: translate3d(100px,0,0);
    }
    100%{
      transform: translate3d(100px,300px,0);
    }
  }


  .swiper{
    border: 1px solid rgba(0,0,0,0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
  }
  .outer-swiper,
  .product-desc,
  .product-props,
  .product-info{
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    margin: 3px;
  }
  .outer-swiper ul,
  .product-desc ul,
  .product-props ul,
  .product-info ul{
    padding: 0;
  }

  .product-desc ul li,
  .product-info ul, li
  .product-props ul li{
    list-style: none;
    font-size: 15px;
    color: rgba(0,0,0,0.5);
    margin-top: 8px;
  }
  .product-desc ul{
    padding: 0 10px;
  }
  .product-desc ul li .mint-button{
    margin-bottom: 5px;
  }

  .product-desc ul>:nth-child(1) span{
    color: #26a2ff;
    font-size: 18px;
    font-weight: bold;
  }
  .product-desc ul>:nth-child(1){
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }

  .product-props{
    padding: 10px;
  }
  .product-props li {
    margin: 5px 0;
    font-size: 14px;
  }
  .price-li span{
    color: red;
    font-size: 25px;
  }
  .price-li s{
    margin-right: 16px;
  }
  .product-info{
    padding: 0 10px;
  }

  .product-info ul li .mint-button{
    margin: 10px 0;
  }
  .number-li span{
    display: inline-block;
    border: 2px solid rgba(0,0,0,0.1);
    width: 25px;
    margin-right: 10px;
    text-align: center;
  }
  .number-li>:nth-child(2){
    width: 40px;
  }
  .ball{
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 538px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
  }
</style>
