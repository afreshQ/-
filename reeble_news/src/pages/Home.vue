<template>
    <div>
        <homeHeader/>
        <van-tabs v-model="tabIndex">
        <van-tab v-for="(tabItem,index) in tabLists" :title="tabItem.name" :key="index">
            <!-- <div v-for='(post, index) in tabItem.posts' :key="index">
                    {{post.title}}
            </div> -->
            <postList :postLists="tabItem.posts" />
        </van-tab>
</van-tabs>
    </div>
</template>

<script>
import postList from '../components/postList';
import homeHeader from '../components/homeHeader';
export default {
    components:{
        homeHeader:homeHeader,
        postList:postList
    },
    data(){
        return {
            tabIndex:localStorage.getItem('token')?1:0,

            tabLists:[]
        }
    },
    watch:{
        tabIndex(newTabIndex){
            if(this.tabLists[newTabIndex].posts.length===0){
                this.getPosts(this.tabIndex);
            }
        }
    },
    created(){
        this.initTabLists();
    },

    methods:{
        // 封装获取栏目列表请求
        initTabLists(){
            this.$axios({
                url:'/category',
                method:'get',
            }).then(res=>{
                
                res.data.data.forEach(element => {
                    element.posts=[];
                });
                this.tabLists=res.data.data;

                this.getPosts(this.tabIndex)

                console.log(this.tabLists);
            })
        },
        //获取文章，根据每个tablist中带有的categoryId去拿数据
        getPosts(tabIndex){
            //获取新闻文章
            //根据每个tab对象中的categoryid获取属于改分类的文章
            let categoryId=this.tabLists[tabIndex].id;
            
            this.$axios({
                url:'/post',
                method:'get',
                params:{
                    category:categoryId
                }
            }).then(res=>{
                console.log(res.data.data);
                //获取到该tablist的文章后再存到该tablist中
                this.tabLists[tabIndex].posts=res.data.data;
            })
            
        }
    }
}
</script>

<style>

</style>