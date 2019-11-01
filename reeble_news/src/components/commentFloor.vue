<template>
    <div>
        <floor v-if="floorItem.parent" :floorItem="floorItem.parent" />
        <div class="commentFloor">
            <div class="header">
                <span class="name">{{floorItem.user.nickname}}</span>
                <span class="time sz-12">5秒前</span>
                <span class="btnReply sz-12">回复</span>
            </div>
        <div class="content">{{floorItem.content}}</div>
  </div>
    </div>
</template>

<script>
export default {
    name:"floor",
    props:['floorItem']
}
</script>

<style lang="less" scoped>
.commentFloor{
    padding: 4.167vw;
    border: 1px solid #d7d7d7;
    font-size: 3.889vw;
    margin-bottom: -1px;
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time{
            flex:1;
            padding-left: 4.167vw;
        }
    }
    .content{
        margin-top: 4.167vw;
    }
}
.sz-12{
    font-size: 3.333vw;
    color: #707070;
}
</style>