import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    loginUser: ""
  },
  //操同步作
  mutations: {
    //存入登录的完整的用户信息
    storeLoginUser(state, user) {
      state.loginUser = user
    },
  },
  actions: {
    //异步操作
    //存入登录的完整的用户信息
    // storeLoginUser(state, user) {
    //   state.loginUser= user
    // },
    setToken: (state, token) => {
      state.token = token;
      console.log(state.token);
      localStorage.setItem('mytoken', token)
    },
    //清空权限信息
    logout: state => {
      state.token = null;
      localStorage.removeItem('mytoken')
    }
  },
  modules: {
  }
})
