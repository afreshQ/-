<template>
  <div class="editprofile">
    <headerMiddle title="编辑资料" />
    <div class="head-img">
      <img :src="headImg" />
    </div>
    <div class="userinfo">
      <cellBar
      label="昵称"
      :desc="nickname"
      @jump='showNickName=true'
      />
      <cellBar
      label="密码"
      desc="*****"
      @jump='showPwd=true'
      />
      <cellBar
      label="性别"
      :desc="gender"
      @jump='showGender=true'
      />


      <!-- 放入编辑弹窗组件  属性v-model的布尔值控制组件显示-->
      <van-dialog
        v-model="showNickName"
        title="更改昵称"
        show-cancel-button
        @confirm="changeProfile({nickname:newNickName})"
      >
         <van-field v-model="newNickName" placeholder="这里输入昵称"  />
      </van-dialog>

      <!-- 编辑密码组件 -->
      <van-dialog
        v-model="showPwd"
        title="更改密码"
        show-cancel-button
        @confirm="changeProfile({password:newPwd})"
      >
         <van-field type="password" v-model="newPwd" placeholder="这里输入密码" />
      </van-dialog>

      <!-- 上拉菜单组件 编辑性别 -->
      <van-action-sheet 
      v-model="showGender" 
      :actions="genders" 
      cancel-text="取消" 
      @select="selectGender" 
      />
    </div>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle'
import cellBar from '../components/cellBar'
export default {
  components:{
    headerMiddle:headerMiddle,
    cellBar:cellBar
  },
  data(){
    return {
      //控制编辑弹窗组件显示隐藏的属性
      showNickName:false,
      showPwd:false,
      showGender:false,

      //上拉菜单配置
      genders:[
      {
        name:'男'
      },
      {
        name:'女'
      }],

      //存放新输入的数据
      newNickName:'',
      newPwd:'',
     
      //获取到的信息存放
      nickname:'',
      gender:'',
      headImg:'',
    }
  },
    //根据本地存储上的userid去后台拿数据渲染到页面上
  created(){
    this.getUserInfo();
  },


  methods:{
    //封装获取用户信息的ajax请求
    getUserInfo(){
      this.$axios({
      url:'/user/'+localStorage.getItem('userId'),
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
    },
    //封装更改用户信息的请求
    updata(options){
      this.$axios({
        url:'/user_update/'+localStorage.getItem('userId'),
        method:'post',
        headers:{
          Authorization :localStorage.getItem('token'),
        },
        data:options
      }).then(res=>{
        console.log(res.data);
        this.getUserInfo();
      })
    },
    changeProfile(options){
      this.updata(options);
      
    },
    //上拉菜单的回调函数
    selectGender(item){
      // console.log(item.name);
      let newGender=item.name=='女'?0:1;
      this.updata({gender:newGender})
      this.showGender=false;
    }
  }
}
</script>

<style lang="less">
  .editprofile{
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
</style>