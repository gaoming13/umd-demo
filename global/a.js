(function() { 
  const b = this.bGlobal
  const c = this.cGlobal
  this.aGlobal = {
    a1: 'A1(' + b.b1 + ',' + c.c1 + ')'
  }
}())
