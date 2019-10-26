<template>
  <div class="container">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>

    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <div class="nameInput">
        <authInput
         type='text' 
         placeholder="用户名 / 手机号"
         rule="^\d{4,16}$"
         err_message= "请输入正确用户名"
         @input="setUserName"
         />
    </div>

    <div class="pwdInpunt">
        <authInput 
        type='password' 
        placeholder="密码"
        rule="^\d{3,16}$"
        err_message= "请输入正确密码"
        @input="setPassWord"
        />
    </div>

    <div class="btn">
        <authBtn val="登陆"  @send="sendLogin"/>
    </div>

    <div class="register">
        还没有注册? <router-link to="/register">立即注册</router-link>
    </div>
  </div>
</template>

<script>
import authInput from '../components/authInput';
import authBtn from '../components/authBtn';
export default {
    components:{
        authInput:authInput,
        authBtn:authBtn
    },

    data(){
        return {
            username:'',
            password:''
        }
    },

    methods:{
        setUserName(username){
            this.username=username;
            // console.log(this.username);
            
        },
        setPassWord(password){
            this.password=password;
            // console.log(this.password);
        },
        sendLogin(){
            //判断表单的输入是否合法
            //这里只要判断用户名和密码是否存在就好了
            if(this.username && this.password){

                 //发送ajax请求
                 this.$axios({
                     url:'/login',
                     method:'post',
                     data:{
                         username:this.username,
                         password:this.password
                     }
                 }).then(result=>{
                     
                     if(result.data.statusCode && result.data.statusCode==401){
                         this.$toast('账号或密码错误!');
                     }else{
                         this.$toast(result.data.message);
                     }
                 })
            }
            //轻提示输入不合法
            else{
                this.$toast("请输入正确的用户名和密码");
                return;
            }

            // console.log('点击按钮');
            
           
        }
    }
};
</script>

<style lang="less" scoped>
.container {
  padding: 5.556vw;

  .closeBtn {

    .iconicon-test {
      font-size: 7.5vw;
    }
  }

  .logo {
      display: flex;
      justify-content: center;
      margin-top:9.722vw;
    .iconnew {
      font-size: 35vw;
      color: #d81e06;
    }
  }

  .btn{
      margin-top:13.889vw;
  }

  .register{
      margin-top: 6.667vw;
      font-size:5.556vw; 
      text-align: center;
      a{
          color:#d81e06;
      }
  }
}
</style>