<template>
  <div class="photolist">
    <Navbar title="图文列表"/>
    <div class="category-list">
      <ul>
        <li v-for="(category,index) in photoclass" :key="category.id" @click="categoryHandler(category.id,index)">
          <a href="javascript:void(0);" :class="{active:index == currentIndex}">{{category.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 图片展示区 -->
    <div class="photo-list">
      <ul>
        <li v-for="(item,index) in photolist" :key="item.id">
          <router-link :to="{name:'photo.detail',query:{id:item.id}}">
            <!-- <img :src="item.img_url" alt="">-->
            <img v-lazy="item.img_url">
          </router-link>
          <p>
            <span>{{item.title}}</span>
            <br>
            <span>{{item.zhaiyao}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoList',
  data () {
    return {
      photolist:[],
      photoclass:[],
      currentIndex:0
    }
  },
  methods: {
    categoryHandler(id,index){
      //动态路由跳转
      this.$router.push({name:"photo.list",params:{categoryId:id}})
      this.currentIndex = index;
    },
    loadImgByCategoryId(id){
      this.$axios.get('photolist')
      .then(res=>{
        this.photolist = res.data;
      })
      .catch(err=> {
        console.log('图片列表异常',err)
      });
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm=>{
      vm.loadImgByCategoryId(to.params.categoryId)
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    // console.log(to);
    // console.log(from);
    this.loadImgByCategoryId(to.params.categoryId);
    next();
},
  created () {
    // this.loadImgByCategoryId(0);

    this.$axios.get('photoclass')
    .then(res=>{
      this.photoclass = res.data;
      //添加数据全部
      this.photoclass.unshift({"id":0,"title":"全部"});
    })
    .catch(err=>{
      console.log('图片标题异常',err)
    })
  }
  // created () {
  //     this.$axios.get('photolist')
  //     .then( res=>{
  //       this.photolist = res.data;
  //       // console.log(this.photolist);
  //     })
  //     .catch(err=> {
  //       console.log('图片列表异常',err)
  //     });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category-list{
    width: 100%;
    height: 50px;
    overflow: hidden;
  }
  .category-list ul{
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .category-list ul li{
    display: inline-block;
    width: 25%;
    height: 100%;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
  }
  .category-list ul li a{
    text-decoration: none;
    font-size: 16px;
    color: black;
  }
  .category-list ul li a.active{
    color: #26a2ff;
  }
  .photo-list{
    padding-bottom: 100px;
  }
  .photo-list ul li{
    width: 100%;
    position: relative;
  }
  .photo-list ul li a{
    text-decoration: none;
    font-size: 16px;
  }
  .photo-list ul li a.active{
    color: #fc0280;
  }
  .photo-list ul li{
    width: 100%;
    position: relative;
  }
  .photo-list ul li a{
    display: block;
    width: 100%;
  }
  .photo-list ul li a img{
    width: 100%;
  }
  .photo-list ul li p{
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    padding: 5px 0 ;
  }
  .photo-list ul li p span{
    color: #e6e6e6;
    font-size: 16px;
  }
  .photoList{
    padding-bottom: 100px;
  }
  image[lazy=loading]{
    width: 40px;
    height: 300px;
    margin: auto;
  }

  .icon-meiyoutupian{
    width: 50px;
    height: 50px;
  }
</style>
