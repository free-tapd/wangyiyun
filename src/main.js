import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
import { store } from "./store/index.ts";
import http from "./utils/http"
import "./assets/iconfont/iconfont.css"
import "./assets/rest.css"
const app = createApp(App)
app.config.globalProperties.$http = http
app.config.devtools = true   
app.use(router).use(store).use(Vant).mount("#app");
