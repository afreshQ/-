<template>
  <div class="container">
    <router-link to="/editprofile">
      <div class="row1">
        <img :src="headImg" />
        <div class="profile">
          <span :class="gender?'iconfont iconxingbienan':'iconfont iconxingbienv'"></span>
          <span class="name">{{nickname}}</span>
          <p class="time hui">2019-10-25</p>
        </div>
        <span class="hui iconfont iconjiantou1"></span>
      </div>
    </router-link>
    <div class="row2">
        <cellBar
         label="我的关注"
         desc='关注的用户'
         @jump="$router.push('/myconcern')"
         />
        <cellBar
         label="我的跟帖"
         desc='跟帖 / 回复'
         @jump="$router.push('/mypost')"
         />
         <cellBar
         label="我的收藏"
         desc='文章 / 视频'
         @jump="$router.push('/mycollection')"
         />
         <cellBar
         label="设置"
         @jump='toLabel'
         desc=''/>
         <!-- 添加退出登陆功能 -->
         <cellBar
         label="退出登陆"
         @jump='Logout'
         desc=''/>
    </div>
  </div>
</template>

<script>
import cellBar from "../components/cellBar";
export default {
  components: {
    cellBar: cellBar
  },
  data(){
    return {
      nickname:'',
      gender:'',
      headImg:''
    }
  },
  methods:{
      toLabel(label){
        console.log(label);
        
      },
      Logout(){
        //弹出提示框
        this.$dialog.confirm({
          message: '确定要退出吗?'
        })
        //点击确认执行
        .then(()=>{
           //删除本地存储上的token
          localStorage.removeItem("token");
          // localStorage.removeItem("userId");
          this.$router.replace({
            name:'loginPage'
          })
        })
        // //点击关闭执行
        .catch(()=>{
          return;
        })

      }
  },

  //根据本地存储上的userid去后台拿数据渲染到页面上
  created(){
    this.$axios({
      url:`/user/${localStorage.getItem('userId')}`,
      method:'get',
      //还要用token去和后台匹配
      headers:{
        Authorization:localStorage.getItem('token')
      }
    }).then(response=>{
      // console.log(response.data);
      let {nickname,gender,head_img}=response.data.data;
      this.nickname=nickname;
      this.gender=gender;    
      //有些用户并没有设置头像，所以我们在这设置一个默认头像
      this.headImg=head_img?this.$axios.defaults.baseURL+head_img:'/static/imgs/defaults_img.png';
      
    })
  }
};
</script>

<style lang='less' scoped>
.container {
  font-size: 5.556vw;
  .row1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:8.333vw 2.778vw 8.333vw 5.556vw;
    border-bottom: 5px #e4e4e4 solid;
    .profile {
        flex:1;
        padding-left: 4.167vw;
      .time{
          font-size: 3.889vw;
      }
    }
    img {
      width: 19.444vw;
      height: 19.444vw;
      border-radius: 50%;
    }
  }
  .row2 {
    padding-left: 5.556vw;
  }
  .hui{
      color:#a0a0a0;
  }
}
</style>