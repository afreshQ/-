<template>
  <button @click="send">{{val}}</button>
</template>

<script>
export default {
    props:['val'],

    methods:{
        send(){
            this.$emit('send');
        }
    }
}
</script>

<style lang="less">
    button{
        width: 100%;
        line-height: 13.333vw;
        text-align: center;
        background-color: #cc3300;
        border:none;
        font-size: 5.556vw;
        border-radius: 6.667vw;
        color: #fff;
    }
</style>