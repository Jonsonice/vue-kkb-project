<template>
  <div class="cart">
    <Navbar title="购物车"/>
      <div class="pay-detail">
        <ul>
          <li class="p-list" v-for="(shop,index) in shopCart" :key="shop.id">
            <mt-switch v-model="shop.isSelected"></mt-switch>
            <img :src="shop.thumb_path" alt="">
            <div class="pay-calc">
              <p>{{shop.title}}</p>
              <div class="calc">
                <span>￥：{{shop.sell_price}}</span>
                <span @click="substract">-</span>
                <span>{{shop.num}}</span>
                <span @click="addNum">+</span>
                <a href="">删除</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="show-price">
        <div class="show-1">
          <p>总计（不含运费）：</p>
          <span>已经选择商品1件，总价9999元</span>
        </div>
        <div class="show-2">
          <mt-button type="danger" size="large">去结算</mt-button>
        </div>
      </div>
  </div>
</template>

<script>
import GoodsTool from '@/GoodsTool'
export default {
  name: 'Cart',
  data () {
    return {
      shopCart:[]
    }
  },
  methods: {
    addNum(shop){
      shop.num++;
      console.log(shop);
    },
    substract(shop){
      shop.num--;
    }
  },
  created() {

    let goodsList = GoodsTool.getGoodsList();
    console.log(goodsList);

    let ids = Object.keys(goodsList).join(',');
    console.log(ids);

    if(ids){
      //发起请求获取列表
      this.$axios.get('getshopcartlist/')
      .then(res=>{
        this.shopCart = res.data;
        console.log(shopCart);

        for(var i =0;i<this.shopCart.length;i++){
          let shop = this.shopCart[i];
          let num = goodsList[shop.id];
          if(num){
            this.$set(shop,"num",num);
            this.$set(shop,"isSelected",true);
            // shop.num = num;
            // shop.isSelected = true;
          }
        }
      })
      .catch(err=>{
        console.log("购物车获取失败",err);
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .pay-detail ul li{
    list-style: none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin-bottom: 3px;
  }
  .pay-detail ul{
    padding-left: 5px;
    margin-top: 5px;
  }
  .pay-detail ul li img{
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
  }
  .pay-detail ul li >:nth-child(1),
  .pay-detail ul li >:nth-child(3){
    display: inline-block;
  }

  .pay-calc p{
    display: inline-block;
    width: 250%;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
  }
  .pay-detail ul li >:nth-child(1){
    line-height: 80%;
  }
  .calc:nth-child(1){
    color: red;
    font-size: 20px;
  }
  .calc span:not(:nth-child(1)){
    border: 1px solid rgba(0,0,0,0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
  }
  .calc a{
    margin-left: 20px;
  }
  .show-1,
  .show-2{
    display: inline-block;
    margin-left: 30px;
  }
  .show-price{
    background-color: rgba(0,0,0,0.2);
  }
</style>
