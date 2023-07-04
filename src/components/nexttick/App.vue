<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <input type="text"
           class="form-control"
           v-if="inputVisible"
           ref="ipt" />
    <button type="button"
            class="btn btn-primary"
            v-else
            @click="showInput">展示 input 输入框</button>
  </div>
</template>

<script >
export default {
  name: "MyApp",
  data () {
    return {
      //控制文本框和按钮的按需切换
      inputVisible: false,
    }
  },
  methods: {
    showInput () {
      // 切换布尔值，要展示文本框
      this.inputVisible = true

      //当文本框展示出来之后，如果希望它立即获得焦点，则可以为其添加 ref 引用，并调用原生 DOM 对象的.focus() 方法即可。
      //获取文本框的dom引用，并调用.focus()使其自动获取焦点
      // this.$refs.ipt.focus();
      // console.log(this.$refs.ipt)

      this.$nextTick(() => {
        console.log(this.$refs.ipt)
        // 获取到文本框的引用对象，然后调用 focus() 方法
        this.$refs.ipt.focus()
      })
    },
  },
}


</script>

<style lang="less" scoped>
input.form-control {
  width: 280px;
  display: inline;
  vertical-align: bottom;
}
</style>
