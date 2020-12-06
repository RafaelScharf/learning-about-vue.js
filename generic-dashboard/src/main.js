import { createApp } from 'vue'
import Main from './views/admin/Main.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(Main).use(store).use(router).mount('#main')
