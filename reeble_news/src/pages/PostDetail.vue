<template>
  <div>
      <postDetailHeader/>
      <div class="postContent">
          <div class="header">
              <h3 class="title">{{post.title}}</h3>
              <span>{{post.user.nickname}} 2019-10-31</span>
          </div>
          <div class="center" v-html="post.content"></div>
      </div>
  </div>
</template>

<script>
import postDetailHeader from '../components/postDetailHeader';
export default {
    components:{
        postDetailHeader
    },

    data(){
        return {
            postId:'',

            //存放从后台拿到的文章数据对象
            post:{
                user:{}
            }
        }
    },
    created(){

        this.postId=this.$route.params.id;
        // console.log(this.postId);

        this.$axios({
            url:'/post/'+this.postId,
            method:'get'
        }).then(res=>{
            let {data}=res.data;

            this.post=data;
            console.log(this.post);
        })
        
    }

}
</script>

<style>

</style>