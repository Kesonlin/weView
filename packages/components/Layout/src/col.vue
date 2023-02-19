<template>
    <div class="x-col" :class="[`x-col-${span}`, { 'is-gridContent': gridContent }]">
        <div v-if="$slots.default">
            <slot/>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Col',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        },
        gridContent: {
            type: String,
            default: ''
        }
    },
})
</script>
<style lang="scss" scoped>
.x-col {
    border-radius: 4px;
    margin-bottom: 20px;
}

[class*=x-col-] {
    float: left;
    box-sizing: border-box;
}

.x-col-24 {
    width: 100%;
    height: 30px;
    border-radius: 4px;
    min-height: 36px;
}

.x-col-12 {
    width: 50%;
    height: 30px;
    border-radius: 4px;
    min-height: 36px;
}

.x-col-8 {
    width: 33.33333%;
    height: 30px;
    border-radius: 4px;
    min-height: 36px;
}

.x-col-6 {
    width: 25%;
    height: 30px;
    border-radius: 4px;
    min-height: 36px;
}

.x-col-4 {
    width: 16.66667%;
    height: 30px;
    border-radius: 4px;
    min-height: 36px;
}
</style>