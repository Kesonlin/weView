import { App } from 'vue'
import WvEmpty from './index.vue'

WvEmpty.install = (app: App): void => {
  app.component(WvEmpty.name, WvEmpty)
}

export default WvEmpty
