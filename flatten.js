(sand.define("Array/flatten", ["core/isArray"], function(r) {
  
  Array.prototype.flatten = function() { // same as above but the "not-in-the-return" values are the one where f(el) is true
    var res = [];
    for (var i = -1, n = this.length; ++i < n; ) {
      if (r.isArray(this[i])) {
        res = res.concat(this[i].flatten())
      }
      else {
        res = res.concat(this[i]);
      }
    }
    return res;
  }
  
}));
