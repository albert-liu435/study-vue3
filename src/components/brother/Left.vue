<template>
  <div>
    <!-- 在数据接发送方触发事件 -->
    <h3>数据发送方 --- count 的值为：{{ count }}</h3>
    <button type="button"
            class="btn btn-primary"
            @click="add">+1</button>
  </div>
</template>

<script >
import bus from './eventBus.js'

export default {
  name: 'MyLeft',
  data () {
    return {
      count: 0,
    }
  },
  methods: {
    add () {
      this.count++
      //调用bus.emit()方法触发自定义事件，并发送数据
      bus.emit('countChange', this.count)
    },
  },
}
</script>

<style lang="less" scoped>
</style>