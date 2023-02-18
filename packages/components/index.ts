import { App } from "vue";
import DateTimePicker from "./DatePicker/DateTimePicker/DateTimePicker.vue";
import Input from "./Input/index.ts"
// import Button from "./Button/src/Button.vue";

// 导出单独组件
export { DateTimePicker };
export { Input }
// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component("DateTimePicker", DateTimePicker);
    app.component(Input.name, Input);

    // app.component(Button.name, Button);
  },
};