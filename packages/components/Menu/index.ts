import { APP } from 'vue'
import Menu from './src/Menu/Menu.vue'
import MenuItem from './src/MenuItem/MenuItem.vue'
import SubMenu from './src/SubMenu/SubMenu.vue'
import MenuItemGroup from './src/MenuItemGroup/MenuItemGroup.vue'
Menu.install = (app: App): void => {
    app.component(Menu.name, Menu)
}

MenuItem.install = (app: App): void => {
    app.component(MenuItem.name, MenuItem)
}
SubMenu.install = (app: App): void => {
    app.component(SubMenu.name, SubMenu)
}
MenuItemGroup.install = (app: App): void => {
    app.component(MenuItemGroup.name, MenuItemGroup)
}

export { MenuItem, Menu, SubMenu, MenuItemGroup };