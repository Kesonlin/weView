<template>
    <DateTimePicker v-model="value1" @update:model-value="updateDate"/>
  </template>
  
  <script setup lang="ts">
  import DateTimePicker from "../../packages/components/DatePicker/DateTimePicker/DateTimePicker.vue"
  import {ref} from 'vue'
    let value1 = ref('')
    const updateDate = (val) => {
      value1.value = val;
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  