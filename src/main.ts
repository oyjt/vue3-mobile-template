import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import Vant from 'vant'
import 'vant/lib/index.css'
import "./utils/rem"

import VConsole from 'vconsole'
const vConsole = new VConsole();

createApp(App)
    .use(Vant)
    .use(router)
    .use(store)
    .mount('#app')
