<template>
    <li class="group">
        <span class="group-title">
            {{ props.title }}
            <slot name="title" />
        </span>
        <ul>
            <slot />
        </ul>
    </li>
</template>



<script setup lang="ts">
import type { MenuItemGroupPropType } from './MenuItemGroup'
import { Props } from './MenuItemGroup'
import { inject } from 'vue';
const props: MenuItemGroupPropType = defineProps(Props)
const paddingLeft = `${(inject('subLevel') as number + 1) * 15}px`
</script>
<script lang="ts">
export default {
    name: 'WMenuItemGroup'
}
</script>
<style lang="scss" scoped>
.vertical-item {
    .group-title {
        padding: 10px 0 5px v-bind('paddingLeft');
    }
}


.group-title {
    display: inline-block;
    font-size: 0.8em;
    color: #6f6e6e;
    padding: 15px;
}
</style>