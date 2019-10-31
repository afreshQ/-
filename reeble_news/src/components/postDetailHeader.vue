<template>
  <div class="header">
      <div class="left" @click="$router.back()">
          <span class="iconfont iconjiantou2"></span>
          <span class="iconfont iconnew"></span>
      </div>
      <div class="right"> 
          <div class="btnConcern active" v-if="true">
              关注
          </div>
          <div class="btnConcern" v-else>
              已关注
          </div>
      </div>
  </div>
</template>

<script>
export default {

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
        .btnConcern{
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