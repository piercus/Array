sand.define("Array/without", ["Array/remove"], function(){
  Array.prototype.without = function() {

    var res = this.concat();
    
    for (var i = 0 ; i < arguments.length; i++){
      for (var j = res.length; j--; ) {
        if (res[j] === arguments[i]) res = res.splice(j, 1);
      }
    }
    
    return res;
  };
});