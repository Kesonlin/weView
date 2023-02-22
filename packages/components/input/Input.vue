<template>
    <div :class="inputClass">
        <input type="text" :value="modelValue" @input="updateValue"
            :placeholder="placeholder" :disabled="disabled" :clearable="clearable"
            :maxlength="maxlength"
            />
        <span v-show="clearable && modelValue" class="clear-icon" @click="clearInput">✖</span>
        <span v-show="showPassword && modelValue" class="password-icon" @click="togglePassword">
        🙈</span>
        <span v-show="maxlength" class="limit-tag">{{ restLength }}/{{ maxlength }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';

interface Props {
    modelValue?: string | number,
    placeholder?: string,
    disabled?: boolean,
    clearable?: boolean,
    showPassword?: boolean,
    maxlength?: number | string
} 
const props = withDefaults(defineProps<Props>(),{
    modelValue: '',
    placeholder: '',
    disabled: false,
    clearable: false,
    showPassword: false
})
const emits = defineEmits(['update:modelValue'])

function updateValue (event: Event){
    if(props.disabled) return;
    emits('update:modelValue', (event.target as HTMLInputElement).value)
}

const inputClass = computed<any[]>(() => {
    return [
        'input-primary',
        {
            'input-disabled' : props.disabled
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

const restLength = computed(() => {
    if (!props.maxlength) return;
    return +props.maxlength - `${props.modelValue}`.length
})

onMounted(()=> {
    if (props.showPassword) {
        const input: any = document.querySelector('.input-password input')
        input.setAttribute('type', 'password')
    }
})

function clearInput(): void {
    emits('update:modelValue', '')
}

function toggle(...actions: any): any{
    return function(this: unknown, ...args: any) {
        let action = actions.shift()
        actions.push(action)

        return action.apply(this, args)
    }
}

const togglePassword = toggle(
    (evt: Event) => {

        const input: any = document.querySelector('.input-password input')
        input.setAttribute('type', 'text');
        (evt.target as HTMLSpanElement).innerHTML = "🙊"
    },
    (evt: Event) => {
        const input: any = document.querySelector('.input-password input')
        input.setAttribute('type', 'password');
        (evt.target as HTMLSpanElement).innerHTML = "🙈"
        
    }
)
</script>

<style lang="scss" scoped>
    @import './input.scss';
</style>
