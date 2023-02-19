import { App } from 'vue'
import WvDropdown from './index.vue'

WvDropdown.install = (app: App): void => {
  app.component(WvDropdown.name, WvDropdown)
}

export default WvDropdown
