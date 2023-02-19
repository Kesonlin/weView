<template>
  <WvTable :columns="columns66" :data-source="dataSource1">
    <template #income> 66666 </template>
    <template #outlays> 77777 </template>
    <template #balance> 88888 </template>
  </WvTable>
</template>

<script setup>
import { ref } from 'vue'
import WvTable from '../../packages/components/Table'

const columns66 = ref([
  {
    title: '账户',
    width: '200px',
    key: 'username',
  },
  {
    title: '密码',
    width: '180px',
    key: 'password',
  },
  {
    title: '资金往来',
    align: 'center',
    children: [
      {
        title: '银行收入(￥)',
        key: 'income',
        align: 'center',
        customSlot: 'income',
      },
      {
        title: '银行支出(￥)',
        key: 'outlays',
        align: 'center',
        customSlot: 'outlays',
      },
      {
        title: '银行余额(￥)',
        key: 'balance',
        align: 'center',
        customSlot: 'balance',
      },
    ],
  },
])

const dataSource1 = [
  {
    username: 'root',
    password: 'root',
    age: '18',
    remark: 'weView - vue',
  },
  {
    username: 'root',
    password: 'root',
    age: '18',
    remark: 'weView - vue',
  },
  {
    username: 'woow',
    password: 'woow',
    age: '20',
    remark:
      'weView - vue 是 一 套 Vue 3.0 的 桌 面 端 组 件 库.weView - vue是 一 套 Vue 3.0 的 桌 面 端 组 件 库.',
  },
]
</script>
