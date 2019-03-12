<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" style="height:200px;" class="swiper">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      imgs:[],
    }
  },
  created() {
    this.$axios.get('message')
    .then(res=>{
      console.log(res.data)
      this.imgs=res.data
    })
    .catch(err=>{
      console.log('轮播图数据异常',err);
    })
  },
}
</script>

<style scoped>
  .swiper img{
    width: 100%;
    height: 250px;
  }
</style>
