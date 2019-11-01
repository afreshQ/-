<template>
  <div class="comments">
      <div class="no-comments" v-if="comments.length==0">
          暂无跟帖,抢占沙发
      </div>
      <div class="has-comments" v-else v-for="(item,index) of comments" :key="index.id">
          <div class="header">
              <img class="headImg" :src="$axios.defaults.baseURL+item.user.head_img" alt="">
              <div class="profile">
                  <span class="name">{{item.user.nickname}}</span>
                  <p class="time sz-12">5秒前</p>
              </div>
              <span class="btnReply sz-12">回复</span>
          </div>
          <div class="parent" v-if="item.parent">
              <commentFloor :floorItem="item.parent"/>
          </div>
          <div class="content">{{item.content}}</div>
      </div>
  </div>
</template>

<script>
import commentFloor from '../components/commentFloor';
export default {
    components:{
        commentFloor
    },
    props:['postid'],
    data(){
        return {
            comments:[{
                user:{}
            }]
        }
    },
    created(){
        this.$axios({
            url:'/post_comment/'+this.postid,
            method:'get',
        }).then(res=>{
            let {data}=res.data;

            console.log(data);
            this.comments=data;
        })
    }
}
</script>

<style lang="less" scoped>
.comments{
    margin-bottom: 33.333vw;
    .no-comments{
        margin-top: 8.333vw;
        text-align: center;
        font-size: 14px;
        color: #aeaeae;
    }

    .has-comments{
        margin-top: 4.167vw;
        padding: 0 4.167vw;
        border-bottom: 1px solid #e4e4e4;
        .header{
            margin-bottom: 2.778vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .headImg{
                width: 9.722vw;
                height: 9.722vw;
                border-radius: 50%;
            }
            .profile{
                flex: 1;
                padding-left: 4.167vw;
                .name{
                    font-size: 3.889vw;
                }
            }
            .btnReply{
                align-self: flex-start;
            }
        }
        .content{
            margin-bottom: 2.778vw;
            font-size: 3.889vw;
            line-height: 7.778vw;
        }
    }
}
.sz-12{
    font-size: 3.333vw;
    color: #707070;
}
</style>