<template>
  <div id="app">
    <h1>我是app组件的第一种用法：{{count}}和{{msg}}</h1>
    <!-- <h2>我是app组件的第二种用法：{{countAlias}}</h2> -->
    <!-- <h3>获取组件的值：{{countLocalState}}</h3> -->
    <button @click="addCount">同步计算</button>
    <button @click="addCountByasync">异步计算</button>
    <button @click="addCountByasync2">异步actions计算</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      num:10
    }
  },
  methods: {
    addCount(){
      // this.$store.state.count++;
      //不能这样操作，修改状态的唯一方法是提交mutation

      this.$store.commit('addNum',1);
    },
    addCountByasync(){
      //1.第一个参数是事件的名字，第二个参数是传递的数据表
      // this.$store.commit('addCountByasync',{num:5});
      //2.以对象的方式提交
      this.$store.commit({
        type:"addCountByasync",
        num:5
      })
    },
    addCountByasync2(){
      this.$store.dispatch('addCountByasync2',{num:5})
    }
    
  },
  // computed: mapState({
  //   count:state=>state.count,
  //   countAlias: 'count',
  //   countLocalState(state){
  //     return state.count + this.num
  //   },
  //   msg:'msg'
  // })

  // computed: {
    // count(){
    //   return this.$store.state.count
    // }
  // },

  //对象展开运算符
  // computed: {
  //   ...mapState({
  //     count:state=>state.count,
  //     countAlias: 'count',
  //     countLocalState(state){
  //       return state.count + this.num
  //     },
  //     msg:'msg'
  //   })
  // }

  computed: {
    //当前组件的计算属性的方法跟store中的state中key是一样的，简便方式
    ...mapState([
      "count",
      "msg"
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
