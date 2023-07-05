<template>
  <div>
    <h1>App 根组件</h1>

    <!-- 步骤3：在组件的结构中声明如下 3 个 <a> 链接，通过点击不同的 <a> 链接，切换浏览器地址栏中的 Hash 值 -->
    <a href="#/home">Home</a>&nbsp; <a href="#/movie">Movie</a>&nbsp; <a href="#/about">About</a>&nbsp;
    <hr />
    <!-- 步骤2：通过 <component> 标签的 is 属性，动态切换要显示的组件 -->
    <component :is="comName"></component>
  </div>
</template>

<script>
//步骤1：导入并注册 MyHome、MyMovie、MyAbout 三个组件
import MyHome from './MyHome.vue'
import MyMovie from './MyMovie.vue'
import MyAbout from './MyAbout.vue'

export default {
  name: 'MyApp',
  data () {
    return {
      comName: 'MyHome',
    }
  },
  // 步骤4：在 created 生命周期函数中监听浏览器地址栏中 Hash 地址的变化，动态切换要展示的组件的名称
  created () {
    // 监听 hash 值变化的事件
    window.onhashchange = () => {
      // 通过 location.hash 获取到最新的 hash 值，并进行匹配
      switch (location.hash) {
        case '#/home':
          this.comName = 'MyHome'
          break
        case '#/movie':
          this.comName = 'MyMovie'
          break
        case '#/about':
          this.comName = 'MyAbout'
          break
      }
    }
  },
  components: {
    MyHome,
    MyMovie,
    MyAbout,
  },
}
</script>

<style></style>
