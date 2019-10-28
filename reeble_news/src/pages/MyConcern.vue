<template>
  <div class="concern">
      <headerMiddle title="我的关注"/>
      <div class="content" v-for="item in follows" :key="item.id">
          <div class="item">
              <img :src="item.head_img?$axios.defaults.baseURL+item.head_img:'/static/imgs/defaults_img.png'" alt="">
              <div class="center">
                  <span class="name">{{item.nickname}}</span>
                  <p class="time">2019-10-10</p>
              </div>
                <div @click="cancelConcern(item.id)" class="cancel">取消关注</div>
          </div>
      </div>
  </div>
  
</template>

<script>
import headerMiddle from '../components/headerMiddle'
export default {
    components:{
        headerMiddle:headerMiddle
    },
    data(){
        return {
            follows:[]
        }
    },
    created(){
        this.loadPage();
    },

    methods:{
        loadPage(){
            this.$axios({
            url:'/user_follows',
            method:'get',
            }).then(res=>{

                // console.log(res.data);
                this.follows=res.data.data;
                
            })
        },
        cancelConcern(id){
            this.$axios({
                url:'/user_unfollow/'+id,
                method:'get'
            }).then(res=>{
                console.log(res.data);
                // 重新获取列表渲染
                this.loadPage();
            })
        }
    }
}
</script>

<style lang="less" scoped>
.concern{
    .content{
        .item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            img{
                width: 11.111vw;
                height: 11.111vw;
                border-radius: 50%;
            }
            .center{
                flex:1;
                padding-left:5.556vw; 
                .time{
                    font-size: 3.889vw;
                    color: #949494;
                }
            }
            .cancel{
                padding: 1.944vw 2.778vw;
                border-radius: 5vw;
                background-color: #e1e1e1;
                font-size: 3.333vw;
            }
        }
    }
}
</style>