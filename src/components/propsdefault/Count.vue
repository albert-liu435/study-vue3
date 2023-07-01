<template>
  <div>
    <p>数量：{{ count }}</p>
    <p>状态：{{ state }}</p>
  </div>
</template>

<script >
export default {
  name: "myCount",


  //使用对象类型的 props 节点，可以对每个 prop 进行数据类型的校验
  // props: ["count", "state"]
  //基础类型检查
  // props: {
  //   count: Number,
  //   state: Boolean
  // }

  // props: {
  //   //多个可能类型检查
  //   count: [String, Number],
  //   state: [String, Boolean]
  // }

  //必填项校验
  props: {
    //多个可能类型检查
    count: {
      type: [String, Number],
      //必填属性
      required: true,
      default: 100
    },
    state: [String, Boolean],
    info: [String, Number],
    type: {
      validator (value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }



}

</script>

<style lang="scss">
</style>