/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

import { def } from '../util/index'

const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

/**
 * 数组方法重写
 * 截取数组的方法，调用数组方法触发notify
 */
;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  // 暂存一个原生方法
  const original = arrayProto[method]
  // 重写arrayMethods中的方法，保持原生方法的纯净
  def(arrayMethods, method, function mutator (...args) {
    // 执行原生的方法获取执行结果, this === 响应式数组
    const result = original.apply(this, args)
    // 获取数组的观察者
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    // 通知依赖项变更
    ob.dep.notify()
    // 返回原生的方法的执行结果
    return result
  })
})
