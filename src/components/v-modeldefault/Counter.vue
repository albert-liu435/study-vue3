<template>
  <div>
    <p>count值是：{{number}}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  // 子组件中，通过 props 接收父组件传递过来的数据
  props: ['number'],
  // 在子组件中声明 emits 自定义事件，格式为 update:xxx
  emits: ['update:number'],
  methods: {
    add () {
      // 调用 $emit() 触发自定义事件，更新父组件中的数据
      this.$emit('update:number', this.number + 1)
    }
  }
}
</script>

<style></style>
