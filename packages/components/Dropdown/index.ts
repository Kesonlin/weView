import Dropdown from './dropdown.vue'
import DropdownMenu from './dropdown-menu.vue'
import DropdownItem from './dropdown-item.vue'
import { App } from 'vue'

Dropdown.install = (app: App) => app.component('WDropdown', Dropdown)
DropdownMenu.install = (app: App) => app.component('WDropdownMenu', DropdownMenu)
DropdownItem.install = (app: App) => app.component('WDropdownItem', DropdownItem)

export {
  Dropdown,
  DropdownMenu,
  DropdownItem,
}