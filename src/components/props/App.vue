
<script setup>
import Article from './Article.vue';
import { ref } from 'vue';


const AppRef = ref({
  title: 'abc',
  author: '123'
})



</script>

<template>
  <div>
    <!-- 父子组件传值 -->
    <Article :title="AppRef.title"
             :author="'post by ' + AppRef.author"
             pubTime="1989"></Article>
  </div>

</template>


<style scoped>
</style>

