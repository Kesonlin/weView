# WVcarousel 轮播图

## 基础用法

基础的函数用法

:::tip 使用轮播图

```vue
<template>
  <WVcarousel :sliders="result"></WVcarousel>
</template>
<script lang="ts">
export default {
  setup() {
      const result = [
  {
    id: '16',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg',
    hrefUrl: '/category/1005000',
    type: '1',
  },
  {
    id: '19',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg',
    hrefUrl: '/category/1013001',
    type: '1',
  },
  {
    id: '18',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg',
    hrefUrl: '/category/1013001',
    type: '1',
  },
  {
    id: '20',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg',
    hrefUrl: '/category/1005000',
    type: '1',
  },
  {
    id: '17',
    imgUrl:
      'http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg',
    hrefUrl: '/category/1019000',
    type: '1',
  },
]
    return {
      result
    }
  }
}

</script>
<style lang="scss" scoped></style>
```
