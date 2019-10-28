<template>
  <div class="mypost">
      <headerMiddle title="我的跟帖"/>
      <div class="posts">
          <div class="item" v-for="item of posts" :key="item.id">
              <div class="time">2019-10-10 12:16</div>
              <div class="parent" v-if="item.parent">
                  <span class="parent-name">回复 : {{item.parent.user.nickname}}</span>
                  <div class="parent-centent">{{item.parent.content}}</div>
              </div>
              <div class="content">{{item.content}}</div>
              <div class="original">{{item.post.title}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle';
export default {
    components:{
        headerMiddle:headerMiddle
    },
    data(){
        return {
            posts:[]
        }
    },
    created(){
        this.$axios({
            url:'/user_comments',
            method:'get'
        }).then(res=>{
            console.log(res.data.data);
            this.posts=res.data.data;
            
        })
    }
}
</script>

<style lang="less" scoped>
.item{
    padding:5.556vw; 
    border-bottom: 1px solid #d7d7d7;
    .time{
        font-size: 3.889vw;
        color: #a0a0a0;
    }
    .parent{
        margin-top:4.167vw;
        padding: 2.778vw 2.778vw;
        background-color: #e4e4e4;
        color: #929292;
        font-size: 3.333vw;
        line-height: 6.667vw;
    }
    .content{
        margin: 4.167vw 0;
        font-size: 3.889vw;
    }
    .original{
        font-size: 3.611vw;
        color: #898989;
    }
}
</style>