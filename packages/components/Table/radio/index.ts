import { App } from 'vue'
import WvRadio from './index.vue'

WvRadio.install = (app: App): void => {
  app.component(WvRadio.name, WvRadio)
}

export default WvRadio
