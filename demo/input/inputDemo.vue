<template>
    <!-- Input组件 start -->
    <h3>• Input输入框</h3>
    <p>(1) 基础样式</p>
    <Input v-model="inputText1" placeholder="请输入..." />&emsp;输入的内容：{{ inputText1 }}
    <p>(2) 禁用状态 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(3) 可清空</p>
    <Input placeholder="请输入..." disabled /> &emsp;
    <Input v-model="inputText2" placeholder="请输入..." clearable />
    <p>(4) 密码框 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(5) 输入长度限制</p>
    <Input v-model="inputText3" placeholder="请输入密码" show-password /> &emsp;
    <Input v-model="inputText4" placeholder="请输入..." :maxlength="10" />
    <!-- Input组件 end -->
</template>
    
<script setup lang="ts">
import Input from '../../packages/components/Input/src/Input.vue'
import { ref } from 'vue'
const inputText1 = ref('');
const inputText2 = ref('');
const inputText3 = ref('');
const inputText4 = ref('');
</script>
    
<style lang="scss" scoped></style>