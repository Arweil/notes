## Vue的每个文件功能概述
*旨在建立一个索引，能够直接明白每个文件大概的职能，方便理解Vue*

``` JavaScript
|- core
    |- global-api
    |- instance
        |- lifecycle.js // lifecycleMixin包含 _update, $forceUpdate, $destroy 三个原型方法的创建，mountComponent方法（$mount）
    |- observer
    |- index.js
|- platforms
    |- web
        |- runtime
            |- index.js // 创建 Vue.prototype.__patch__ 方法，Vue.prototype.$mount 方法
        |- entry-runtime-with-compiler.js // 重写 Vue.prototype.$mount 方法，创建options.render方法（创建vdom）
```
