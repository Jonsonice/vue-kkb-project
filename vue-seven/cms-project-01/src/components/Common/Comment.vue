<template>
  <div class="tmpl">
    <div class="photo_bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交评论</span>
            <span><a>返回</a></span>
          </div>
        </li>
        <li class="txt-comment">
          <textarea cols="50" rows="10"></textarea>
        </li>
        <li>
          发表评论按钮
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>44条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(comment,index) in comments">
          <span class="name">{{comment.user_name}}:</span>
          <span class="content">{{comment.content}}</span>
          <span class="time">{{comment.add_time | relativeTime}}</span>
        </li>

      </ul>
      加载更多按钮
    </div>
  </div>
</template>

<script>
export default {

  props:['cid'],
  name: 'Comment',
  data () {
    return {
      comments:[]
    }
  },
  created() {
    // console.log(this.cid);
    let page = this.$route.query.id || "1";
    // console.log(this.$route.query.id);
    // console.log('comments/'+ this.cid + '?pageindex='+page);
    this.$axios.get('getcomments/'+ this.cid + '?pageindex='+page)
    .then(res=>{
      console.log(res.data.commentArr);
      this.comments = res.data.commentArr;
      console.log(this.comments);
    })
    .catch(err=>{r
      console.log('评论加载失败');
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tmpl{
  padding: 0 10px 100px 10px;
}
.photo-comment > div span:nth-child(1){
  float: left;
  font-weight: bold;
  margin-left: 5px;
}
.photo-comment > div span:nth-child(2){
  float: right;
}
.photo-comment{
  height: 30px;
  border-bottom: 1px solid rgb(0,0,0,0.4);
  line-height: 30px;
  margin-bottom: 5px;
}
.txt-comment textarea{
  margin-bottom: 5px;
}
.comment-list li{
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding-bottom: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
}
.comment-list .name{
  float: left;
  margin-right: 10px;

}
.comment-list .content{
  font-size: 14px;
  overflow: hidden;
}
.comment-list .time{
  float: right;
  font-size: 12px;
}
li{
  list-style: none;
}
ul{
  margin: 0;
  padding: 0;
}
textarea{
  width: 100%;
  border: 1px solid #26a2ff;
}
</style>
