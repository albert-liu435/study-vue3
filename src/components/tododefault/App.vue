<template>
  <div>
    <!-- <p>App根组件</p> -->
    <!-- 监听add事件 -->
    <todo-input @add="onAddNewTask"></todo-input>
    <!-- todolist组件 -->
    <todo-list :list="tasklist"
               class="mt-2"></todo-list>
    <todo-button v-model:active="activeBtnIndex"></todo-button>
  </div>
</template>

<script>

// 导入 TodoList 组件
import TodoList from './todo-list/TodoList.vue'
// 导入 TodoInput 组件
import TodoInput from './todo-input/TodoInput.vue'
import TodoButton from './todo-button/TodoButton.vue'

export default {
  name: 'MyApp',

  data () {
    return {
      //任务列表数据
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
      ],
      // 下一个可用的 Id
      nextId: 4,
      activeBtnIndex: 0,
    }
  },
  computed: {
    tasklist () {
      switch (this.activeBtnIndex) {
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x => x.done === true)
        case 2:
          return this.todolist.filter(x => x.done !== true)
      }
    }
  },
  //在 App.vue 组件的 methods 中声明 onAddNewTask 事件处理函数如下：
  methods: {
    // TodoInput 组件 add 事件的处理函数
    onAddNewTask (taskname) {
      //// 1. 向任务列表中新增任务信息
      this.todolist.push({
        id: this.nextId,
        task: taskname,
        done: false,// 完成状态默认为 false
      })
      // 2. 让 nextId 自增+1
      this.nextId++
    },
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton
  }


}

</script>

<style lang="less" scoped>
</style>