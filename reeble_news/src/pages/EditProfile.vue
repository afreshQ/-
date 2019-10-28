<template>
  <div class="editprofile">
    <div class="title">
      <span @click="$router.back()" class="iconfont iconjiantou2"></span>
      <span>编辑资料</span>
      <span class="iconfont iconjiantou2 vbhide"></span>
    </div>
    <div class="head-img">
      <img :src="headImg?'http://111.230.181.206:3000' +headImg:'http://img4.imgtn.bdimg.com/it/u=2841002847,3345892877&fm=26&gp=0.jpg'" />
    </div>
    <div class="userinfo">
      <cellBar
      label="昵称"
      :desc="nickname"
      />
      <cellBar
      label="密码"
      desc="*****"
      />
      <cellBar
      label="性别"
      :desc="gender?'男':'女'"
      />
    </div>
  </div>
</template>

<script>
import cellBar from '../components/cellBar'
export default {
  components:{
    cellBar:cellBar
  },
  data(){
    return {
      nickname:'',
      gender:'',
      headImg:'',
      password:''
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
      this.nickname=response.data.data.nickname;
      this.gender=response.data.data.gender;
      this.headImg=response.data.data.head_img;
      this.password=response.data.data.password;
      
    })
  }
}
</script>

<style lang="less">
  .editprofile{
    .title{
      padding:0 15px;
      line-height: 50px;
      display: flex;
      justify-content:space-between;
    }
    .userinfo{
      padding-left: 5.556vw;
    }
    .head-img{
      padding: 20px 0;
      text-align: center;
      img{
      border-radius: 50%;
      width: 70px;
      height: 70px;
      }
    }
    
  }
  .vbhide{
    visibility: hidden;
  }
</style>