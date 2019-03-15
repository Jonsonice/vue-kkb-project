<template>
  <div class="goodslist">
    <Navbar title="商品列表"/>
    <div class="page-loadmore">
      <div class="page-loadmore-wrapper">
        <ul class="page-loadmore-list">
          <li v-for="(goods,index) in goodsList" :key="goods.id">
            <a href="javascript:void(0)">
              <div class="imgs">
                <img :src="goods.img_url" alt="">
              </div>
              <div class="title">{{goods.title | controllShow(30)}}</div>
              <div class="desc">
                <div class="sell">
                  <span>{{goods.sell_price}}</span>
                  <s>{{goods.market_price}}</s>
                </div>
                <div class="detail">
                  <div class="hot">
                    热卖中
                  </div>
                  <div class="count">
                    剩{{goods.stock_quantity}}辆
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      page:this.$route.params.page,
      goodsList:[]
    }
  },
  created() {
    this.$axios.get('getgoods/'+'?pageindex='+this.page)
    .then(res=>{
      this.goodsList = res.data;
      // console.log(this.goodsList);
    })
    .catch(err=>{
      console.log("商品列表获取失败",err);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-loadmore-list{
  overflow: hidden;
  height: 100%;
}

li>a:not(.mui-btu){
  margin: 0px;
  padding: 0px;
  border: 1px solid #5c5c5c;
  box-shadow: 0 0 4px #666;
  width: 100%;
  display: block;
}
li>a:not(.mui-btn)img{
  width: 100%;
}
.sell>span{
  color: red;
  margin-right: 30px;
}
.detail>.hot{
  float: left;
  text-align: left;
  margin-left: 10px;
}
.detail>.count{
  float:right;
  text-align: right;
  margin-right: 10px;
}
.detail{
  overflow: hidden;
  font-size: 12px;
  padding-bottom: 5px;
}
.desc{
  color: rgba(92,92,92,0.8);
  background-color: rgba(0,0,0,0.2);
}
img{
  width: 100%;
}
.imgs{
  background-color: #26a2ff;
}
.page-loadmore-listitem{
  border-bottom: 1px solid #eee;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.page-loadmore-listitem:first-child{
  border-top: 1px solid #eee;
}
.page-loadmore-wrapper{
  overflow:scroll;
}
.mint-loadmore-bottom span{
  display: inline-block;
  transition: .2s linear;
  vertical-align: middle;
}
.mint-loadmore-bottom span .is-rotate{
  transform: rotate(180deg);
}
.title{
  text-align: center;
  font-size: 14px;
  background-color: #26a2ff;
  color: #eee;
  padding: 10px;
}
.sell{
  text-align: center;
  font-size: 14px;
  padding-top: 5px;
}
ul{
  margin-bottom: 100px;
}
</style>
