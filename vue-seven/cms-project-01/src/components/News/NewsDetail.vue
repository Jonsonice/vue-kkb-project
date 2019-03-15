<template>
	<div class="detail">
		<Navbar :title="title"/>
		<div class="item">
			<p>{{detail.title}}</p>
			<div class="others">
				<span>{{detail.click}}次点击</span>
				<span>分类:汽车新闻</span>
				<span>添加时间：{{detail.add_time | converTime( 'YYYY-MM-DD' )}}</span>
			</div>
		</div>
    <div class="divider"></div>
    <div class="detail-content">{{detail.content}}</div>
  </div>
</template>
<script>
	export default{
    name:'NewsDetail',
		data(){
			return{
				detail:{},
			}
    },
    props:['title'],
    created () {
      let id = this.$route.query.id;

      this.$axios.get('detail/' + id)
      .then( res=>{
        this.detail = res.data;
        // console.log(this.detail);
      })
      .catch(err=> {
        console.log('新闻详情异常',err);
      });
    }
	}
</script>
<style scoped>
	.detail{
    padding-bottom: 100px;
  }
  .item p {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 10px auto;
  }
  .others{
    margin: 10px auto;
    text-align: center;
    font-size: 12px;
  }
  .item span{
    margin-right: 20px;
    color: #999;
  }
  .divider{
    width:100%;
    height: 1px;
    background-color: #b3b3b3;
    margin: 5px 0;
  }
  .detail-content{
    padding: 5px 15px;
  }
</style>
