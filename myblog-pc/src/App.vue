<template>
  <div id="app">
    <div id="nav">
      <p class="nav-left">MyBlog</p>
      
      <p class="nav-right" >
        <a href="http://localhost:8080/login">登录</a> ||
        <a href="http://localhost:8080/regist">注册</a>
      
      </p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendArticle() {
      this.$router.push("/blog/goarticle");
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 1300px;
  height: 20px;
  background-color: rgb(128, 223, 202);
  margin: 0 auto;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav-left {
    float: left;
  }
  .nav-right {
    float: right;
 
  }

}

/* css reset */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}

/* 能用样式 */
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
