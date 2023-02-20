<template>
  <ul class="WDropdownMenu">
    <slot />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IceDropdownMenu',  
})
</script>

<style lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.WDropdownMenu {
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 12px 0px rgba(0, 0, 0, 0.16);
}
</style>