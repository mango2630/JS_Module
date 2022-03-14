# 1. CommonJS

- 在服务器端：模块的加载是运行时同步加载的。
- 在浏览器端：模块需要提前编译打包处理。

## 1.1 暴露模块

~~~ js
module.exports = value
exports.xxx = value;
~~~

> 暴露的模块到底是什么？


暴露的本质都是exports这个对象。


## 1.2 引入模块

~~~ js
require(xxx)
~~~

## 1.3 实现

- 服务器端实现：`Node.js`
- 浏览器端实现：[`Browserify`](https://browserify.org/)

> 区别Node.js 和 Browserify ？

## 1.4 CommonJS_Node

1. 创建 `package.json`
   ~~~ shell
   npm init
   ~~~

2. 下载第三方库 [`uniq`](https://www.npmjs.com/package/uniq)
  
  ~~~ js
  let res = uniq(module3.arr);
  ~~~

 
## 1.5 CommonJS_Browserify
~~~ shell
 browserify src/app.js -o dist/buid.js
~~~

# 2. AMD

- 专门用于浏览器端，模块的加载是异步的。
- 定义暴露模块
  ~~~ js

  // 定义没有依赖的模块
  define(function(){
    return 模块
  })

  // 定义有依赖的模块
  define(['module1', 'module2'], function(m1, m2){
    return 模块
  })
  ~~~

- 引入使用模块
~~~ js
require(['module1', 'module2'], function(m1, m2){
  // 使用模块
})
~~~

- 实现: [require.js](https://requirejs.org/)

# 3. CMD
- 专门用于浏览器端，模块的加载是异步的。
- 模块使用时才会加载执行。

- 定义暴露模块
  ~~~ js
  // 定义没有依赖的模块
  define(function(require, exports, module){
    exports.xxx = value
    module.exports = value;
  })

  // 定义有依赖的模块
  define(function(require, exports, module){
    // 引入依赖模块 同步
    var module2 = require('./module2')
    // 引入依赖模块 异步
    require.async('./module', function(mc){

    })
    // 暴露模块
    exports.xxx = value;
  })
  ~~~ 


- 引入使用模块
  ~~~ js
  define(function (require){
    var m1 = require('')
    var m2 = require('')

    m1.show()
    m2.show()
  })
  ~~~

- sea.js
  ~~~ js
  seajs.use('./js/modules/main.js')
  ~~~


# 4. ES6

~~~ shell
npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/preset-env  
babel js/src -d js/build
browserify js/build/main.js -o js/dist/bundle.js
~~~