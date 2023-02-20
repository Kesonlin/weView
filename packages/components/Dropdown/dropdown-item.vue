<template>
  <hr v-if="divided" class="iceDropdownMenu_item-devided" />
  <li
    :aria-disabled="disabled"
    class="iceDropdownMenu_item"
    :class="disabled && 'is-disabled'"
    @click="handleClick"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { WDropdownInstance, dropdownItemProps } from './dropdown'
export default defineComponent({
  name: 'IceDropdownItem',
  props: dropdownItemProps,
  emits: ['pointermove', 'pointerleave', 'click'],
  setup(props, { emit }) {
    const WDropdown = inject<WDropdownInstance>('iceDropdown', {})

    const handleClick = (evt: MouseEvent) => {
      if(props.disabled) return
      emit('click', evt)

      if(WDropdown?.hideOnClick?.value) {
        WDropdown.onClose?.()
      }
    }
    return {
      handleClick,
    }
  }

})
</script>

<style lang="scss">
.iceDropdownMenu_item {
  display:flex;
  width: 100%;
  padding: 5px 16px;
  justify-content: center;
  color: #555;
  font-size: 14px;
  box-sizing: border-box;
  &:hover {
    background-color: #ecf5ff;
    color: #409eff;
    cursor: pointer;
  }

  &.is-disabled {
    color: #aaa;
    &:hover {
      background-color: #fff;
      cursor: not-allowed;
    }
  }
}
.iceDropdownMenu_item-devided {
  margin: 3px 0;
}
</style>