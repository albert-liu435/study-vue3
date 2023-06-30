//import './assets/main.css'
//new Vue()创建一个应用实例对象
import { createApp } from "vue";

//import App from "./App.vue";
//import App from "./components/sytle/App.vue";
// import App from "./components/props/App.vue";

// import App from "./components/classstyle/Style.vue";

import App from "./components/MyHeader/App.vue";

import Swiper from "./components/global/Swiper.vue";

//1、以App作为参数生成一个应用实例对象
//2、挂载到id位app的节点上
const app = createApp(App);

//注册全局组件,被全局注册的组件，可以在全局任何一个组件内使用
app.component("Swiper", Swiper);

//注册全局组件
app.mount("#app");
