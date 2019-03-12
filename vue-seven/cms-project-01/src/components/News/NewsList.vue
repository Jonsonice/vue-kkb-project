<template>
  <div class="news">
    <Navbar title="新闻列表"/>
    <div class="newList">
			<ul>
        <li v-for="(news,index) in newsList" :key="news.id">
          <router-link :to="{name:'detail',query:{id:news.id}}">
            <div class="new_img">
              <img :src="news.img_url"/>
            </div>
            <div class="content">
              <p class="title">{{news.title}}</p>
              <div class="news-desc">
                <p class="summary">{{news.zhaiyao}}</p>
                <p>
                  <span class="praise">点赞数：{{news.click}}</span>
                  <span class="time">发表时间：{{news.add_time | converTime( 'YYYY-MM-DD' )}}</span>
                </p>
              </div>
            </div>
          </router-link>
          <span class="line"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:'NewsList',
    data () {
      return{
        newsList:[],
      }
    },
    //created 创建组件的生命周期函数中，可以操作数据
    created () {
      this.$axios.get('newslist')
      .then( res=>{
        this.newsList = res.data;
        // console.log(this.newsList);
      })
      .catch(err=> {
        console.log('新闻列表异常',err)
      });
    }
  }
</script>
<style scoped>
.news{
  padding-bottom: 100px;
  margin-top: 8px;
}
.newList{
  width: 100%;
  border-bottom: 1px solid #ccc;
  font-size: 12px;
}
.newList ul li{
  position: relative;
}
.newList ul li a {
  display: block;
  width: 100%;
  height: 150px;
  color: #808080;
  display: flex;
  text-decoration: none;
}
.new_img{
  width: 60%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}
.newList ul li a img{
  width: 150px;
  height: 100px;
  background-color: red;
  border-radius: 3px;
}
.content{
  margin-left: 10px;
  margin-right: 10px;
}
.content .title{
    font-size: 16px;
    margin-top: 20px;
    color: black;

}
.content .summary{
  margin: 5px 0 ;
  overflow: hidden;
  height: 35px;
}
.content .praise{
  color:darkgrey;
  margin-right: 5px;
}
.content .time{
  color:darkgrey;
}
.line{
  display: block;
  border-bottom: 1px solid #c8c7cc;
}

</style>
