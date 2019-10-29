<template>
   <div>
       <div class="collection" v-for="item of postLists" :key="item.id">

        <!-- 带视频视频的文章，判断文章类型type=2 -->
        <div class="item" v-if="item.type==2">
            <div class="head">{{item.title}}</div>
                <div class="center">
                    <img class="video-cover" :src="item.cover[0].url" alt="">
                    <div class="video-start-btn">
                        <span class="iconfont iconshipin"></span>
                    </div>
                </div>
            <div class="foot">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
        </div>

        <!-- 单图片封面文章 -->
        <div class="item-1" v-if="item.cover.length > 0 && item.cover.length < 3">
            <div class="left">
                {{item.title}}
                <div class="foot">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
            </div>
            <div class="right">
                <img :src="item.cover[0].url" alt="">
            </div>
        </div>

        <!-- 多图片封面文章 -->
        <div class="item-2" v-else-if="item.cover.length>=3">
            <div class="head">{{item.title}}</div>
            <div class="center">
                <img class="img" :src="item.cover[0].url" alt="">
                <img class="img" :src="item.cover[1].url" alt="">
                <img class="img" :src="item.cover[2].url" alt="">
            </div>
            <div class="foot">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
        </div>
    </div>
   </div>
</template>

<script>
export default {
    props:[
        'postLists',
    ],
}
</script>

<style lang="less" scoped>
.item{
    padding: 4.167vw 5.556vw;
    border-bottom: 1px solid #e4e4e4;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    .center{
        margin-top: 4.167vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        // 视频文章图片封面
        .video-cover{
            width: 94.444vw;
            height: 47.222vw;
            object-fit:cover;
        }
        // 播放按钮
        .video-start-btn{
            position: absolute;
            width: 13.889vw;
            height: 13.889vw;
            border-radius: 50%;
            background-color: rgba(0,0,0,.3);
            text-align: center;
            .iconshipin{
                font-size: 12.5vw;
                color: #fff;
            }
        }
    } 
}
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
        position: relative;
        .img{
            width: 33%;
            height: 20.556vw;
            object-fit:cover;
        }
    } 
}
.foot{
            margin-top: 4.167vw;
            font-size: 3.611vw;
            color: #868686;
        }
</style>