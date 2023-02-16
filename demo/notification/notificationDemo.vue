<template>
    <!-- Notification组件 start -->
    <h3>• Notification通知</h3>
    <button @click="change">Change</button>
    <button @click="close">Close</button>
    <Notification ref=noti :ShowClose=true Title="It is a error" Content="Please restart it" :Duration=duration :OffsetY=offsetY Type="error" Position="top-right"/>
    <!-- Notification组件 end -->
    <br/>
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
    </style>