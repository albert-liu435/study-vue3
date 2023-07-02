<template>
  <div>
    <!-- 在数据接收方自定义事件 -->
    <h3>数据接收方 --- num 的值为：{{ num }}</h3>
  </div>
</template>

<script >

// 在数据接收方，调用 bus.on('事件名称', 事件处理函数) 方法注册一个自定义事件
import bus from "./eventBus.js"
export default {
  name: "MyRight",
  data () {
    return {
      num: 0,
    }
  },
  created () {
    //调用bus.on()方法注册一个自定义事件，通过事件处理函数的形式接受数据
    bus.on('countChange', count => {
      this.num = count
    })
  },
}

</script>

<style lang="less" scoped>
</style>