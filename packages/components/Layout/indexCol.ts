import Col from './src/col.vue'
import {App} from 'vue'

Col.install = (app:App)=>{
    app.component(Col.name,Col)
}

export default Col