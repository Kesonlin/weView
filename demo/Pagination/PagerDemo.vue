<template>
  <Pagination
    v-model="currentPage"
    :limit="limit"
    :total="total"
    :show-page="true"
  />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Pagination from '../../packages/components/Pagination'

const limit = ref(20)
const total = ref(100)
const currentPage = ref(2)
</script>
