import App from './src/App.vue'
import { createApp } from 'vue'
import weView from '../packages/components/index.ts'

createApp(App).use(weView).mount('#play')
