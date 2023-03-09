<template>
  <div id="root">
    <!-- 基础用法 -->
    <div class="basicUsage">
      <p>基础用法</p>
      <hr />
      <div class="row">
        <Button @click="btnClick">默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>
      <div class="row">
        <Button plain>默认按钮</Button>
        <Button plain type="primary">主要按钮</Button>
        <Button plain type="success">成功按钮</Button>
        <Button plain type="info">信息按钮</Button>
        <Button plain type="warning">警告按钮</Button>
        <Button plain type="danger">危险按钮</Button>
      </div>
      <div class="row">
        <Button round>默认按钮</Button>
        <Button round type="primary">主要按钮</Button>
        <Button round type="success">成功按钮</Button>
        <Button round type="info">信息按钮</Button>
        <Button round type="warning">警告按钮</Button>
        <Button round type="danger">危险按钮</Button>
      </div>
      <div class="row">
        <Button circle icon="search" />
        <Button circle type="primary" icon="edit" />
        <Button circle type="success" icon="check" />
        <Button circle type="info" icon="message" />
        <Button circle type="warning" icon="jinggao" />
        <Button circle type="danger" icon="delete" />
      </div>
    </div>
    <!-- 禁用状态 -->
    <div class="disabledState">
      <p>禁用状态</p>
      <hr />
      <div class="row">
        <Button disabled>默认按钮</Button>
        <Button disabled type="primary">主要按钮</Button>
        <Button disabled type="success">成功按钮</Button>
        <Button disabled type="info">信息按钮</Button>
        <Button disabled type="warning">警告按钮</Button>
        <Button disabled type="danger">危险按钮</Button>
      </div>
      <div class="row">
        <Button disabled plain>默认按钮</Button>
        <Button disabled plain type="primary">主要按钮</Button>
        <Button disabled plain type="success">成功按钮</Button>
        <Button disabled plain type="info">信息按钮</Button>
        <Button disabled plain type="warning">警告按钮</Button>
        <Button disabled plain type="danger">危险按钮</Button>
      </div>
    </div>
    <!-- 文字按钮 -->
    <div class="textBtn">
      <p>文字按钮</p>
      <hr />
      <div class="row">
        <Button type="text">文字按钮</Button>
        <Button type="text" disabled>文字按钮</Button>
      </div>
    </div>
    <!-- 加载中 -->
    <div class="loading">
      <p>加载中按钮</p>
      <hr />
      <div class="row">
        <Button disabled loading type="primary">加载中</Button>
      </div>
    </div>
    <!-- 不同尺寸 -->
    <div class="varisized">
      <p>不同尺寸</p>
      <hr />
      <div class="row">
        <Button>默认按钮</Button>
        <Button Size="medium">中等按钮</Button>
        <Button Size="small">小型按钮</Button>
        <Button Size="mini">超小按钮</Button>
      </div>
      <div class="row">
        <Button round>默认按钮</Button>
        <Button round Size="medium">中等按钮</Button>
        <Button round Size="small">小型按钮</Button>
        <Button round Size="mini">超小按钮</Button>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import Button from '../../packages/components/Button/src/Button.vue'
import '../../packages/fonts/iconfont.css'

function btnClick() {
  alert("触发按钮");
}

</script>
  
<style lang="scss" scoped>
.row {
  margin-bottom: 20px;

  Button {
    margin-right: 20px;
  }
}
</style>
  