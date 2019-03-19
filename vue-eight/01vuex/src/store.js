import Vue from 'vue'

//导入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 五大件
  state:{
    count:1,
    msg:'学习Vuex',
    lists:[
      {id:1, msg:"我的生活1"},
      {id:2, msg:"我的生活2"},
      {id:3, msg:"我的生活3"},
      {id:4, msg:"我的生活4"}
    ]
  },
  getters:{
    lists(state){
      return state.lists;
    }
  }
})
