<template>
  <div class="container">
    <div class="login-form">
      <h3>用户注册</h3>
      <p>
        用户名：<input
          type="text"
          name="username"
          id="username"
          v-model="username"
        />
        <span id="info"></span>
      </p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>昵称：<input type="text" name="nickname" v-model="nickname" /></p>
      <p>
        <button type="submit" class="btn" @click="doRegist">注册</button>
      </p>
    </div>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    doRegist() {
      this.$http
        .post("/user/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          let { state } = res.data;
          //登陆成功 跳转页面
          //2.存储token!!!!!!!!!!
          //调用store
          if (state == "success") {
            this.$router.push("/login");
          } else {
            //登陆失败
            alert("该用户名已经存在");
          }
        });
    },
  },
};
</script>
<style scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>