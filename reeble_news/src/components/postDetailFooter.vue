<template>
  <div class="footer">
      <div class="waitInput" v-if="!isClick">
          <div class="col-1">
              <div class="write" @click="focusArea">写跟帖</div>
          </div>
          <div class="col-2">
              <div class="comments">
                  <div class="number">{{post.comment_length}}</div>
                  <span class="iconfont iconpinglun-"></span>
              </div>
              <span @click="shouCang" :class="{red:post.has_star}" class="iconfont iconshoucang"></span>
              <span class="iconfont iconfenxiang"></span>
          </div>
      </div>
      <div class="input" v-else>
            <textarea ref="comment" v-model="comment" class="textArea" @blur="handleBlur" placeholder="回复 : @火星情报" cols="30" rows="3"></textarea>
          <div class="send" @click="send">发送</div>
      </div>
  </div>
</template>

<script>
export default {
    props:['post'],
    data(){
        return {
            isClick:false,

            comment:''
        }
    },

    methods:{
        focusArea(){
            this.isClick=true;

            //不能直接写在方法里，因为外面的标签用了v-if，在没有dom显示在文档的时候不能用focus，会报错
            // this.$refs.comment.focus();

            // 这里我们用到$nextTick方法
            // 作用是在vue下一次渲染完毕的时候
            // 有了dom再执行这段代码
            this.$nextTick(()=>{

                this.$refs.comment.focus();
            })
        },

        shouCang(){

            this.$axios({
                url:'/post_star/'+this.post.id,
                method:'get'
            }).then(res=>{
                let {message}=res.data;

                console.log(message);

                if(message=="收藏成功"){
                    this.post.has_star=true;
                }else if(message=="取消成功"){
                    this.post.has_star=false;
                }
                
            })
        },

        handleBlur(){
            if(!this.comment){
                this.isClick=false;
            }
        },

        send(){
            this.$axios({
                url:'/post_comment/'+this.post.id,
                method:'post',
                data:{
                    content:this.comment
                }
            }).then(res=>{
                let {message}=res.data;

                console.log(message);
                
            })
        }
    }
}
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f2f2f2;
}
.waitInput{
    padding: 2.778vw 4.167vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .col-1{
        flex: 60%;
        .write{
            width: 50vw;
            line-height: 8.333vw;
            font-size: 3.611vw;
            background-color: #d7d7d7;
            border-radius: 4.167vw;
            text-indent: 4.167vw;
        }
    }
    .col-2{
        flex: 30%;
        margin-right: 1.389vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .comments{
            position: relative;
            font-size: 6.389vw;
            .number{
                position: absolute;
                font-size: 2.778vw;
                color: #fff;
                padding:1px 1.389vw;
                background-color: #ff0000;
                border-radius: 27.778vw;
            }
        }
    }
}
.input{
    padding: 2.778vw 4.167vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .textArea{
        background-color: #d7d7d7;
        border: none;
        border-radius: 2.778vw;
        box-sizing: content-box;
        padding:4.167vw 4.167vw;
        font-size: 3.889vw;
    }
    .send{
        display: flex;
        align-self: flex-end;
        font-size: 3.333vw;
        line-height: 7.222vw;
        padding: 0 4.167vw;
        border-radius: 3.611vw;
        background-color: #ff0000;
        color: #fff;
    }
}
.red{
    color: #ff0000;
}
</style>