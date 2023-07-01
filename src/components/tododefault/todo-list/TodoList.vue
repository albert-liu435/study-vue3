<template>
  <ul class="list-group">

    <!-- 注意：App 父组件通过 props 传递过来的 list 是“引用类型”的数据， -->
    <!-- 这里 v-model 双向绑定的结果是：用户的操作修改的是 App 组件中数据的状态 -->

    <!-- 列表组 -->
    <li class="list-group-item d-flex justify-content-between align-items-center"
        v-for="item in list"
        :key="item.id">
      <!-- 复选框 -->
      <div class="custom-control custom-checkbox">
        <!-- 通过 v-model 指令，双向绑定任务的完成状态 -->
        <input type="checkbox"
               class="custom-control-input"
               :id="item.id"
               v-model="item.done">
        <!-- 通过 v-bind 属性绑定，动态切换元素的 class 类名： -->
        <label class="custom-control-label"
               :class="item.done ? 'delete' : ''"
               :for="item.id">{{item.task}}</label>
      </div>
      <!--  通过 v-if 和 v-else 指令，按需渲染 badge 效果： -->
      <span class="badge badge-success badge-pill"
            v-if="item.done">完成</span>
      <span class="badge badge-warning badge-pill"
            v-else>未完成</span>
    </li>
  </ul>

</template>

<script >
export default {
  name: 'TodoList',
  props: {
    //列表数据
    list: {
      type: Array,
      required: true,
      default: [],
    },
  },
}

</script>

<style lang="less" scoped>
.list-group {
  width: 400px;
}
.delete {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}
</style>