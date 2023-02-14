<template>
    <TimePicker v-model="value1" @update:modelValue="updateTime"/>
  </template>
  
  <script setup lang="ts">
  import TimePicker from '../../packages/components/DatePicker/TimePicker/TimePicker.vue'
  import {ref} from 'vue'
  let value1 = ref('')
  const updateTime = (val) => {
    value1.value = val;
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  