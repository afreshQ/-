<template>
  <input
    class="input"
    :type="type"
    :class="{error:!isOk}"
    :placeholder="placeholder"
    @input="dataChange"
    @blur="showTips"
  />
</template>

<script>
export default {
  props: ["type", "placeholder", "rule","err_message"],

  data() {
    return {
      //默认是输入条件成功
      isOk: true
    };
  },

  methods: {
    dataChange($event) {
      // console.log('数据在更改');

      //如果输入框内容为空，isOk则为true,设置默认的样式
      if (!$event.target.value) {

        this.isOk = true;

      } else {

        //把子组件上的正则字符串放到实例中
        let reg = new RegExp(this.rule);
        
        //判断输入条件是否满足
        this.isOk = reg.test($event.target.value);
      }

      if(this.isOk){
          this.$emit("input", $event.target.value);
      }else{
          this.$emit("input", "");
      }

    },
    // 提示
    showTips($event) {
      if (!this.isOk) {
        this.$toast(this.err_message);
      }
    }
  }
};
</script>

<style>
.input {
  width: 100%;
  font-size: 6.111vw;
  height: 13.889vw;
  background-color: inherit;
  border: none;
  border-bottom: 3px #d7d7d7 solid;
  outline: none;
}
.error {
  border-bottom: 3px #d81e06 solid;
}
</style>