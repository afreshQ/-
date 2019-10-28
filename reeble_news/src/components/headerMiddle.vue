<template>
  <div class="title">
      <span @click="$router.back()" class="iconfont iconjiantou2"></span>
      <h4>{{title}}</h4>
      <span class="iconfont iconjiantou2 vbhide"></span>
    </div>
</template>

<script>
export default {
    props:['title']
}
</script>

<style scoped>
    .title{
      padding:0 4.167vw;
      line-height: 13.889vw;
      display: flex;
      justify-content:space-between;
      
    }
    .vbhide{
      visibility: hidden;
    }
</style>