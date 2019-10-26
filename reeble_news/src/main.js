// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vant-ui库
import Vant from 'vant';
//注册vant-ui下的提示组件
Vue.use(Vant);
//引入样式
import 'vant/lib/index.css';

//引入axios库，用来发送ajax请求
import axios from 'axios';
// 绑定到原型
Vue.prototype.$axios = axios;
// //设置默认的 api 域名        设置基准路径
axios.defaults.baseURL = "http://111.230.181.206:3000";


//这里的引入是用于全局的弹窗提示
import {Toast} from "vant";
// 使用axios拦截器统一处理响应错误
axios.interceptors.response.use(response=>{
    //拿到服务器响应回来的数据
    const {message,statusCode}=response.data;
    
    //判断statusCode==401的时候就提示错误，成功就不需要提示了
    if(message && statusCode==401){
      Toast(message);
    }
    return response;
})


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
