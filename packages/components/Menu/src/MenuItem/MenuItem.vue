<template>
    <li :class="itemClass" :style="style" @click="clickFn">
        <slot name="title"></slot>
        <slot />
    </li>
</template>
<script lang="ts">
export default {
    name: 'WMenuItem'
}
</script>
<script lang ="ts" setup>
import { computed, inject } from 'vue'
import { Props } from './MenuItem';
import type { MenuItemPropsType } from './MenuItem'

const props: MenuItemPropsType = defineProps(Props)
const itemClass = computed(() => {
    return [
        'menu-item',
        {
            'item-disabled': props.disabled
        }
    ]

})
const mode = inject('mode')
const subLevel: number = inject('subLevel', 0)
const style = mode == 'horizontal' ? {} :
    {
        '--padding-left': `${(subLevel + 1) * 15}px`
    }

const emits = defineEmits(['click'])
function clickFn(event: Event) {
    emits('click', event)
}
</script>

<style lang="scss" scoped>
@import '../styles/MenuItem.scss';
</style>