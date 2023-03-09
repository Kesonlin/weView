<template>
    <li :class="subClass" @mouseleave="blurFn">
        <span :style="style" :class="titleClass" ref="span" @click.stop="handlerClick">
            <slot name="title" />
            <Icon :name="stateIcon" class="arrow" />
        </span>
        <ul v-hide="fold" :class="subMenuClass" ref="ul">
            <slot />
        </ul>
        <!--       <transition :name="`${mode}-fade`">
            
        </transition> -->
    </li>
</template>
<script lang="ts">
export default {
    name: 'WSubMenu'
}
</script>
<script setup lang="ts">
import { ref, computed, inject, provide, onMounted } from 'vue'
import type { SubMenuPropsType } from './SubMenu'
import { Props } from './SubMenu'
import Icon from '../../../Icon/src/Icon.vue'
import type { IconNameType } from '../../../Icon/src/interface'

const mode = inject('mode')
const subLevel: number = inject('subLevel', 0)
provide('subLevel', subLevel + 1)

const vHide = {
    //@ts-ignore
    mounted(el, binding) {
        if (mode == 'vertical') {
            el.style.display = binding.value ? 'none' : 'block'
        } else {
            el.style.visibility = binding.value ? 'hidden' : 'visible'
        }
    },
    //@ts-ignore
    updated(el, binding) {
        if (mode == 'vertical') {
            el.style.display = binding.value ? 'none' : 'block'
        } else {
            el.style.visibility = binding.value ? 'hidden' : 'visible'
        }
    }
}
const props: SubMenuPropsType = defineProps(Props)
const emits = defineEmits(['click'])

const fold = ref(true)
const stateIcon = computed<IconNameType>(() => {
    if (fold.value)
        return (subLevel && mode == 'horizontal') ? 'arrow-right' : 'arrow-down'
    return (subLevel && mode == 'horizontal') ? 'arrow-left' : 'arrow-up'
})
const subClass = computed(() => {
    return [
        'sub-menu',
        {
            'sub-disabled': props.disabled
        }
    ]
})
const subMenuClass = computed(() => {
    return [
        'sub-ul',
        {
            'sub-level': subLevel
        }
    ]
})
const titleClass = computed(() => {
    return [
        {
            'vertical-sub-open': ((mode == 'vertical') && !fold.value)
        }
    ]
})

const style = mode == 'horizontal' ? {} :
    {
        '--padding-left': `${(subLevel + 1) * 15}px`
    }

const span = ref<HTMLSpanElement | null>(null)
const ul = ref<HTMLUListElement | null>(null)
//监听视口大小，调整水平一级一下子菜单的位置
onMounted(() => {
    getSubMenuPositon(ul.value as HTMLUListElement)
    if (mode == 'vertical') return;
    (span.value as HTMLSpanElement).addEventListener('transitionend', hoverFn)
})
const myObserver = new ResizeObserver(() => {
    getSubMenuPositon(ul.value as HTMLUListElement)
})
myObserver.observe(document.body)

//水平模式触发子菜单列表
function hoverFn() {
    if (mode == 'vertical' || props.disabled || !fold.value) return;

    fold.value = false
}
function blurFn() {
    if (mode == 'vertical' || props.disabled || fold.value) return;
    fold.value = true
}
//垂直模式触发子菜单列表
function toggleVerticalSub(evt: Event) {
    const span = (evt.target as HTMLLIElement).closest('span')
    if (!span || !((evt.currentTarget as HTMLLIElement).contains(span))) return;

    fold.value = fold.value ? false : true
}

function handlerClick(event: Event) {
    if (props.disabled) return;
    if (mode == 'vertical') toggleVerticalSub(event)
    emits('click', props.to)
}

//水平模式的一级以下子菜单，需要根据它相对于视口的位置设置偏移
function getSubMenuPositon(el: HTMLUListElement) {
    if (!subLevel || mode == 'vertical') return;

    const rect = el.getBoundingClientRect()
    const elWidth = el.clientWidth + 2 * el.clientLeft
    let screenWidth = document.body.clientWidth

    if (screenWidth - rect.right > elWidth) {
        //放右边
        el.style.top = '0px'
    } else {
        //放下边
        el.style.left = '0px'
    }

}
</script>
<style lang="scss" scoped>
@import '../styles/SubMenu.scss';

:slotted(.horizontal-active-item) {
    border-bottom: none;
}

:slotted(:deep(.horizontal-active-item)) {
    border-bottom: none;
}
</style>
