<template>
  <div>
    <h3>Son 子组件 --- {{ num }}</h3>
    <button type="button"
            class="btn btn-danger"
            @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "MySon",
  props: ['num'],
  //1、声明自定义事件
  emits: ['update:num'],
  // emits: ['numchange'],
  methods: {
    add () {
      //2、数据滨化时触发自定义事件
      // this.$emit('numchange', this.num + 1)
      this.$emit('update:num', this.num + 1)
    },
  },
}

</script>

<style lang="less" scoped>
</style>