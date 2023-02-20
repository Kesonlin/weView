/* eslint-disable no-unused-vars */
import { wPropKey } from './types.ts'
import type { 
  WPropInput, 
  WPropMergeType, 
  WPropOutput, 
  IfNativePropType, 
  NativePropType, 
  WPropConvert 
} from './types.ts'

import type { PropType } from 'vue'
import { fromPairs } from 'lodash-unified'
import { hasOwn, isObject } from '../other'

// 为 val 添加类型注释
export const definePropType = <T>(val: any): PropType<T> => val

// 有 values 的属性, 需要将 values 的联合类型变为该属性的类型
export const buildProp = <
  Type = never,
  Value = never,
  Required extends boolean = false,
  Default extends WPropMergeType<Type, Value> = never
>(
    prop: WPropInput<Type, Value, Required, Default>,
    key?: string
  ): WPropOutput<Type, Value, Required, Default> => {
  
  // 类似 plain: Boolean 的对象直接返回
  if(!isObject(prop)) return prop
  // default 是关键字
  const { type, /*values, */required, default: defaultValue } = prop
  // 处理 validator

  // 生成函数返回值
  const props: any = {
    type,
    required: !!required,
    [wPropKey]: true,
  }
  // 如果存在 default 字段，向返回值对象添加该字段
  if(hasOwn(prop, 'default')) props.default = defaultValue

  return props 
}

/**
 * build component's props
 *
 * Record<string, ... > 中的 NativePropType 是为了解决如下 bug：
 * Prop 类型配置可能通过 构造函数 而非对象字面量。
 * Type 'BooleanConstructor' has no properties in common with type 'WPropInput<any, any, any, any>'.ts(2345)
 * @param prop 
 */

export const buildProps = <
  Props extends Record<
    string, 
    | NativePropType // 原生 / 自定义的构造函数
    | WPropInput<any, any, any, any> // 对象字面量形式的配置
  >
>(props: Props): {
  [K in keyof Props]: IfNativePropType<
    Props[K], 
    Props[K], 
    WPropConvert<Props[K]> // Props[K] 为 WPropInput 类型
  >
} => fromPairs(
  Object.entries(props).map(([key, option]) => [
    key,
    buildProp(option as any, key)
  ])
) as any
