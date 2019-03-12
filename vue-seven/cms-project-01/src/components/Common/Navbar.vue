<template>
  <div class="nav-header">
     <h5 @click="goback" class="back"><&nbsp上一页</h5>
      <h5 class="desc_title">{{title}}</h5>
  </div>
</template>
<script>
  export default{
    name: 'Navbar',
    props: ['title'],
    data() {
      return {

      }
    },
    methods: {
      goback() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style scoped>
.nav-header{
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: relative;
}
h5{
  float: left;
}
.back{
  margin-left: 15px;
}
.desc_title{
  position: absolute;
  width: 200px;
  height: 40px;
  left: 50%;
  margin-left: -100px;
  text-align: center;
}

</style>
