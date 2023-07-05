//import './assets/main.css'
//new Vue()创建一个应用实例对象
import { createApp } from "vue";

import "./assets/css/bootstrap.css";
import "./index.css";

// import App from "./App.vue";

// import App from "./components/easyrouter/App.vue";

// import App from "./components/start/App.vue";
// import router from "./components/start/router";

// import App from "./components/plus/App.vue";
// import router from "./components/plus/router";

// import App from "./components/params/App.vue";
// import router from "./components/params/router";

// import App from "./components/guards/App.vue";
// import router from "./components/guards/router";

import App from "./components/next/App.vue";
import router from "./components/next/router";

//1、以App作为参数生成一个应用实例对象
//2、挂载到id位app的节点上
const app = createApp(App);

// 挂载路由模块
app.use(router);

//注册全局组件
app.mount("#app");
