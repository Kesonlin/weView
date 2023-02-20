
export {
  isArray,
  isMap,
  isSet,
  isDate,
  isFunction,
  isString,
  isSymbol,
  isPromise,
  isObject, // 包括数组
  isPlainObject, // 不包括数组
} from '@vue/shared';


export const hasOwn = (obj: object, prop: string | symbol): prop is never => {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}