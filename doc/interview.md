## CSS部分
[伪类和伪元素的区别](https://segmentfault.com/a/1190000012156828)

[margin叠加问题](https://www.cnblogs.com/libin-1/p/7098468.html)

[移动端1px](https://www.cnblogs.com/lunarorbitx/p/5287309.html)

*动画相关，包括[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)*

## ES6
for...in => for...of => defineProperty => Iterator => Symbol => generator
* [defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
* [Iterator 和 for...of 循环](http://es6.ruanyifeng.com/#docs/iterator)
* [Symbol](http://es6.ruanyifeng.com/#docs/symbol)
* [Generator 函数的语法](http://es6.ruanyifeng.com/#docs/generator)
* [Generator 函数的异步应用](http://es6.ruanyifeng.com/#docs/generator-async)
* [async 函数](http://es6.ruanyifeng.com/#docs/async)

promise
* [promiseA+](https://promisesaplus.com/)
* [介绍](http://es6.ruanyifeng.com/#docs/promise)
* [es6-promise pollyfill实现](https://github.com/stefanpenner/es6-promise)

箭头函数
* [介绍，箭头函数是否可以new，箭头函数是否可以call改变this指向](http://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)
* [箭头函数的pollyfill，自行实践](http://babeljs.io/repl) 箭头函数在创建时就已经明确了this的指向，而普通用function声明的函数在上下文中确定this指向

class
* [介绍class](http://es6.ruanyifeng.com/#docs/class)
* [介绍继承](http://es6.ruanyifeng.com/#docs/class-extends)
* 个人理解: class其实就是function的语法糖，class中的constructor就是function的构造函数，class中定义的方法为function的原型方法。class中的原型方法不能够遍历。class中的extends其实就是function使用的组合寄生继承，具体pollyfill[自行实践](http://babeljs.io/repl)

[decorator装饰器](http://es6.ruanyifeng.com/#docs/decorator)

*注意何时使用pollyfill，何时transformation，为什么？*

## 其他JS基础，老生常谈
Object相关
1. 深拷贝与浅拷贝的实现
2. 原型
3. this指向，原型链中的this指向，箭头函数的this

闭包与应用，作用域与作用域链

xss, crfs攻击

Event loop(事件循环)

*浏览器的基础知识，渲染和脚本执行也要额外注意。JS难点无非在于function和Object这两块，问的也比较多，公司业务toC的话动画也会问比较多*

## Vue
Vue是怎么实现数据响应的

Vue里面是怎么对数组实现数据响应的

Vue.set

Vue的组件通信

$nextTick 这里可以引申到事件循环

*这里不过多描述，看源码去理解* 
* [我的源码地址，欢迎star](https://github.com/Arweil/notes/tree/master/code/vue)
* [染陌的技术空间，比较详细](https://github.com/answershuto/learnVue)
* 虽然没看过vue-router但是要知道history模式(pushstate, popstate)，hash模式区别，这个很简单。还有就是对一种状态管理的理解，Redux问的比较多，很遗憾这块我并不了解。

## 开放性问题
* 谈谈你认为什么样的team才是好team
* 你对公司框架的有什么认知，有哪些不好的地方
* React的jsx和vue的template的对比
* React和Vue的对比，哪里设计的好，哪里设计的不好
* 常见设计模式, 比如: 观察者模式, 单例模式, 适配器模式 与应用
* React 高阶函数与HOC
* 工作中遇到的问题与解决方案（公司注重这里，平时积累很重要！）
* 软件的开发流程与发布流程
* 轮播组件的设计，如何做到最少的DOM操作，不止一家问过！
* 谈谈vue组件化工程化的理解（不管是React还是Vue，其实还是在于组件是如何拆分的，组件是分为两种，业务逻辑层组件和基础层组件。要思考一个问题，业务逻辑层组件使用的多了，如何把业务逻辑层的组件抽到基础层组件，以增强代码重用性与可维护性。那么我们的状态(大量Vuex的语法)怎么编写才能通过最少的代码量达到抽出的目的。一个思路就是在Page层使用Vuex，Page层下的业务逻辑层组件只通过Props从Page层拿数据，这样业务逻辑层代码没有任何额外的逻辑处理，方法抽离项目）
