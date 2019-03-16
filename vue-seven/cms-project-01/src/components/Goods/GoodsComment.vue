<template>
  <div class="goodscomment">
    <Navbar title="商品评论"/>
    <Comment :cid= "$route.query.id"/>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
