<template>
  <div>
    <h1>App 根组件 ---- {{count}}</h1>
    <button @click="count += 1">+1</button>
    <hr />
    <!-- v-model 是双向数据绑定指令，当需要维护组件内外数据的同步时，可以在组件上使用 v-model 指令 -->

    <!-- 外界数据的变化会自动同步到 counter 组件中
⚫ counter 组件中数据的变化，也会自动同步到外界 -->
    <!-- :number="count":父组件通过 v-bind: 属性绑定的形式，把数据传递给子组件 -->
    <!-- 在 v-bind: 指令之前添加 v-model 指令 -->
    <my-counter v-model:number="count"></my-counter>
  </div>
</template>

<script>
import MyCounter from './Counter.vue'

export default {
  name: 'MyApp',
  data () {
    return {
      count: 0,
    }
  },
  components: {
    MyCounter
  }
}
</script>

<style></style>
