<template>
	<div>
		<Navbar title="图文详情"/>
		<div class="photo-title">
      <p>{{imgInfo.title}}</p>
      <span>发起日期：{{imgInfo.add_time | converTime( 'YYYY-MM-DD' )}}</span>
      <span>{{imgInfo.click}}次浏览</span>
      <span>分类：汽车新闻</span>

      <!-- 缩略图 -->
      <ul>
        <li v-for="(thumImg,index) in thumImgs" :key="index">
          <a href="javascript:void(0)">
            <img :src="thumImg.src" alt="">
          </a>
        </li>
      </ul>

      <!-- 详细内容 -->
      <div class="photo-desc">
        <p>{{imgInfo.content}}</p>
      </div>
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
    }))
  },
}
</script>
<style scoped>
.photo-title p {
  font-size: 20px;
  font-weight: 600;
  color: #0f80ff;
  margin: 15px 0 ;
}
.photo-title span{
  padding: 10px 5px;
}
.photo-desc p{
  font-size: 18px;
  color: #333;
}
</style>
