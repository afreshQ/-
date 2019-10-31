<template>
    <div>
        <homeHeader/>
        <van-tabs v-model="tabIndex" sticky swipeable>
            <van-tab v-for="(tabItem,index) in tabLists" :title="tabItem.name" :key="index">

                <!-- // 若数据已全部加载完毕，则直接将finished设置成true即可。 -->
                <van-list
                v-model="loading"
                :finished="tabItem.finished"
                finished-text="没有更多了" 
                @load="onLoad" 
                :immediate-check="false"
                >
                
                <postList :postLists="tabItem.posts" />
                </van-list>

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
            //有token会多出第一个会是关注tab标签，所以我们判断下本地存储即可，
            tabIndex:localStorage.getItem('token')?1:0,

            //存放获取到的全部tab对象
            tabLists:[],

            //当组件滚动到底部时，会触发load事件并将loading设置成true,此时可以发起异步操作并更新数据，数据更新完毕后，将loading设置成false即可
            loading:false,
            //设置默认显示多少内容
            pageSize:5
        }
    },
    watch:{
        tabIndex(newTabIndex){
            console.log(newTabIndex);
            
            if(this.tabLists[newTabIndex].posts.length===0){
                this.getPosts(newTabIndex);
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
                    //每个分类各显示各的所以每个都加上,来确定是否上拉到底了,到底为true
                    element.finished=false;
                    // 通过触发onload函数加1后从数据库再拿更多数据
                    element.pageIndex=1;
                    
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
                    category:categoryId,
                    pageSize:this.pageSize,
                    pageIndex:this.tabLists[tabIndex].pageIndex,
                }
            }).then(res=>{
                // console.log(res.data.data);
                //获取到该tablist的文章后再存到该tablist中
                let {data}=res.data;

                console.log(data);
                
                //使用es6解构语法，拼接新旧数据
                let newData=[...this.tabLists[tabIndex].posts,...data]
                this.tabLists[tabIndex].posts=newData;

                this.loading=false;

                if (data.length < this.pageSize) {
                    // 将当前 tab 的 finished 属性修改为 true 
                    // 避免下一次的继续出发加载函数
                    this.tabLists[tabIndex].finished = true;
                }
            })
            
        },

        // 上拉触发加载更多事件
        onLoad(){
            console.log('触发了');
            
            let timer=setTimeout(() => {
                this.tabLists[this.tabIndex].pageIndex += 1;
                this.getPosts(this.tabIndex);
            }, 1000);
        }
    }
}
</script>

<style>

</style>