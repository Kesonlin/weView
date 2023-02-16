
import {App} from 'vue'
import Notification from "./Notification.vue"
Notification.install = (app: App): void => {
    alert(Notification.name)
    app.component(Notification.name, Notification)
}
export default Notification