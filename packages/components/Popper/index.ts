import Content from './src/content.vue'
import Trigger from './src/trigger.vue'
import Popper from './src/popper.vue'
import { App } from 'vue'

Content.install = (app: App) => app.component('WPopperContent', Content)
Trigger.install = (app: App) => app.component('WPopperTrigger', Trigger)
Popper.install = (app: App) => app.component('WPopper', Popper)

export const WPopperContent = Content
export const WPopperTrigger = Trigger
export const WPopper = Popper
