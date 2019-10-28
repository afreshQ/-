<template>
  <div class="editprofile">
    <div class="title">
      <span @click="$router.back()" class="iconfont iconjiantou2"></span>
      <h3>编辑资料</h3>
      <span class="iconfont iconjiantou2 vbhide"></span>
    </div>
    <div class="head-img">
      <img :src="headImg" />
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
      :desc="gender"
      />


      <!-- 放入编辑弹窗组件  属性v-model的布尔值控制组件显示-->
      <van-dialog
        v-model="show"
        title="标题"
        show-cancel-button
      >
        <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
      </van-dialog>


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
      let {nickname,gender,head_img}=response.data.data;
      this.nickname=nickname;
      this.gender=!gender?'女':'男';    
      this.headImg=head_img?this.$axios.defaults.baseURL+head_img:'/static/imgs/defaults_img.png';
      
    })
  }
}
</script>

<style lang="less">
  .editprofile{
    .title{
      padding:0 4.167vw;
      line-height: 13.889vw;
      display: flex;
      justify-content:space-between;
    }
    .userinfo{
      padding-left: 5.556vw;
    }
    .head-img{
      padding: 5.556vw 0;
      text-align: center;
      img{
      border-radius: 50%;
      width: 19.444vw;
      height: 19.444vw;
      }
    }
    
  }
  .vbhide{
    visibility: hidden;
  }
</style>