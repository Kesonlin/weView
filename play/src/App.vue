<template>
    <h1>Demo</h1>
    <!-- Input组件 start -->
    <h3>• Input输入框</h3>
    <p>(1) 基础样式</p>
    <Input v-model="inputText1" placeholder="请输入..." ></Input>&emsp;输入的内容：{{ inputText1 }}
    <p>(2) 禁用状态 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(3) 可清空</p>
    <Input placeholder="请输入..." disabled></Input> &emsp;
    <Input v-model="inputText2" placeholder="请输入..." clearable></Input>
    <p>(4) 密码框 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(5) 输入长度限制</p>
    <Input v-model="inputText3" placeholder="请输入密码" show-password></Input> &emsp;
    <Input v-model="inputText1" placeholder="请输入..." :maxlength="10"></Input>
    <!-- Input组件 end -->
    <br/>
    <!-- Notification组件 start -->
    <h3>• Notification通知</h3>
    <button @click="change">Change</button>
    <button @click="close">Close</button>
    <Notification ref=noti :ShowClose=true Title="It is a error" Content="Please restart it" 
      :Duration=duration :OffsetY=offsetY Type="error" Position="top-right"></Notification>
    <!-- Notification组件 end -->
    <br/>
  
</template>

<script setup lang="ts">
import Notification from '../../packages/components/notification/Notification.vue'
import Input from '../../packages/components/input/Input.vue'
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