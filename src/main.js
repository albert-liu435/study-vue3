// import { createApp } from "vue";

// import "./assets/css/bootstrap.css";
// import "./index.css";

// // import App from "./App.vue";
// // import App from "./components/watch/App.vue";
// // import App from "./components/lifecycle/App.vue";
// // import App from "./components/fatherson/App.vue";
// // import App from "./components/brother/App.vue";
// import App from "./components/provideinject/App.vue";

// // import axios from "axios";

// const app = createApp(App);

// app.mount("#app");

/////////////////////////////////////////////////////axios////////////////////////////////////////////////////////////////////////

import { createApp } from "vue";

import "./assets/css/bootstrap.css";
import "./index.css";

import App from "./components/network/APP.vue"

//在 main.js 入口文件中，通过 app.config.globalProperties 全局挂载 axios
import axios from "axios";

const app = createApp(App);

axios.defaults.baseURL = "http://localhost:8083/web/vue/api";
app.config.globalProperties.$http = axios;

app.mount("#app");

/////////////////////////////////////////////////////axios////////////////////////////////////////////////////////////////////////
