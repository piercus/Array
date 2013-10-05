sand.define("Array/without", ["Array/remove"], function() {
  Array.prototype.without = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++){
      this.remove(args[i]);
    }
    return this;
  }
});