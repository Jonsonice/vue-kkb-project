import Vue from 'vue'

//导入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 五大件
  state:{
    count:1,
    msg:'学习Vuex'
  }
})
