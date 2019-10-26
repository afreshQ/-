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
axios.defaults.baseURL = "http://127.0.0.1:3000";


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
