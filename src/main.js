//new Vue()创建一个应用实例对象
import { createApp } from "vue";

import "./assets/css/bootstrap.css";
import "./index.css";

// import App from "./App.vue";
// import App from "./components/ref/App.vue";
// import App from "./components/nexttick/App.vue";
// import App from "./components/dynamic/App.vue";
// import App from "./components/base-slot/App.vue";
// import App from "./components/named-slot/App.vue";
import App from "./components/scoped-slot/App.vue";

//1、以App作为参数生成一个应用实例对象
//2、挂载到id位app的节点上
const app = createApp(App);

//注册全局组件
app.mount("#app");
