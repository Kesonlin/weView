import { templateRef } from '@vueuse/core'
import { VueElement } from 'vue'
import Menu from '../Menu/Menu.vue'
import MenuItem from '../MenuItem/MenuItem.vue'
import MenuItemGroup from '../MenuItemGroup/MenuItemGroup.vue'
import SubMenu from '../SubMenu/SubMenu.vue'

export default {
    components: {
        Menu,
        MenuItem,
        MenuItemGroup,
        SubMenu
    },
    template: `  <Menu default-to="/html" mode="horizontal" @select="handlerSelect">
        <MenuItem to="/html">HTML</MenuItem>
        <MenuItem to="/css">CSS</MenuItem>
        <MenuItem to="/javascript">JavaScript</MenuItem>
        <SubMenu to="Vue系列">
            <template #title>Vue系列</template>
            <SubMenu to="Vue">
                <template #title>Vue框架</template>
                <MenuItem to="/vue2">Vue2</MenuItem>
                <MenuItem to="/vue3">Vue3</MenuItem>
            </SubMenu>
            <MenuItem to="/vuex">Vuex</MenuItem>
            <MenuItem to="/vue-router">Vue Router</MenuItem>
            <SubMenu to="Vue">
                <template #title>单元测试</template>
                <MenuItem to="/vue-test-utils">Vue Test Utils</MenuItem>
                <MenuItem to="/vue-testing-library">Vue Testing Library</MenuItem>
            </SubMenu>
        </SubMenu>
        <MenuItem disabled>消息</MenuItem>
        <MenuItem to="/typescript">TypeScript</MenuItem>
        <MenuItem to="/git">Git</MenuItem>
    </Menu>`,
    methods: {
        handlerSelect(to: string) { }
    }
}