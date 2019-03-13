<template>
  <div class="photolist">
    <div class="category-list">
      <ul>
        <li v-for="(category,index) in photoclass" :key="category.id">
          <a href="#">{{category.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 图片展示区 -->
    <div class="photo-list">
      <ul>
        <li v-for="(item,index) in photolist" :key="item.id">
          <a href="">
            <!-- <img :src="item.img_url" alt="">-->
            <img v-lazy="item.img_url">
          </a>
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
      photoclass:[]
    }
  },
  methods: {
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
  created () {
    this.loadImgByCategoryId(1);

    this.$axios.get('photoclass')
    .then(res=>{
      this.photoclass = res.data;
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
    height: 50px;
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
    color: #26a2ff;
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
