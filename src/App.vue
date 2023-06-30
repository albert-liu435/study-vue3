
<script setup>
//被局部注册的组件，只能在当前注册的范围内使用
import SearchVue from "./components/part/Search.vue";


</script>

<template>
  <!-- 使用全局注册组件 -->
  <Swiper></Swiper>
  <!-- 使用局部注册组件 -->
  <SearchVue></SearchVue>
</template>

