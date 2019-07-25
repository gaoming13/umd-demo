(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD: 注册匿名模块
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJs
    module.exports = factory()
  } else {
    // 浏览器全局(root is window)
    root.cGlobal = factory()
  }
}(this, function() {
  return {
    c1: 'C1'
  }
}))
