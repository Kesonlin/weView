import { App } from 'vue'
import DateTimePicker from './DatePicker/DateTimePicker/DateTimePicker.vue'
import Input from './Input/src/Input.vue'
import Icon from './Icon/index'
import Pagination from './Pagination/index'
import WvTable from './Table/index'
import WvRadio from './Table/radio'
import Button from "./Button/src/Button.vue";
import Col from './Layout/src/col.vue';
import Row from './Layout/src/row.vue'
import Notification from './notification/Notification.vue'
import { Dropdown, DropdownItem, DropdownMenu } from './Dropdown'
import WVcarousel from './carousel/WV-carousel.vue'
import { Menu, MenuItem, SubMenu, MenuItemGroup } from './Menu'
// 导出单独组件
export {
  DateTimePicker,
  Input,
  Pagination,
  Button,
  Col,
  Row,
  Notification,
  WvTable,
  WvRadio,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Menu,
  MenuItem,
  SubMenu,
  MenuItemGroup
}
// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component('DateTimePicker', DateTimePicker)
    app.component('WInput', Input)
    app.component(Icon.name, Icon)
    app.component('Pagination', Pagination)
    app.component('WvTable', WvTable)
    app.component('WvRadio', WvRadio)
    app.component('WButton', Button)
    app.component('WRow', Row)
    app.component('WCol', Col)
    app.component(Notification.name, Notification)
    app.component('WDropdown', Dropdown)
    app.component('WDropdownMenu', DropdownMenu)
    app.component('WDropdownItem', DropdownItem)
    app.component("WVcarousel", WVcarousel)
    app.component(MenuItem.name, MenuItem)
    app.component(MenuItemGroup.name, MenuItemGroup)
    app.component(Menu.name, Menu)
    app.component(SubMenu.name, SubMenu)
  },
}
