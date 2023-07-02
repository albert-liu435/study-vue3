<template>
  <div>

    <!-- watch 侦听器允许开发者监视数据的变化，从而针对数据的变化做特定的操作。例如，监视用户名的变化并发
起请求，判断用户名是否可用 -->
    <h3>watch 侦听器的用法</h3>
    <!-- <input type="text"
           class="form-control"
           v-model.trim="username" /> -->

    <input type="text"
           class="form-control"
           v-model.trim="info.username" />
  </div>
</template>

<script >

import axios from 'axios'

export default {
  name: 'MyWatch',
  data () {
    return {
      username: 'admin',
      info: {
        username: 'zs',//info中包含username属性
        age: 20,
      },
    }
  },
  watch: {
    //监听username值的变化
    //无参列表中，第一个值是变化后的新值，第二个值是变化后的旧值
    // username (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    // },

    //     //监听 username 值的变化，并使用 axios 发起 Ajax 请求，检测当前输入的用户名是否可用：
    // username (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    //   // const { data: res } = await axios.get('http://localhost:8083/web/vue/api/finduser/' + newVal)
    //   const res = axios.get('http://localhost:8083/web/vue/api/finduser/' + newVal)
    //   console.log(res)
    // },


    // async username (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    //   const { data: res } = await axios.get('http://localhost:8083/web/vue/api/finduser/' + newVal)
    //   console.log(res)
    // },

    // //默认情况下，组件在初次加载完毕后不会调用 watch 侦听器。如果想让 watch 侦听器立即被调用，则需要使用 immediate 选项
    // //1、监听username值的变化
    // username: {
    //   //2、handler属性是固定写法，当username变化时，调用handler
    //   async handler (newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     const { data: res } = await axios.get('http://localhost:8083/web/vue/api/finduser/' + newVal)
    //     console.log(res)
    //   },
    //   //表示组件加载完毕后立即调用一次当前的watch侦听器
    //   // 立即触发 watch 侦听器
    //   immediate: true,
    // },

    //当 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用 deep 选项
    //直接监听info对象的变化
    info: {
      async handler (newVal) {
        const { data: res } = await axios.get('http://localhost:8083/web/vue/api/finduser/' + newVal.username)
        console.log(res)
      },
      //需要使用deep选项，否则username值的变化无法被真听到
      deep: true,
    },


    //如果只想监听对象中单个属性的变化，则可以按照如下的方式定义 watch 侦听器
    // 'info.username': {
    //   async handler (newVal) {
    //     const { data: res } = await axios.get('http://localhost:8083/web/vue/api/finduser/' + newVal)
    //     console.log(res)
    //   },
    // },
  },
}

//开发者需要在 watch 节点下，定义自己的侦听器


// 计算属性和侦听器侧重的应用场景不同：
// 计算属性侧重于监听多个值的变化，最终计算并返回一个新值
// 侦听器侧重于监听单个数据的变化，最终执行特定的业务处理，不需要有任何返回值




</script>

<style lang="less" scoped>
</style>