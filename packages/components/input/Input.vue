<template>
    <div :class="inputClass">
        <input type="text" class="input" :value="modelValue" @input="updateValue"
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
import { defineProps, defineEmits, computed, onMounted } from 'vue';

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

const inputClass = computed(() => {
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
        const input: any = document.querySelector('.input-password')?.getElementsByTagName('input')[0];
        input.setAttribute('type', 'password');
    }
})

function clearInput(): void {
    emits('update:modelValue', '')
}

function togglePassword(): void {
    const input: any = document.querySelector('.input-password')?.getElementsByTagName('input')[0];
    const icon = document.querySelector('.input-password')?.querySelector('.password-icon');
    if (input.getAttribute('type') == 'text') {
        input.setAttribute('type', 'password');
        if (icon) icon.innerHTML = "🙈"
    } else{
        input.setAttribute('type', 'text');
        if (icon) icon.innerHTML = "🙊"
    }
}
</script>

<style lang="scss" scoped>
    @import './input.scss';
</style>
