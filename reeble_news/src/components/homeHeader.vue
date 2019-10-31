<template>
  <div class="header">
      <span class="iconfont iconnew"></span>
      <div class="search">
          <span class="iconfont iconsearch"></span>
          <span>搜索新闻</span>
      </div>
      <span class="iconfont iconwode" @click="$router.push('/profile')"></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
    height: 13.889vw;
    background-color: #ff0000;
    padding: 0 4.167vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .iconnew{
        font-size: 15vw;
    }
    .search{
        width: 58.333vw;
        font-size: 3.889vw;
        line-height: 9.444vw;
        text-align: center;
        background-color: rgba(255,255,255,.4);
        border-radius: 100px;
    }
    .iconwode{
        width: 15vw;
        text-align: right;
        font-size: 8.889vw;
        opacity: 0.7;
    }
}

</style>