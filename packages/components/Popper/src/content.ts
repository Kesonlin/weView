import { StyleValue, ExtractPropTypes } from 'vue';
import { buildProps, definePropType } from '@weview/utils';
import { Options, Placement, placements } from '@popperjs/core';


type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

const POSITIONING_STRATEGIES = ['fixed', 'absolute'] as const

/**
 * popperjs options 相关的变量
 *  placement
 *  strategy
 *  
 *  offset
 *  fallbackPlacement
 *  gpuAcceleration
 *  
 *  popperOptions
 */
export const popperCoreConfigProps = buildProps({
  /** @description options.placement popper 的位置 */
  placement: {
    type: String,
    values: placements,
    default: 'bottom',
  },
  /** @description options.strategy popper 的 position 属性 */
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: 'absolute',
  },
  // modifiers 相关
  /** @description popper 相对计算位置的偏移量 */
  offset: {
    type: Number,
    default: 12,
  },
  /** @description 指定方向空间不足时，尝试其他的方向 */
  fallbackPlacement: {
    type: definePropType<Placement[]>(Array),
    default: undefined,
  },
  /** @description gpu 加速 */
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
  // 其他
  /** @description 额外的修饰符 */
  popperOptions: {
    /**
     * placement
     * modifiers
     * strategy
     * onFirstUpdate
     */
    type: definePropType<Partial<Options>>(Object),
    default: () => ({})
  }
} as const)

export const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  className: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  effect: {
    type: String
  },

  pure: Boolean,
  popperClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },

  /** @description 自定义 zIndex 而非自动生成的 */
  zIndex: Number, 

  /** @description 触发器元素 */
  referenceElem: {
    type: definePropType<HTMLElement>(Object),
  },
  /** @description ？ */
  triggerTargetElem: {
    type: definePropType<HTMLElement>(Object),
  },
  /** @description 是否显示 popper */
  visible: Boolean,

} as const)

export const popperContentEmits = {
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true,
}

export type PopperCoreConfigProps = ExtractPropTypes<typeof popperCoreConfigProps>
export type PopperContentProps = ExtractPropTypes<typeof popperContentProps>
export type PopperContentEmits = typeof popperContentEmits

// export type PopperContentInstance = InstanceType<typeof Content>

export type ArrowProps = {
  arrowElem: HTMLElement | undefined
  arrowOffset: number | undefined
}

/**
 * 构建 popperjs 的配置项 options
 * @param props 
 * @param arrowProps 
 * @returns 
 */
export const buildPopperOptions = (
  props: PopperCoreConfigProps,
  arrowProps: ArrowProps
) => {
  const { placement, strategy, popperOptions } = props
  const options = {
    placement,
    strategy,
    ...popperOptions, // 覆盖默认的 placement 和 strategy
    modifiers: genModifiers(props),
  }

  // options 添加 arrow 修饰符
  attachArrow(options, arrowProps)
  // 添加 popperOptions 中的 modifiers
  deriveExtraModifiers(options, popperOptions?.modifiers)
  return options
}

/**
 * 生成 popperjs 修饰符 options.modifiers
 * @param options 
 * @returns 
 */
function genModifiers(options: PopperCoreConfigProps) {
  const { offset, gpuAcceleration, fallbackPlacement } = options
  return [
    // offset
    {
      name: 'offset',
      options: {
        offset: [0 /* skidding */, offset ?? 12 /* distance */],
      }
    },
    {
      // popper 长度较长时，无法以 referance 元素为轴左右对称
      // 此时如果不设置 padding, 则 popper 在空间不足的一侧会紧贴页面边缘
      // padding 用于设置 popper 距离页面边缘的内边距
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5,
        }
      }
    },
    {
      name: 'flip',
      options: {
        padding: 5, /* virtual padding，指定方向上的空间最少为 popper.height + padding */
        fallbackPlacement, /* 当指定的 placement 没有足够空间放置 popper 时，接下来尝试的 placement */
      }
    },
    {
      name: 'computeStyles',
      options: {
        gpuAcceleration
      }
    }
  ]
}

/**
 * 添加 arrow 修饰符
 * @param options 
 * @param param1 
 */
function attachArrow(options: any, { arrowElem, arrowOffset }: ArrowProps) {
  options.modifiers.push({
    name: 'arrow',
    options: {
      element: arrowElem, /* 作为箭头的元素 */
      padding: arrowOffset ?? 5, /* 箭头在距离 popper 边缘 padding 以下的位置不显示 */
    }
  })
}

/**
 * 添加自定义的 modifiers 配置
 * @param options 
 * @param modifiers 
 */
function deriveExtraModifiers(
  options: any,
  modifiers: PopperCoreConfigProps['popperOptions']['modifiers']
) {
  if(modifiers) {
    options.modifiers = [...options.modifiers, ...(modifiers ?? [])]
  }
}