<template>
  <div class="container">
    <div class="send-article">
      <h2>欢迎发表你的文章</h2>
      <div class="send-content">
        <p>标题：<input type="text" v-model="title" /></p>
        <p>
          内容：
          <textarea
            name=""
            id=""
            cols="30"
            rows="20"
            v-model="content"
          ></textarea>
        </p>
        <p>
          <input type="hidden" />
        </p>
      </div>
      <button class="send-btn" @click="postBlog">发表</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {},
  methods: {
    postBlog() {
      let loginUser = this.$store.state.loginUser.user_id;
      if (loginUser) {
        this.$http
          .post("/blog/goArticle", {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表文章失败");
            }
          });
      } else {
        alert("请先登录");
        this.$router.push("./login");
      }
    },
  },
};
</script>
<style scoped>
.send-content {
  font-size: larger;
  width: 600px;
  height: 400px;
  padding-left: 300px;
}
.send-btn {
  width: 100px;
  height: 30px;
  font-size: larger;
}
</style>