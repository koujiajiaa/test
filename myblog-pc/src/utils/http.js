import axios from 'axios'
import store from '../store'
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000,
});
//带着了基本路径和授权信息
//登陆页面也带授权信息了 所有的都带了
instance.interceptors.request.use(
    function (config) {
        //获取token
        let token = localStorage.getItem('mytoken');
        //权限
        config.headers['Authorization'] = "Bearer " + token;
        return config;

    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    let { status } = error.response;
    console.log(status);
    if (status == 401) {
        //js跳转页面
        store.dispatch('logout');
        location.href = '/login'
    }
    return Promise.reject(error);
});

//导出
export default instance;