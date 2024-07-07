import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from 'element-plus'
import homePage from '@/components/homePage/index.vue'
import produceInfo from '@/components/produceInfo/index.vue'
import callUs from '@/components/callUs/index.vue'
import checkMore from '@/components/checkMore/index.vue'

createApp(App)
    .use(store)
    .use(router)
    .use(elementPlus)
    .component('homePage', homePage)
    .component('produceInfo', produceInfo)
    .component('callUs', callUs)
    .component('checkMore', checkMore)
    .mount('#app')
