//import './assets/main.css'
//new Vue()创建一个应用实例对象
import { createApp } from "vue";

import App from "./App.vue";

//1、以App作为参数生成一个应用实例对象
//2、挂载到id位app的节点上
const app = createApp(App);



//注册全局组件
app.mount("#app");
