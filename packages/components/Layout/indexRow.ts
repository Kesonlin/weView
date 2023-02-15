import Row from './src/row.vue'
import {App} from 'vue'

Row.install = (app:App)=>{
    app.component(Row.name,Row)
}

export default Row