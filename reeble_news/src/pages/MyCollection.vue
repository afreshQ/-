<template>
  <div class="mycollection">
      <headerMiddle
      title="我的收藏"/>
      <!-- <div class="collection" v-for="item of collections" :key="item.id">
          <div class="item-1" v-if="item.cover.length==1">
              <div class="left">
                  {{item.title}}
                  <div class="foot">{{item.user.nickname}} {{item.comments.length}}跟帖</div>
              </div>
              <div class="right">
                  <img :src="item.cover[0].url" alt="">
              </div>
          </div>
          <div class="item-2" v-else>
              <div class="head">{{item.title}}</div>
              <div class="center">
                  <img :src="item.cover[0].url" alt="">
                  <img :src="item.cover[1].url" alt="">
                  <img :src="item.cover[2].url" alt="">
              </div>
              <div class="foot">{{item.user.nickname}} {{item.comments.length}}跟帖</div>
          </div>
      </div> -->
      <postList :postLists="collections" />

  </div>
</template>

<script>
import postList from '../components/postList';
import headerMiddle from '../components/headerMiddle'
export default {
    components:{
        headerMiddle:headerMiddle,
        postList:postList
    },
    data(){
        return {
            collections:[]
        }
    },
    created(){
        this.$axios({
            url:'/user_star',
            method:'get'
        }).then(res=>{
            console.log(res.data);
            this.collections=res.data.data;
        })
    }
}
</script>

<style lang="less" scoped>
.item-1{
    padding: 4.167vw 5.556vw;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-right: 1.389vw;
        .foot{
            font-size: 3.611vw;
            color: #868686;
        }
    }
    .right{
        img{
            width: 33.333vw;
            display: block;
            height: 20.833vw;
            object-fit:cover;
        }
    }
}
.item-2{
    padding: 4.167vw 5.556vw;
    border-bottom: 1px solid #e4e4e4;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    .center{
        margin-top: 4.167vw;
        display: flex;
        justify-content: space-between;
        img{
            width: 33%;
            height: 20.556vw;
            object-fit:cover;
        }
    }
    .foot{
            margin-top: 4.167vw;
            font-size: 3.611vw;
            color: #868686;
        }
}

</style>