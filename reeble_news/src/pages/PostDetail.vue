<template>
  <div>
      <postDetailHeader/>
      <div class="postContent">
          <div class="header">
              <h3 class="title">{{post.title}}</h3>
              <p class="desc">{{post.user.nickname}} 2019-10-31</p>
          </div>

          
          <video class="video" poster="https://image.pearvideo.com/cont/20191030/12719568-191638-1.png" v-if="post.type==2" src="https://video.pearvideo.com/mp4/third/20191030/cont-1617676-12719568-191141-hd.mp4" controls="controls"></video>

          <div  class="center" v-else v-html="post.content"></div>
      </div>
      <postDetailFooter/>
  </div>
</template>

<script>
import postDetailHeader from '../components/postDetailHeader';
import postDetailFooter from '../components/postDetailFooter';
export default {
    components:{
        postDetailHeader,
        postDetailFooter
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

<style lang="less" scoped>
.postContent{
    padding: 0 4.167vw;
    .header{
        .desc{
            margin-top: 2.778vw;
            font-size: 3.611vw;
            color: #868686;
        }
    }
    .video{
        width: 100%;
        margin-top: 5.556vw;
    }
    .center{
        margin: 5.556vw 0;
        /deep/.content{
            font-size: 3.889vw;
            line-height: 8.333vw;
            img{
                width: 100%;
            }
        }
    }
}
</style>