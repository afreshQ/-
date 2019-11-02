<template>
  <div class="comments">
      <div class="has-comments" >
          <div class="header">
              <img class="headImg" :src="$axios.defaults.baseURL+commentItem.user.head_img" alt="">
              <div class="profile">
                  <span class="name">{{commentItem.user.nickname}}</span>
                  <p class="time sz-12">5秒前</p>
              </div>
              <span class="btnReply sz-12">回复</span>
          </div>
          <div class="parent" v-if="commentItem.parent">
              <commentFloor :floorItem="commentItem.parent"/>
          </div>
          <div class="content">{{commentItem.content}}</div>
      </div>
  </div>
</template>

<script>
import commentFloor from '../components/commentFloor';
export default {
    components:{
        commentFloor
    },
    props:['commentItem'],
    data(){
        return {
            
        }
    },

    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.comments{
   
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