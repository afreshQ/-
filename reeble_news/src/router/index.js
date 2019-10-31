import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Profile from '@/pages/Profile'
import EditProfile from '@/pages/EditProfile'
import MyConcern from '@/pages/MyConcern'
import MyPost from '@/pages/MyPost';
import MyCollection from '@/pages/MyCollection';
import Home from '@/pages/Home';
import PostDetail from '@/pages/PostDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Home
    },
    // 登陆
    {
      path:'/login',
      name:'loginPage',
      component:Login
    },
    // 注册
    {
      path:'/register',
      name:'registerPage',
      component:Register
    },
    // 个人中心
    {
      path:'/profile',
      name:'profilePage',
      component:Profile,
    },
    // 个人详情
    {
      path: '/editprofile',
      name: 'editProfilePage',
      component: EditProfile
    },
    {
      path:'/myconcern',
      name:'myConcernPage',
      component:MyConcern
    },
    {
      path:'/mypost',
      name:'myPost',
      component:MyPost
    },
    {
      path:'/mycollection',
      name:'myCollection',
      component:MyCollection
    },
    {
      path:'/pagedetail/:id',
      name:'pageDetail',
      component:PostDetail
    },
  ]
})
