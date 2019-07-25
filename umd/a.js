(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD: 注册匿名模块
    define(['./b', './c'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJs
    module.exports = factory(require('./b'), require('./c'))
  } else {
    // 浏览器全局(root is window)
    root.aGlobal = factory(root.bGlobal, root.cGlobal)
  }
}(this, function (b, c) {
  return {
    a1: 'A1(' + b.b1 + ',' + c.c1 + ')'
  }
}))
