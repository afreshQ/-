<template>
  <div>
      <postDetailHeader :post="post"/>
      <div class="postContent">
          <div class="header">
              <h3 class="title">{{post.title}}</h3>
              <p class="desc">{{post.user.nickname}} 2019-10-31</p>
          </div>

          
          <video class="video" poster="https://image.pearvideo.com/cont/20191030/12719568-191638-1.png" v-if="post.type==2" src="https://video.pearvideo.com/mp4/third/20191030/cont-1617676-12719568-191141-hd.mp4" controls="controls"></video>

          <div  class="center" v-else v-html="post.content"></div>

          <div class="footer">
              <div class="like radius" @click="liking">
                  <span :class="{red:post.has_like}" class="iconfont icondianzan"></span>
                  <span class="sz_13px">{{post.like_length}}</span>
              </div>
              <div class="wechat radius">
                  <span class="iconfont iconweixin"></span>
                  <span class="sz_13px">微信</span>
              </div>
          </div>
      </div>
        <div class="wonderful-comments">
            <div class="title">精彩跟帖</div>

            <div class="no-comments" v-if="comments.length==0">
                暂无跟帖,抢占沙发
            </div>

            <comments v-else :commentItem="item" v-for="(item,index) of comments" :key="index.id"/>

            <div class="moreComments">
                <div class="btnMore" @click="toMoreComments">
                    更多跟帖
                </div>
            </div>
        </div>
      <postDetailFooter :post="post"/>
  </div>
</template>

<script>
import postDetailHeader from '../components/postDetailHeader';
import postDetailFooter from '../components/postDetailFooter';
import comments from '../components/comments';
export default {
    components:{
        postDetailHeader,
        postDetailFooter,
        comments
    },

    data(){
        return {
            postId:'',

            //存放从后台拿到的文章数据对象
            post:{
                user:{}
            },

            comments:[]
        }
    },
    created(){

        this.postId=this.$route.params.id;
        // console.log(this.postId);

        //获取文章
        this.$axios({
            url:'/post/'+this.postId,
            method:'get'
        }).then(res=>{
            let {data}=res.data;

            this.post=data;
            console.log(this.post);
        })

        // 获取跟帖
        this.$axios({
            url:'/post_comment/'+this.postId,
            method:'get',
            params:{
                pageSize:3
            }
        }).then(res=>{
            let {data}=res.data;

            console.log(data);
            this.comments=data;
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
                    this.post.has_like=true;
                }else if(message=="取消成功"){
                    this.post.like_length-=1;
                    this.post.has_like=false;
                }
            })
        },

        toMoreComments(){
            this.$router.push({
                name:'moreComments',
                params:{
                    id:this.postId
                }
            })
        }
    }

}
</script>

<style lang="less" scoped>

.postContent{
    padding: 0 4.167vw;
    border-bottom: 5px solid #e4e4e4;
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
        padding: 8.333vw 0;
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

.wonderful-comments{
    margin-top: 5.556vw;
    margin-bottom: 33.333vw;
    .title{
        text-align: center;
        font-size: 5vw;
    }
     .no-comments{
        margin-top: 8.333vw;
        text-align: center;
        font-size: 14px;
        color: #aeaeae;
    }
    .moreComments{
        margin-top: 8.333vw;
        display: flex;
        justify-content: center;
        align-items: center;
        .btnMore{
            width: 33.333vw;
            line-height: 8.333vw;
            text-align: center;
            border-radius: 4.167vw;
            border: 1px solid #797979;
            font-size: 3.889vw;
        }
    }
}


.red{
    color: #ff0000;
}
</style>