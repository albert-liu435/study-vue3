import { createRouter, createWebHashHistory } from "vue-router";

import Login from "./components/code-router/MyLogin.vue";

import Home from "./components/code-router/MyHome.vue";

import Users from "./components/code-router/menus/MyUsers.vue";
import Rights from "./components/code-router/menus/MyRights.vue";
import Goods from "./components/code-router/menus/MyGoods.vue";
import Orders from "./components/code-router/menus/MyOrders.vue";
import Settings from "./components/code-router/menus/MySettings.vue";
import UserDetail from "./components/code-router/user/MyUserDetail.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login, name: "login" },
    {
      path: "/home",
      redirect: "/home/users",
      component: Home,
      name: "home",
      children: [
        { path: "users", component: Users },
        { path: "rights", component: Rights },
        { path: "goods", component: Goods },
        { path: "orders", component: Orders },
        { path: "settings", component: Settings },
        { path: "users/:id", component: UserDetail, props: true },
      ],
    },
  ],
});

export default router;
