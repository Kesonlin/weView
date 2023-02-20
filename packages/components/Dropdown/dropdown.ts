import { ComputedRef } from 'vue'
import { buildProps } from '@weview/utils'

export const placementType = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'] as const
export const triggerType = ['hover', 'click', 'contextmenu'] as const

export const dropdownProps = buildProps({
  /** @description 菜单弹出位置 */
  placement: {
    type: String,
    default: 'bottom',
    values: placementType
  },
  /** @description 触发方式 */
  trigger: {
    type: String,
    default: 'hover',
    values: triggerType
  },
  /** @description 点击菜单项后隐藏菜单 */
  hideOnClick: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 0
  },
  hideTimeout: {
    type: Number,
    default: 0
  }
} as const)


export const dropdownEmits = {
  visibleChange: () => true,
  click: () => true,
}

export const dropdownItemProps =  buildProps({
  disabled: Boolean,
  divided: Boolean
})

export interface WDropdownInstance {
  onClose?: () => void,
  hideOnClick?: ComputedRef<boolean>
}