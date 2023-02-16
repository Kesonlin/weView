<template>
  <button class="x-button" :disabled="disabled" :class="[`x-button--${type}`,
  `x-button--${Size}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-text': text,
    'is-loading': loading
  }]" @click="handleClick">
    <i v-if="icon" :class="`one-icon-${icon}`"/>
    <span v-if="$slots.default">
      <slot/>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
//组件传值 限制类型PropType
type buttonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'
type buttonSize = 'medium' | 'small' | 'mini'
export default defineComponent({
  name: 'Button',
  props: {
    //尺寸
    Size: {
      type: String as PropType<buttonSize>,
      //校验
      vaildator: (val: string) => {
        return ['medium', 'small', 'mini'].includes(val)
      },
      default: 'medium',
    },
    //类型
    type: {
      type: String as PropType<buttonType>,
      //校验
      vaildator: (val: string) => {
        return ['primary', 'success', 'info', 'warning', 'danger', 'text'].includes(val)
      },
      default: 'default',
    },
    icon: {
      type: String,
      default: ''
    },
    //是否朴素
    plain: {
      type: Boolean,
      default: false
    },
    //是否禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    //是否圆形按钮
    circle: {
      type: Boolean,
      default: false
    },
    //是否文字按钮
    text: {
      type: Boolean,
      default: false
    },
    //是否加载中按钮
    loading: {
      type: Boolean,
      default: false
    }


  },
  emits: ['click'],
  setup(props, context) {
    function handleClick() {
      context.emit('click')
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.x-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  /* can't select text  */
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  /*  plain style */
  &.is-plain {

    &:hover,
    &:focus {
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }

  /* round */
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  /* circle */
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  /* icon style */
  & [class*="cs-icon-"]+span {
    margin-left: 5px;
  }

  /* disable style */
  &.is-disabled {
    cursor: not-allowed;
    border-color: #ebeef5;
    opacity: 0.6;
  }
}

/* different type style */
.x-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }

  &.is-plain {
    color: #409eff;
    background: #ecf5ff;

    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
}

.x-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }

  &.is-plain {
    color: #67c23a;
    background: #c2e7b0;

    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
}

.x-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }

  &.is-plain {
    color: #909399;
    background: #d3d4d6;

    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
}

.x-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }

  &.is-plain {
    color: #e6a23c;
    background: #f5dab1;

    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
}

.x-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }

  &.is-plain {
    color: #f56c6c;
    background: #fbc4c4;

    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
}

.x-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  border: none;

  &:hover,
  &:focus {
    background: #fff;
    background-color: #fff;
  }
}

.x-button--loading {
  border-color: transparent;
  color: #fff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;

  &:hover,
  &:focus {
    background: #fff;
    background-color: #fff;
  }
}

.x-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.x-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}

.x-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>