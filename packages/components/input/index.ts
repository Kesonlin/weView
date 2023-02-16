import { App } from 'vue'
import Input from './Input.vue'

Input.install = (app: App): void => {
    app.component(Input.name, Input)
}

export default Input