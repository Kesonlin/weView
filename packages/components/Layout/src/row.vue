<template>
    <div class="x-row">
        <span v-if="$slots.default">
            <slot :class="[`x-row-${gutter}`]">&nbsp;</slot>
        </span>
    </div>
</template>
<script lang="ts">

import { defineComponent, provide, computed, h } from "vue";

export default defineComponent({
    name: 'Row',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        gutter: {
            type: Number,
            default: 0,
        },
        justify: {
            type: String,
            default: 'end'
        }
    },
    setup(props, { slots }) {
        // bus.emit('gutter', props.gutter)   
        const gutter = computed(() => props.gutter)
        provide('Row', {
            gutter,
        })
        console.log(gutter.value)
        const style = computed(() => {
            let ret = {
                marginLeft: '',
                marginRight: '',
            }
            if (props.gutter) {
                ret.marginLeft = `-${props.gutter / 2}px`
                ret.marginRight = ret.marginLeft
            }
            console.log(ret)
            return ret
        })
        return () =>
            h(
                props.tag,
                {
                    style: style.value,
                },
                slots.default?.(),
            )
    }

})

</script>
<style lang="scss" scoped>
.x-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;
    box-sizing: border-box;
    // margin-left: -10px;
    // margin-right: 10px;

    .el-row:after,
    .el-row:before {
        display: table;
        content: "";
    }
}
</style>