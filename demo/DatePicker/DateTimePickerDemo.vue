<template>
  <DateTimePicker v-model="DateTimeValue" @update:model-value="updateDate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
let DateTimeValue = ref('')
const updateDate = (val) => {
  DateTimeValue.value = val
}
</script>
<style lang="scss" scoped></style>
