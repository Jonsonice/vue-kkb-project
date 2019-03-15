<template>
  <div class="goodslist">
    <Navbar title="商品列表"/>
    <div class="page-loadmore">
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height:wrapperHeight+'px' }">
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="autoFill">
          <ul class="page-loadmore-list">
            <li v-for="(goods,index) in goodsList" :key="index">
              <a href="javascript:void(0)">
                <div class="imgs">
                  <img :src="goods.img_url" alt="">
                </div>
                <div class="title">{{goods.title | controllShow(30)}}</div>
                <div class="desc">
                  <div class="sell">
                    <span>现价：{{goods.sell_price}}</span>
                    <s>原价：{{goods.market_price}}</s>
                  </div>
                  <div class="detail">
                    <div class="hot">
                      热卖中...
                    </div>
                    <div class="count">
                      仅剩{{goods.stock_quantity}}辆
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>

<script>
/*
mt-loadmore中的属性
1.bottomLoad函数
2.机制 bottomLoad :bottom-all-loaded 默认为false 可以上拉 true 禁止上拉
3.auto-fill默认为true 自动检测父容器，并调用bottomload直到撑满父容器
4.pull拉动未满足70px drop达到70px loading加载中
5.loadmore组件对象的onBottomLoaded()通知结束loading 进入pull状态
6.再组件上写ref在js中通过this.$refs.xxx获取的组件对象
  通过在普通标签写ref在js中通过this$refs.xxx获取的dom对象
7.上拉加载更多公式
  进入监测机制==>可视的高度+页面卷起的高度=设备的高度
*/



export default {
  name: 'GoodsList',
  data () {
    return {
      page:1,
      goodsList:[],
      allLoaded:false,
      wrapperHeight: 0,
      autoFill:false
    }
  },
  methods: {
    loadBottom(){
      console.log('上拉了');
      //通知状态发送改变

      this.loadGoodsByPage();
      this.$refs.loadmore.onBottomLoaded();
    },
    handleBottomChange(status){
      console.log(status);
    },
    loadGoodsByPage(){
        this.$axios.get('getgoods/'+'?pageindex='+this.page)
        .then(res=>{
          console.log(res.data.length);
          if(res.data.length<10){

            this.$toast("没有数据了");

            this.allLoaded=true;
          }

          if(this.page == 1){
            this.goodsList = res.data;
          // console.log(this.goodsList);
          }else{
            this.goodsList = this.goodsList.concat(res.data);
          }
          this.page++;
        })
        .catch(err=>{
          console.log("商品列表获取失败",err);
        })
      }
  },
  created() {
    // 加载第一页的列表数据
    this.loadGoodsByPage();
  },
  mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
  }
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
