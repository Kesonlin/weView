<template>
Appp111
  <div>11111</div>
  <Button/>
  <button @click="change">Change</button>
  <button @click="close">Close</button>
  <Notification ref=noti  :ShowClose=true Title="It is a error" Content="Please restart it"  :Duration=duration :OffsetY=offsetY Type="error" Position="top-right"/>
</template>

<script setup lang="ts">
import Notification from '../../packages/components/notification/Notification.vue'
import {
        ref,
    } from 'vue'
const duration=ref(3000)
const offsetY=ref(20)
const noti=ref<any>(null)
function change(){
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