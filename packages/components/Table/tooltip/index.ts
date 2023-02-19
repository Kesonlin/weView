import { App } from 'vue'
import WvTooltip from './index.vue'

WvTooltip.install = (app: App): void => {
  app.component(WvTooltip.name, WvTooltip)
}

export default WvTooltip
