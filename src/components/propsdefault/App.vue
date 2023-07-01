<template>
  <div>
    <h1>App2根组件</h1>
    <hr />

    <!-- <my-count state="4"
              count="abca1"></my-count> -->

    <my-count :count="99"
              :state="true"
              info="abc"
              type="success"></my-count>
  </div>
</template>

<script >

import MyCount from "./Count.vue"

export default {
  name: "MyApp",
  components: {
    MyCount
  }

}

</script>

<style lang="scss">
</style>