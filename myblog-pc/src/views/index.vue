<template>
  <div class="container">
    <button @click="postBlog">发表文章</button>
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title">
          <!-- 页面的跳转 -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.post_time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getDate();
  },
  methods: {
    //3.header中携带token！！！！！！！！
    getDate() {
      this.$http.get("/blog/list").then((res) => {
        //把首页内容显示出来
        let { state } = res.data;
        //从catch那边转过来
        //判断失败类型
        if (state == "auth-fail") {
          alert("请求未授权-then");
        } else if (state == "success") {
          let { blogs } = res.data;
          this.blogList = blogs;
          console.log(this.blogList);
        }
      });
    },
    postBlog() {
      this.$router.push("/blog/goarticle");
    },
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>

