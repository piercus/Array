(fjs.define("core/Array/onEls", function() {
  
  Array.prototype.onEls = function(f) { // replaces every element of this with f(element)
    for (var i = this.length; i--; ) this[i] = f(this[i]);
    return this;
  };
  
}));
