(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD: 注册匿名模块
    define(['exports', './c'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJs
    factory(exports, require('./c'))
  } else {
    // 浏览器全局(root is window)
    factory((root.bGlobal = {}), root.cGlobal)
  }
}(this, function(exports, c) {
  exports.b1 = 'B1(' + c.c1 + ')'
}))
