(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD: 注册匿名模块
    require(['./a', './b'], factory)    
  } else if (typeof module === 'object' && module.exports) {
    // CommonJs
    factory(require('./a'), require('./b'))
  } else {
    // 浏览器全局(root is window)
    factory(root.aGlobal, root.bGlobal)
  }
}(this, function(a, b) {
  console.log('Main(' + a.a1 + ',' + b.b1 + ')')
}))
