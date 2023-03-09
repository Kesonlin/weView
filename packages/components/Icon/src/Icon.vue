<template>
    <i :class="`icon-${props.name} icon`" @click="handlerClick" />
</template>
<script lang="ts">
export default {
    name: 'w-icon'
}
</script>
<script setup lang="ts">
import { computed } from 'vue';
import { Props, Emits } from './Icon'
import type { IconPropsType } from './Icon'

const props: IconPropsType = defineProps(Props)
const iconSize = computed<string>(() => {
    return isNaN(+props.size) ? props.size : props.size + 'px'
})

const emits = defineEmits(Emits)

function handlerClick(evt: MouseEvent): void {
    emits('click', evt)
}

</script>

<style lang="scss" scoped>
@import '../styles/iconfont.css';

.icon {
    display: inline;
    font-size: v-bind('iconSize');
    vertical-align: middle;
    overflow: hidden;
}
</style>