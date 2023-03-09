<template>
    <div :class="inputClass">
        <input :type="inputType" :value="modelValue" @input="updateValue" :placeholder="placeholder" :disabled="disabled"
            :clearable="clearable" :maxlength="maxlength" />
        <span v-show="clearable && modelValue" class="clear-icon" @click="clearInput">✖</span>
        <span v-if="showPassword && modelValue" class="password-icon" @click="togglePassword">
            <Icon :name="passwordIcon" :size="props.fontSize" />
        </span>
        <span v-show="maxlength" class="limit-tag">{{ restLength }}/{{ maxlength }}</span>
    </div>
</template>
<script lang="ts">
export default {
    name: 'WInput'
}
</script>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { Props } from './Input'
import type { InputPropsType } from './Input'
import Icon from '../../Icon/src/Icon.vue'
import type { IconNameType } from '../../Icon/src/interface'

const props: InputPropsType = defineProps(Props)
const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
const inputClass = computed<(string | object)[]>(() => {
    return [
        'input-primary',
        {
            'input-disabled': props.disabled
        },
        {
            'input-clearable': props.clearable && props.modelValue
        },
        {
            'input-password': props.showPassword
        },
        {
            'input-limit': props.maxlength
        }
    ]
})

const inputType = ref(props.showPassword ? 'password' : 'text')
const passwordIcon = ref<IconNameType | undefined>(props.showPassword ? "view" : undefined)

const restLength = computed<number | void>(() => {
    if (!props.maxlength) return;
    return +props.maxlength - `${props.modelValue}`.length
})

function updateValue(event: Event) {
    if (props.disabled) return;
    emits('update:modelValue', (event.target as HTMLInputElement).value)
}

function clearInput(): void {
    emits('update:modelValue', '')
}

function toggle(...actions: Function[]): any {
    let idx = 0;
    return function (this: unknown, ...args: any) {
        let action = actions[idx++ % actions.length]
        return action.apply(this, args)
    }
}

const togglePassword = toggle(
    () => setInputState('text', 'view-off'),
    () => setInputState('password', 'view')
)

function setInputState(type: string, icon: IconNameType): void {
    inputType.value = type;
    passwordIcon.value = icon;
}
</script>

<style lang="scss" scoped>
$font-size: v-bind('props.fontSize');
$border-color: v-bind('props.activeColor');
$width: v-bind('props.width');
@import './Input.scss';
</style>

