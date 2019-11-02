<template>
  <div>
      <headerMiddle title="精彩跟帖"/>
      <comments :commentItem="item" v-for="(item,index) of comments" :key="index"/>
  </div>
</template>

<script>
import headerMiddle from '../components/headerMiddle';
import comments from '../components/comments';
export default {
    components:{
        headerMiddle,
        comments
    },
    data(){
        return {
            comments:[]
        }
    },

    created(){

        this.postId=this.$route.params.id;

           // 获取全部跟帖
        this.$axios({
            url:'/post_comment/'+this.postId,
            method:'get',
            params:{
                // pageSize:3
            }
        }).then(res=>{
            let {data}=res.data;

            console.log(data);
            this.comments=data;
        })
    }
}
</script>

<style>

</style>