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
          <textarea cols="50" rows="10" v-model="commentContent"></textarea>
        </li>
        <li>
          <mt-button type="primary" size="large" @click="commentHandler()">发表评论</mt-button>
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>{{comments.length}}条评论</span>
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
      <mt-button type="danger" size="large" @click="loadMore(page)">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
export default {

  props:['cid'],
  name: 'Comment',
  data () {
    return {
      comments:[],
      page:1,
      commentContent:''
    }
  },
  methods: {
    //评论按钮事件操作
    commentHandler(){
      //post请求
      this.$axios.post('postcomment/' + this.cid,'content=' + this.commentContent)
      .then(res=>{
        console.log(res.data.commentArr);
        this.commentContent='';
        this.page=1;
        this.loadMore();
      })
      .catch(err=>{
        console.log("评论失败",err);
      })
    },


    //加载更多按钮操作
    loadMore(page){
      this.$axios.get('getcomments/'+ this.cid + '?pageindex='+this.page)
      .then(res=>{
        // console.log(res.data.commentArr);
        // this.comments = res.data.commentArr;
        // console.log(this.comments);

        if(res.data.commentArr.length === 0){
          this.$toast('没有数据了');
        }

        if (page){
          //表示加载更多
         this.comments = this.comments.concat(res.data.commentArr)
        }else{
          //否则第一次加载
          this.comments = res.data.commentArr;
        }
        this.page++;
      })
      .catch(err=>{r
        console.log('评论加载失败',err);
      })
    }
  },
  created() {
    // console.log(this.cid);

    let page = this.$route.query.id || "1";
    // console.log(this.$route.query.id);
    // console.log('comments/'+ this.cid + '?pageindex='+page);

    this.loadMore();


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
