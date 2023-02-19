import { App } from 'vue'
import WvCheckbox from './index.vue'

WvCheckbox.install = (app: App): void => {
  app.component(WvCheckbox.name, WvCheckbox)
}

export default WvCheckbox
