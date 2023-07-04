<template>
  <div>
    <!-- ref 用来辅助开发者在不依赖于 jQuery 的情况下，获取 DOM 元素或组件的引用。
每个 vue 的组件实例上，都包含一个 $refs 对象，里面存储着对应的 DOM 元素或组件的引用。默认情况下，
组件的 $refs 指向一个空对象。 -->
    <h1 ref="myh11">App 根组件</h1>
    <hr />

    <!-- <button type="button"
            class="btn btn-primary"
            @click="getRefs">获取 $refs 引用</button> -->

    <!-- 如果想要使用 ref 引用页面上的组件实例，则可以按照如下的方式进行操作 -->

    <button type="button"
            class="btn btn-primary"
            @click="getRefss">获取 $refs 引用</button>

    <!-- <my-counter ref="counterRef"></my-counter> -->
    <my-counter ref="counterRef"></my-counter>

  </div>
</template>

<script >
import MyCounter from './Counter.vue'
export default {

  name: 'MyApp',
  methods: {
    getRefs () {
      //this代表当前组件的实例对象，this.$refs默认指向空对象
      // console.log(this)
      // console.log(this.$refs)
      //通过this.$refs.引用的名称,可以获取到DOM元素的引用
      console.log(this.$refs.myh11)
      //操作DOM元素，把文本元素改为红色
      this.$refs.myh11.style.color = 'red'
    },
    //如果想要使用 ref 引用页面上的组件实例，则可以按照如下的方式进行操作
    getRefss () {

      //通过this.$refs.引用的名称,可以引用组件的实例
      console.log(this.$refs.counterRef)
      //引用到组件的实例之后，就可以调用组件上的methods方法了
      this.$refs.counterRef.reset()
    }
  },
  components: { MyCounter },
}

</script>

<style lang="less" scoped>
</style>