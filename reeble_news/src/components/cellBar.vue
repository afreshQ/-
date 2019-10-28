<template>
    <div class="cellbar" @click="sendLabel">
        <span class="left">{{label}}</span> 
        <div class="right">
            <span class="desc">{{desc}}</span>
            <i class="iconfont iconjiantou1"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:['label','desc'],
    methods:{
        sendLabel(){
            this.$emit('jump',this.label);
        }
    }
}
</script>

<style lang="less" scoped>
    .cellbar{
        height: 13.889vw;
        line-height: 13.889vw;
        display: flex;
        justify-content:space-between;
        align-items: center;
        border-bottom: 1px #e4e4e4 solid;
        .left{
            font-size: 4.444vw;
        }
        .right{
            margin-right: 2.778vw;
            .desc{
                font-size: 3.889vw;
                color: #a0a0a0;
            }
            .iconjiantou1{
                color: #a0a0a0;
            }
        }
        
    }
</style>