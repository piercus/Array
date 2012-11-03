(fjs.define("core/Array/has", function() {
  
  Array.prototype.has = function(value) {
    for (var i = this.length; i--; ) {
      if (this[i] === value) {
        return true;
      }
    } 
    return false;
  };
  
}));