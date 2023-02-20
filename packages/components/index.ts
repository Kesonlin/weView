import { App } from 'vue'
import DateTimePicker from './DatePicker/DateTimePicker/DateTimePicker.vue'
import Input from './input/Input.vue'
import Pagination from './Pagination/index'
import WvTable from './Table/index'
import WvRadio from './Table/radio'
import Button from "./Button/src/Button.vue";
import Col from './Layout/src/col.vue';
import Row from './Layout/src/row.vue'
import Notification from './notification/Notification.vue'
import WVcarousel from './carousel/WV-carousel.vue'

// 导出单独组件
export { DateTimePicker, Input, Pagination, Button, Col, Row, Notification, WvTable, WvRadio }
// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component('DateTimePicker', DateTimePicker);
    app.component('Input', Input);
    app.component('Pagination', Pagination);
    app.component('WvTable', WvTable)
    app.component('WvRadio', WvRadio)
    app.component('WButton', Button);
    app.component('WRow', Row);
    app.component('WCol', Col);
    app.component(Notification.name, Notification);
    app.component("WVcarousel",WVcarousel);
  },
}
