<template>
    <div>
        <ul :class="menuClass" :style="styles" @click="handlerSelect" ref="menu">
            <slot />
        </ul>
    </div>
</template>
<script lang="ts">
export default {
    name: 'WMenu'
}
</script>
<script setup lang="ts">
import type { MenuItemPropsType } from '../MenuItem/MenuItem';
import { ref, computed, onMounted, useSlots, provide } from 'vue'
import type { MenuPropsType } from './Menu'
import { Props } from './Menu'
import { useRouter } from 'vue-router'

const menu = ref<HTMLUListElement | null>(null)
const props: MenuPropsType = defineProps(Props)
const emits = defineEmits(['select'])
const styles = {
    '--text-color': props.textColor,
    '--active-color': props.activeColor
}
const slots = useSlots()
const menuClass = computed(() => {
    return [
        'menu',
        {
            'menu-horizontal': props.mode == 'horizontal'
        },
        {
            'menu-vertical': props.mode == 'vertical'
        }
    ]
})
const router = computed(() => {
    return props.router ? useRouter() : null
})

let items: HTMLLIElement[] = []
let itemProps: MenuItemPropsType[] = []

provide('mode', props.mode)

onMounted(() => {
    let lis = (menu.value as HTMLUListElement).querySelectorAll('li')
    lis.forEach(li => {
        li.classList.add(`${props.mode}-item`)
        if (li.classList.contains('menu-item')) items.push(li)
    })

    findAllItemProps(slots, itemProps)
    setDefaultActiveItem(menu)
})

function findAllItemProps(slots: any, itemProps: any[]) {
    //获取所有MenuItem的props
    for (let i = 0; i < slots.default().length; i++) {
        if (slots.default()[i].type.name == 'WMenuItem') {
            itemProps.push(slots.default()[i].props)

        } else if (slots.default()[i].type.name == 'WSubMenu') {
            //对子菜单调用递归
            findAllItemProps(slots.default()[i].children, itemProps)
        } else if (slots.default()[i].type.name == 'WMenuItemGroup') {
            //对菜单组调用递归
            findAllItemProps(slots.default()[i].children, itemProps)
        }
    }
}

function setDefaultActiveItem(menu: any) {
    if (props.defaultTo == null) return;
    for (let i = 0; i < items.length; i++) {
        //找到默认激活的菜单项
        if (itemProps[i].to == props.defaultTo) {
            items[i].classList.add(`${props.mode}-active-item`)
            setActiveSub(menu)
            //@ts-ignore
            if (props.router) router.push(props.defaultTo)
            break;
        }
    }
}

function setActiveItem(li: HTMLLIElement) {
    let index: number;
    items.forEach((item, i) => {
        item.classList.remove(`${props.mode}-active-item`)
        if (item === li) {
            index = i;
            //@ts-ignore
            if (props.router) router.push(itemProps[i].to)
        }
    });
    li.classList.add(`${props.mode}-active-item`)
    setActiveSub(menu)
    //@ts-ignore
    emits('select', itemProps[index].to)
}

//激活N级MenuItem的SubMenu
function setActiveSub(menu: any) {
    const subs = menu.value?.querySelectorAll('.sub-menu')
    subs.forEach((sub: any) => {
        sub.classList.remove(`${props.mode}-active-sub`)

        if (sub.querySelector(`.${props.mode}-active-item`))
            sub.classList.add(`${props.mode}-active-sub`)
    })
}
//事件委托
function handlerSelect(event: Event) {
    let li = ((event.target) as HTMLLIElement).closest('li')
    //排除空白和disabled的菜单项
    if (!li || !(menu.value as HTMLUListElement).contains(li)) return;
    if (li.classList.contains('item-disabled')) return;
    //排除标题
    if (items.includes(li)) setActiveItem(li)
}


</script>

<style lang="scss" scoped>
@import '../styles/Menu.scss';
</style>