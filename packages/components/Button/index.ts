import Button from './src/Button.vue'
import {App} from 'vue'

Button.install = (app:App)=>{
    app.component(Button.name,Button)
}

export default Button