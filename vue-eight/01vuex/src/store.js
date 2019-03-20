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
      {id:4, msg:"我的生活4"},
      {id:5, msg:"我的生活5"}
    ]
  },
  getters:{
    lists(state){
      return state.lists;
    },
    item:(state)=>(i)=>{
      return state.lists[i]
    }
  },
  mutations:{
    addNum(state,num){
      state.count+=num;
    },
    //不要在这里操作异步数据
    addCountByasync(state,payload){
      console.log(payload);
      // setTimeout(()=>{
        state.count+=payload.num;
      // },1000)
    },
    addCountByasync2(state,num){
      state.count+=num;
    }
  },
  actions: {
    addCountByasync2({commit},payload){
      setTimeout(()=>{
        commit('addCountByasync2',payload.num)
      },1000)
    }
  }
})
