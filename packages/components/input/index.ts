import { App } from 'vue'
import Input from './src/Input.vue'

//使用插件的方法进行注册，
//这个Input插件是一个拥有install方法的对象
Input.install = (app: App): void => {
    app.component(Input.name, Input)
}

export default Input