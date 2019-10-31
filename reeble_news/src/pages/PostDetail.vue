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

          <div class="footer">
              <div class="like radius" @click="liking">
                  <span :class="{red:has_like}" class="iconfont icondianzan"></span>
                  <span class="sz_13px">{{post.like_length}}</span>
              </div>
              <div class="wechat radius">
                  <span class="iconfont iconweixin"></span>
                  <span class="sz_13px">微信</span>
              </div>
          </div>
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
            },

            has_like:false
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
            this.has_like=data.has_like;
            console.log(this.post);
        })
        
    },

    methods:{
        liking(){

            this.$axios({
                url:'/post_like/'+this.postId,
                method:'get'
            }).then(res=>{
                let {message}=res.data;
                console.log(message);
                
                if(message=="点赞成功"){
                    this.post.like_length+=1;
                    this.has_like=true;
                }else if(message=="取消成功"){
                    this.post.like_length-=1;
                    this.has_like=false;
                }
            })


        }
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
    .footer{
        margin-top: 8.333vw;
        display: flex;
        justify-content: space-around;
        .radius{
            padding: 0 2.778vw;
            border: 1px solid #797979;
            border-radius: 27.778vw;
            line-height: 7.778vw;
        }
        .iconweixin{
            color: #00c800;
        }

        .sz_13px{
            font-size: 3.611vw;
        }
    }
}

.red{
    color: #ff0000;
}
</style>