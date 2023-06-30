<script setup>
//通过definProps "编译器宏" 接收子组件传递的数据,外界可以传递指定的数据
const props = defineProps({
  title: {
    type: String,
    //default: 'abc',
    require: true
  },
  author: String,
  pubTime: String
})
</script>


<template>
  <div>
    <h3>标题：{{props.title}}</h3>
    <h5>作者：{{props.author}}</h5>
    <h6>发布时间：{{props.pubTime}}</h6>
  </div>
</template>



<style scoped>
</style>