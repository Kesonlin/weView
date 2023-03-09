
import { App } from 'vue'
import Icon from './src/Icon.vue'

Icon.install = (app: APP): void => {
    app.component(Icon.name, Icon)
}

export default Icon