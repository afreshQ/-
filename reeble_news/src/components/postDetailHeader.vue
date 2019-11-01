<template>
  <div class="header">
      <div class="left" @click="$router.back()">
          <span class="iconfont iconjiantou2"></span>
          <span class="iconfont iconnew"></span>
      </div>
      <div class="right"> 
          <div class="btnFollow" v-if="post.has_follow">
              已关注
          </div>
          <div @click="userfollow" class="btnFollow active" v-else >
              关注
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['post'],

    methods:{
        userfollow(){
            this.$axios({
                url:'/user_follows/'+this.post.user.id,
                method:'get'
            }).then(res=>{
                let {message}=res.data;

                console.log(message);
                
                if(message=="关注成功"){
                    this.post.has_follow=true;
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    padding: 0 4.167vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
        display: flex;
        align-items: center;
        .iconnew{
            font-size: 15vw;
        }
    }
    .right{
        .btnFollow{
            font-size: 3.333vw;
            line-height: 7.222vw;
            padding: 0 4.167vw;
            border: 1px solid #d7d7d7;
            border-radius: 3.611vw;
        }
        .active{
            
            background-color: #ff0000;
            color: #fff;
        }
    }
}
</style>