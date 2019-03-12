<template>
  <div id="app">
    <!-- 顶部栏区域 -->
    <mt-header title="信息管理">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由组件的出口 -->
    <router-view/>

    <!-- 底部栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/images/sy.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/images/hy.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcat">
        <img slot="icon" src="./assets/images/gwc.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/images/cz.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected:''
    }
  },
  watch: {
    selected (newV, oleV) {
      console.log(newV);
      console.log(this.selected);
      console.log(oleV);
      this.$router.push({
        name: this.selected
      });
    }

  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
</style>
