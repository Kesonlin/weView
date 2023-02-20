import { App } from 'vue'
import WVcarousel from './WV-carousel.vue'

WVcarousel.install = (app: App): void => {
    app.component("WVcarousel", WVcarousel)
}

export default WVcarousel