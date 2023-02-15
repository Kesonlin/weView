<template>
    <BasicDatePicker v-model="value1" @update:model-value="updateDate"/>
  </template>
  
  <script setup lang="ts">
  import BasicDatePicker from '../../packages/components/DatePicker/BasicDatePicker/BasicDatePicker.vue'
  import {ref} from 'vue'
  let value1 = ref('')
  const updateDate = (val) => {
    value1.value = val
  }

  </script>
  
  <style lang="scss" scoped>
  
  </style>
  