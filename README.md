# umd-demo
Example of convert AMD or CommonJS to UMD

### 文件夹

- `amd` Defines a module that works with AMD
- `commonjs` Defines a module that works in Node
- `global` Defines a module that works with browser globals
- `umd` Defines a module that works with all of above

### 示例中模块依赖关系

```
main 依赖 a,b
a 依赖 b,c
b 依赖 c
```

### 模块加载机制

- AMD (异步模块定义,异步加载模块,浏览器端)
  - RequireJs是AMD最流行的实现方式
  - RequireJS的基本思想是：通过define方法，将代码定义为模块；通过require方法，实现模块加载
  - 定义模块：`define(['依赖1', '依赖2'], function(m1, m2) { return { } })`
  - 加载模块：`require(['依赖3'], function(m3) { return {} })`
- CommonJs (同步模块定义,同步加载模块,运行时加载,Node端)
  - Node应用由模块组成,采用CommonJs模块规范
  - 每个文件就是一个模块，有自己的作用域，对其它文件不可见
  - 定义模块：`module.exports = { a1: '123', a2: '456' }`
  - 等效于：`exports.a1 = '123'; exports.a2 = '456'`,不能用 `exports = { a1: '123', a2: '456' }`,会切断与module的关系
  - 加载模块：`const m1 = require('./m1.js')`
  - 模块可以多次加载,但只在第一次加载时运行,之后结果就被缓存了
  - 将模块名解析到一个绝对路径：`require.resolve('lodash')`
  - require发现参数字符串是一个目录,会自动加载package.json的main字段,否则index.js或index.node
  - `require.extentsions` 根据文件后缀,调用不同的函数
  - `require.cache` 指向所以缓存模
  - 删除模块缓存： `Object.keys(require.cache).forEach(key => { delete require.cache[key] })`
  - 发送模块循环加载,即A加载B,B又加载A,则B将加载A的不完整版本
  - `require.main` 指向主模块, `moudle` 表示当前模块
- UMD
  - https://github.com/umdjs/umd
  - https://github.com/gaoming13/umd-demo
  - https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A

- ESM (编译时加载,静态加载)
  - https://exploringjs.com/es6/ch_modules.html#_multiple-named-exports
  - http://es6.ruanyifeng.com/#docs/module
  - 自动采用严格模式,不管有没在头部加上`use strict`
  - 严格模式下: 禁止this指向全局变量,顶层this返回undefined
  - 同一个模块如果加载多次,将只执行一次
  - 定义模块: `export const a = '123'; export function f1() {}`
  - 定义模块: `export default function f1() {}`
  - 加载模块: `import { a, f1 } from 'lib'`
  - 加载模块: `import * as f1 from 'lib'`
  - esm.browser: `<script>` 默认同步加载js; `defer`: 先下载,页面渲染结束执行; `async`: 先下载,下载完成后执行
  - esm.browser: 默认`defer`, 也可以改为`async`
  - esm.browser: self指向window
  - node10,node12直接执行ESM: `node --experimental-modules main.mjs` 后缀改成 `mjs`
  - 判断当前是否在ES6模块中: `是否支持 = this !== undefined`