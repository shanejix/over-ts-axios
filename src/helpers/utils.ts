const toString = Object.prototype.toString

export const isDate = (val: any): val is Date => {
  return toString.call(val) === `[object Date]`
}

export const isObject = (val: any): val is Object => {
  return typeof val === `object` && typeof val !== null
}

export const isPlainObject = (val: any): val is Object => {
  return toString.call(val) === `[object Object]`
}
