<template>
    <div class="container">
        <div class="row1">
            <div class="col1">
                <img src="../../build/logo.png" alt="">
            </div>
            <div class="col2">
                <P class="iconfont iconxingbienan">火星网友</P>
                <span>2019-10-25</span>
            </div>
        </div>
        <div class="hui"></div>
        <div class="row2">
            <ul>
               <authList/>
               <authList/>
               <authList/>
               <authList/>
            </ul>
        </div>
    </div>
</template>

<script>
import authList from '../components/authList';
export default {
    components:{
        authList:authList
    }
}
</script>

<style lang='less' scoped>
.container{
    font-size:5.556vw;
    .row1{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 20px 10px;
        // border-bottom: 5px #e4e4e4 solid;
        .col2{
            padding-left: 2.778vw;
        }
        img{
            width: 19.444vw;
            border-radius: 50%;
        }
    }
    .hui{
        width: 100%;
        height: 5px;
        background-color: #e4e4e4;
    }
    .row2{
        padding: 5.556vw;
    }
}
</style>