# Vue的每个文件功能概述
*旨在建立一个索引，能够直接明白每个文件大概的职能，方便理解Vue*

``` JavaScript
|- core
    |- global-api
        |- assets.js
        |- extend.js
        |- index.js
        |- mixin.js
        |- use.js // Vue.use
    |- instance
        |- render-helpers // 渲染用到的方法
        |- events.js // eventsMixin包含$on, $once, $off, $emit方法
        |- index.js // Minix + Vue函数的创建
        |- init.js // initMixin包含 _init方法
        |- inject.js
        |- lifecycle.js // lifecycleMixin包含 _update, $forceUpdate, $destroy 三个原型方法的创建, mountComponent方法($mount, 页面依赖收集起始), updateChildComponent, activateChildComponent, deactivateChildComponent, callHook
        |- proxy.js
        |- render.js // renderMixin包含 $nextTick, _render, 以及render时需要执行的方法(render-helpers)
        |- state.js // stateMixin包含$set, $delete, $watch方法和$data, $props属性
    |- observer
        |- array.js // 数组方法重写，截取数组方法触发notify
        |- dep.js
        |- index.js // 为对象中的属性添加监听，重写属性的get，set访问器
        |- scheduler.js
        |- watcher.js // 主要通过此方法进行依赖收集
    |- index.js // 绑定GlobalAPI
|- platforms
    |- web
        |- runtime
            |- index.js // 创建 Vue.prototype.__patch__ 方法，Vue.prototype.$mount 方法
        |- entry-runtime-with-compiler.js // 重写 Vue.prototype.$mount 方法，创建options.render方法(创建vdom)
```
