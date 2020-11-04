import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
import { store } from "./store/index.ts";
createApp(App).use(router).use(store).use(Vant).mount("#app");
