import type { ExtractPropTypes, PropType } from 'vue'
import type { IfNever, UnknownToNever } from './util.ts'

// 标记类型为 WProp
export const wPropKey = '__wPropKey'
// 获取对象值的联合类型
export type Value<T> = T[keyof T]

// 组件 Prop 类型
export type WProp<Type, Required, Default> = {
  readonly type: PropType<Type>, // 获得 Type 的构造器类型
  readonly required: [Required] extends [true]? true : false
  [wPropKey]: true
} & IfNever<Default, unknown, { readonly default: Default }>

export type IfWProp<T, Y, N> = T extends { [wPropKey]: true } ? Y : N

/**
 * 组件属性 Prop 接口的定义类型
 * 
 * 默认值的类型必须与 Type、Value、Validator 计算后的类型匹配。
 */
export type WPropInput<
  Type, 
  Value,
  Required extends boolean,
  Default extends WPropMergeType<Type, Value>
> = {
  type?: Type,
  values?: readonly Value[] // 获取 values 数组元素的联合类型
  required?: Required
  default?: WPropInputDefault<Required, Default> // 处理 default 的类型
}

/**
 * 处理 WPropInput 的默认值类型
 * 如果 required === true，则 Default 的类型为 never，即没有默认值
 */
export type WPropInputDefault<
  Required extends boolean,  
  Default 
> = Required extends true
    ? never 
    : Default


// 利用 ExtractPropType 方法根据 Type 构造器类型获取对应的原始类型
export type ExtractPropType<T> = Value<ExtractPropTypes<{
  key: {
    type: T,
    required: true
  }
}>>



// IfNever<T, never>

// 整合 Type、Value（和 Required）的类型为一个联合类型
// 为了解决 nativeType:{ type: String, values: ['a', 'b', 'c']} => nativeType:string 
// 然后将属性作为 <button> 的属性，会产生报错

// 如果 Value 存在，则不考虑 Type，用于缩小类型
// 如果 Value 不存在，使用 ExtractPropType 获取 Type 的原始类型。
// Value 没有传值会得到 unknown, 需要把 unknown 转换为 never
export type WPropMergeType<Type, Value> = 
  | IfNever<UnknownToNever<Value>, ExtractPropType<Type>, never>
  | UnknownToNever<Value>

/**
 * buildProp 方法的返回值类型
 */
export type WPropOutput<Type, Value, Required, Default> = WProp<
  WPropMergeType<Type, Value>, // Type
  Required,  // Required
  Default  // Default
>


/**
 * Prop 选项中的 type 可以是下列这些原生构造函数：
 * String, Number, Boolean, Array, Object, Date, Function, Symbol
 * or 自定义的类或构造函数
 */
export type NativePropType = 
  // eslint-disable-next-line no-unused-vars
  | { new (...args: any): any }


export type IfNativePropType<T, Y, N> = [T] extends [NativePropType] ? Y : N 

/**
 * 将 buildProps 中的每一项 Input 转换为 WPropOutput
 */
export type WPropConvert<Input> = Input extends WPropInput<
  infer Type,
  infer Value,
  infer Required,
  any
>
  ? WPropOutput<Type, Value, Required, Input['default']/* 使用处理后的类型 */>
  : never