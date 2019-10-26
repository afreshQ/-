<template>
   <div class="container">
    <div class="closeBtn">
      <span @click="$router.back()" class="iconfont iconicon-test"></span>
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

    <div class="nickNameInput">
        <authInput
         type='text' 
         placeholder="昵称"
         rule="^[\u4E00-\u9FA5A-Za-z0-9_]+$"
         err_message= "请输入正确昵称"
         @input="setNickName"
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
        <authBtn val="注册"  @send="sendRegister"/>
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
            nickname:'',
            username:'',
            password:''
        }
    },
    methods:{
        setUserName(username){
            this.username=username;
            // console.log(this.username);
        },
        setNickName(nickname){
            this.nickname=nickname;
            // console.log(this.nickname);
        },
        setPassWord(password){
            this.password=password;
            // console.log(this.password);
        },
        sendRegister(){
            if(this.username && this.nickname &&this.password){
                //发送ajax请求
                this.$axios({
                    url:'/register',
                    method:'post',
                    data:{
                        username:this.username,
                        password:this.password,
                        nickname:this.nickname
                    }
                }).then(result=>{
                    // console.log(result);
                    this.$toast(result.data.message)
                    
                })
            }else{
                this.$toast('请正确输入');
            }
        }
    }
}
</script>

<style lang='less'>
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");

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
}
</style>