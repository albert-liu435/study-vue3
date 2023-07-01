<template>
  <my-search></my-search>
</template>

<script >
import SearchVue from './Search.vue'


export default {

  components: {
    //通过components节点，为当前组件注册局部子组件
    'my-search': SearchVue
  }
}

</script>

<style lang="scss">
</style>