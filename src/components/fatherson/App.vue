<template>
  <div>
    <h1>App 根组件 -- {{ count }}</h1>
    <button type="button"
            class="btn btn-primary"
            @click="count += 1">+1</button>
    <hr />

    <!-- 3. 以标签形式使用子组件 -->
    <!-- <my-son :num="count"></my-son> -->

    <!-- <my-son :num="count"
            @numchange="getNum"></my-son> -->
    <!-- 父组件在使用子组件期间，可以使用 v-model 指令维护组件内外数据的双向同步：
 -->
    <my-son v-model:num="count"></my-son>

  </div>
</template>

<script>

import MySon from './Son.vue';

export default {

  name: "MyApp",
  data () {
    return {
      count: 0
    }
  },
  // methods: {
  //   getNum (num) {
  //     this.count = num
  //   }
  // },
  components: {
    MySon
  }
}
</script>

<style lang="less" scoped>
</style>