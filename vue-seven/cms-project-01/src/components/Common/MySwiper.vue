<template>
  <mt-swipe :auto="4000" :style="{height:myHeight}" class="swiper">
    <mt-swipe-item v-for="(item,index) in imgs" :key="index">
      <img :src="item.img || item.src" :style="{height:myHeight}">
    </mt-swipe-item>
  </mt-swipe>
</template>
<script>
  export default{
    name:"MySwiper",
    data () {
      return {
        imgs:[]
      }
    },
    created () {
       this.$axios.get(this.url)
      .then(res=>{
        // console.log(res.data)
        if(this.url === "lunboindex"){
          this.imgs= res.data
        }else{
          this.imgs = res.data.photoimgs
        }
      })
      .catch(err=>{
        console.log('轮播图数据异常',err);
      });


    },
    props:['url','myHeight'],
  }
</script>
<style>
img{
  width:100%
}
</style>
