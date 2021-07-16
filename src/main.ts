import { createApp } from 'vue'
import App from './App.vue'
import {vantPlugins} from './plugins/vant'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import "./utils/rem"

import VConsole from 'vconsole'
const vConsole = new VConsole()

const app = createApp(App)

// use vant组件
app.use(vantPlugins)

app.use(router)
app.use(store)
app.mount('#app')
