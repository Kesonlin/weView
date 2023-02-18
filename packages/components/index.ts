import { App } from "vue";
import DateTimePicker from "./DatePicker/DateTimePicker/DateTimePicker.vue";
// import Button from "./Button/src/Button.vue";

// 导出单独组件
export { DateTimePicker };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component("DateTimePicker", DateTimePicker);
    // app.component(Button.name, Button);
  },
};