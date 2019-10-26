<template>
  <div class="container">
    <div class="row1">
      <img src="http://img4.imgtn.bdimg.com/it/u=2841002847,3345892877&fm=26&gp=0.jpg" alt />
      <div class="profile">
        <span class="iconfont iconxingbienan"></span>
        <span class="name">火星网友</span>
        <p class="time hui">2019-10-25</p>
      </div>
      <span class="hui iconfont iconjiantou1"></span>
    </div>
    <div class="row2">
        <cellBar
         label="我的关注"
         desc='关注的用户'
         @sendlabel='toLabel'
         />
        <cellBar
         label="我的跟帖"
         desc='跟帖 / 回复'
         @sendlabel='toLabel'
         />
         <cellBar
         label="我的收藏"
         desc='文章 / 视频'
         @sendlabel='toLabel'
         />
         <cellBar
         label="设置"
         @sendlabel='toLabel'
         desc=''/>
    </div>
  </div>
</template>

<script>
import cellBar from "../components/cellBar";
export default {
  components: {
    cellBar: cellBar
  },
  data(){
      return {

      }
  },
  methods:{
      toLabel(label){
        console.log(label);
        
      }
  }
};
</script>

<style lang='less' scoped>
.container {
  font-size: 5.556vw;
  .row1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:8.333vw 2.778vw 8.333vw 5.556vw;
    border-bottom: 5px #e4e4e4 solid;
    .profile {
        flex:1;
        padding-left: 4.167vw;
        .name{
            font-size: 4.444vw;
        }
      .time{
          font-size: 3.889vw;
      }
    }
    img {
      width: 19.444vw;
      height: 19.444vw;
      border-radius: 50%;
    }
  }
  .row2 {
    padding-left: 5.556vw;
  }
  .hui{
      color:#a0a0a0;
  }
}
</style>