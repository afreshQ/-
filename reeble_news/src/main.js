// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

router.beforeEach((to,from,next)=>{
  //在本地存储获取token
  let token=localStorage.getItem('token');
  // console.log(to);
  // 判断要进入的地址是否是proflie个人中心
  let pagesNeedAuth=[
    '/profile','/editprofile','/myconcern','/mypost'
  ]
  if(pagesNeedAuth.indexOf(to.path)>=0){
    // 存在token就往下走，不存在则跳转到登录页
    if(token){
      next();
    }else{
      next('/login');
    }
  }else{
    //继续运行下一中间件
    next();
  }
})

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

// 添加请求拦截器处理
axios.interceptors.request.use(config=>{
  //如果请求头没有带上token，并且本地存储上带有token，则给请求带上,不用每次操作用户数据都要写一遍
  if(!config.headers.Authorization && localStorage.getItem('token')){
    config.headers.Authorization=localStorage.getItem('token');
  }
  return config;
});


//这里的引入是用于全局的弹窗提示
import {Toast} from "vant";
// 使用axios拦截器统一处理响应错误
axios.interceptors.response.use(response=>{
    //拿到服务器响应回来的数据
    const {message,statusCode}=response.data;
    // console.log(response);
    
    //判断statusCode==401的时候就提示错误，成功就不需要提示了
    if(message && statusCode==401){
      Toast(message);
    }

    //token过期或者错误会返回{message: "用户信息验证失败",statusCode: 401}
    //token过期或者错误处理   
    if(message=="用户信息验证失败"){
      //这里用replace方法，替换导航，不会留有历史记录
      // replace和push的区别在于push会把新的路由添加到最后一位，而replace会直接替换掉最后的路由
      router.replace("/login");
    }
    return response;
})


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
})
