<template>
  <div id="root">
    <div class="basic">
      <h1>基础</h1>
      <Row>
        <Col :span="24">
        <div class="grid-content bg-purple-dark"/>
        </Col>
      </Row>
      <Row>
        <Col :span="12">
        <div class="grid-content bg-purple"/>
        </Col>
        <Col :span="12">
        <div class="grid-content bg-purple-light"/>
        </Col>
      </Row>
      <Row>
        <Col :span="8">
        <div class="grid-content bg-purple"/>
        </Col>
        <Col :span="8">
        <div class="grid-content bg-purple-light"/>
        </Col>
        <Col :span="8">
        <div class="grid-content bg-purple"/>
        </Col>
      </Row>
    </div>
    <div class="fenlan">
      <h1>分栏间隔</h1>
      <Row :gutter="20">
        <Col :span="6">
        <div class="grid-content bg-purple"/>
        </Col>
        <Col :span="6">
        <div class="grid-content bg-purple-light"/>
        </Col>
        <Col :span="6">
        <div class="grid-content bg-purple"/>
        </Col>
        <Col :span="6">
        <div class="grid-content bg-purple-light"/>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script setup lang="ts">
import Col from '../../packages/components/Layout/indexCol'
import Row from '../../packages/components/Layout/indexRow'
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>