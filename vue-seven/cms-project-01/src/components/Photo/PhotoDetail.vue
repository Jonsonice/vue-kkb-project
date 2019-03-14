<template>
	<div>
		<Navbar title="图文详情"/>
		<div class="photo-title">
      <p>{{imgInfo.title}}</p>
      <div class="others">
        <span>发起日期：{{imgInfo.add_time | converTime( 'YYYY-MM-DD' )}}</span>
        <span>{{imgInfo.click}}次浏览</span>
        <span>分类：汽车新闻</span>
      </div>


      <!-- 缩略图 -->
      <!-- <ul>
        <li v-for="(thumImg,index) in thumImgs" :key="index">
          <a href="javascript:void(0)">
            <img :src="thumImg.src" alt="">
          </a>
        </li>
      </ul> -->

      <vue-preview :slides="thumImgs"></vue-preview>

      <!-- 详细内容 -->
      <div class="photo-desc">
        <p>{{imgInfo.content}}</p>
      </div>

      <!-- 评论组件 -->
      <Comment></Comment>
    </p>
    </div>
  </div>
</template>
<script>
export default{
  name:'PhotoDetail',
  data () {
    return {
      imgInfo:{},
      thumImgs:[]
    }
  },

  created() {
    let id = this.$route.query.id;
    var getPhotoDetail=()=> {
      // console.log(this);
      //如果使用普通函数声明当前this为undefind ，使用箭头函数
      return this.$axios.get('photodetail/'+id);
    }
    var getPhotoImage=()=> {
      return this.$axios.get('photoimgs/'+id)
    }
    this.$axios.all([getPhotoDetail(),getPhotoImage()])
    .then(this.$axios.spread((acct,perms)=>{
        // console.log(acct);
        // console.log(perms);
        this.imgInfo = acct.data;
        this.thumImgs = perms.data.srcArr;
        this.thumImgs.forEach((item,index)=>{
          item.msrc = item .src;
          item.w = 600;
          item.h = 400;
        })
    }))
  },
}
</script>
<style scoped>
.photo-title p {
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: #0f80ff;
  margin: 15px 0 ;
  padding: 0 50px;
}
.photo-title span{
  padding: 10px 5px;
  font-size: 12px;
}
.photo-desc p{
  font-size: 18px;
  color: #333;
  padding: 0 10px;
  text-align: left;
}
.others{
  margin-bottom: 10px;
  text-align: center;
}
</style>
