//从 vue-router 中按需导入两个方法

import { createRouter, createWebHashHistory } from "vue-router";

//导入需要使用路由控制的组件

import Home from "./MyHome.vue";
import Movie from "./MyMovie.vue";
import About from "./MyAbout.vue";

// 创建路由实例对象

// 创建路由对象
const router = createRouter({
  // 指定路由的工作模式
  history: createWebHashHistory(),
  // 自定义路由高亮的 class 类
  // 在创建路由的实例对象时，开发者可以基于 linkActiveClass 属性，自定义路由链接被激活时所应用的类名
  linkActiveClass: "active-router",
  // 声明路由的匹配规则
  routes: [
    // 路由重定向指的是：用户在访问地址 A 的时候，强制用户跳转到地址 C ，从而展示特定的组件页面。
    // 通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向：

    { path: "/", redirect: "/home" },
    // path是hash地址，component是要展示的组件
    { path: "/home", component: Home },
    { path: "/movie", component: Movie },
    { path: "/about", component: About },
  ],
});

// 向外共享路由实例对象
// 导出路由对象
export default router;
