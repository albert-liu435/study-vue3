<template>
  <div>
    <!-- 双向数据绑定 -->
    <input type="text"
           v-model.number="countRef.count" />
    <p>{{ countRef.count }} 乘以 2 的值为：{{ plus }}</p>
    <p>{{ countRef.count }} 乘以 2 的值为：{{ plus }}</p>
    <p>{{ countRef.count }} 乘以 2 的值为：{{ plus }}</p>
    <div>=====================================</div>
    <p>{{ countRef.count }} 乘以 2 的值为：{{ plusMethod() }}</p>
    <p>{{ countRef.count }} 乘以 2 的值为：{{ plusMethod() }}</p>
    <p>{{ countRef.count }} 乘以 2 的值为：{{ plusMethod() }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";


const countRef = ref({
  count: 1
})

// https://blog.csdn.net/m0_56219678/article/details/122846714
//https://blog.csdn.net/samxiaoguai/article/details/128499444
//https://zhuanlan.zhihu.com/p/519814943

//计算属性
let plus = computed(() => {
  return countRef.value.count * 2;
})

let plusMethod = () => {
  console.log('方法被执行了')
  return countRef.value.count * 2;
}

</script>

<style lang="scss">
</style>