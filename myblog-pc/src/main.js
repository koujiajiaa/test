import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'$http
// import VueAxios from 'vue-axios'
import http from './utils/http'

Vue.config.productionTip = false
// Vue.use(VueAxios,axios);
//定义全局
Vue.prototype.$http=http;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
