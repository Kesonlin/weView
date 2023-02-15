<template>
  Appp111
  <div>11111</div>
  <Button></Button>
  <button @click="change">Change</button>
  <button @click="close">Close</button>
  <Notification ref=noti  :ShowClose=true Title="It is a error" Content="Please restart it"  :Duration=duration :OffsetY=offsetY Type="error" Position="top-right"></Notification>
</template>

<script setup lang="ts">
import Button from '../../packages/components/button/Button.vue'
import Notification from '../../packages/components/notification/Notification.vue'
import {
        ref,
        //reactive,
        //onUpdated,
        //onMounted
    } from 'vue'
console.log(111)
const visible=ref(true)
const duration=ref(3000)
const offsetY=ref(20)
const noti=ref<any>(null)
function change(){
  //visible.value=true
  noti.value.IsVisible=true
}
function close(){
  noti.value.CloseNotification()
}
</script>

<style lang="scss" scoped>
body {
  background-color: red;
  div {
    background-color: red;
  }
}
</style>