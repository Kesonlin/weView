<template>
Appp111
  <div>11111</div>
  <button @click="change">Change</button>
  <button @click="close">Close</button>
  <Notification ref=noti  :ShowClose=true Title="It is a error" Content="Please restart it"  :Duration=duration :OffsetY=offsetY Type="error" Position="top-right"/>
    <h1>Demo</h1>
    <!-- Input组件 start -->
    <h3>• Input输入框</h3>
    <p>(1) 基础样式</p>
    <Input v-model="inputText1" placeholder="请输入..." />&emsp;输入的内容：{{ inputText1 }}
    <p>(2) 禁用状态 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(3) 可清空</p>
    <Input placeholder="请输入..." disabled/> &emsp;
    <Input v-model="inputText2" placeholder="请输入..." clearable/>
    <p>(4) 密码框 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(5) 输入长度限制</p>
    <Input v-model="inputText3" placeholder="请输入密码" show-password/> &emsp;
    <Input v-model="inputText1" placeholder="请输入..." :maxlength="10"/>
    <!-- Input组件 end -->
    <br/>
    <!-- Notification组件 start -->
    <h3>• Notification通知</h3>
    <button @click="change">Change</button>
    <button @click="close">Close</button>
    <Notification ref=noti :ShowClose=true Title="It is a error" Content="Please restart it" 
      :Duration=duration :OffsetY=offsetY Type="error" Position="top-right"/>
    <!-- Notification组件 end -->
    <br/>

</template>

<script setup lang="ts">
import Notification from '../../packages/components/notification/Notification.vue'
import Input from '../../packages/components/input/Input.vue'
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

const inputText1 = ref('');
const inputText2 = ref('');
const inputText3 = ref('');
</script>

<style lang="scss" scoped>
.container {
  width: 700px;
  margin: 0 auto;
}
</style>