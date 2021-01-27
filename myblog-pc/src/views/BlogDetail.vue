<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog.title }}</h3>
        <span> {{ blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog.content }}</div>
      <!-- 评论 -->
      <div class="comments">
        <h3>欢迎评论</h3>
        <div
          class="comment"
          v-for="(item, i) in blog.comments"
          :key="item.comm_id"
        >
          <div class="comment-content">{{ i + 1 }}.{{ item.comm_content }}</div>
          <div class="comment-info">
            <span class="userinfo">{{ item.username }}</span>
            <span class="post-time">{{ item.comm_post_time }}</span>
          </div>
        </div>
        <div class="addComment">
          <input class="add-info" name="commenttext" type="text" v-model="commenttext" />
          <button class="add-btn" @click="addCommment()">发表你的评论</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: "",
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blogId = this.$route.params.blogId
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          //把首页内容显示出来
          let { state, blog } = res.data;
          console.log(blog);
          //从catch那边转过来
          //判断失败类型
          if (state == "success") {
            this.blog = blog;
          }
        })
        .catch((err) => {
          this.$router.push("/login");
          console.log(err);
        });
    },
    //添加评论
    addCommment() {
      this.$router.push("/blog/addComment",{
         commenttext:this.commenttext,
          blogId:this.blog.blog_id 
      }).then((res)=>{
          console.log(res);
          this.getBlogDetail()
        });
    },
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
  border-bottom: 1px solid #000000;
}
.blog-discuss {
  padding-left: 15px;

  float: left;
}
.comment {
  padding: 20px;
}
.btn-send {
  margin-top: 30px;
  float: right;
  width: 120px;
  height: 30px;
}
.comment-info {
  float: right;
}
.add-comment{
  border-top: 1px solid #000;
  padding: 10px;
  
  
}
.add-info{
  border: rgb(167, 103, 103) 1px solid;
  width: 800px;
  height: 30px;
  line-height: 30px;
}
.add-btn{
  float: right;
width:100px;
height: 40px;
}
</style>
