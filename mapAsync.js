sand.define("Array/mapAsync",["Function/curry"],function(r){
   Array.prototype.mapAsync = function(fn, cb){
     var l = this.length,l2=l,
         res = [],
         isErr = false,
         c = function(i,err,o){   
           if(isErr){return;};
           if(err){   
             isErr = true;
             if(typeof(err)==="object" &&  typeof(err.index)==="undefined"){
               err.index = i;
             }
             cb(err);
           }
           //console.log(res,l2,i);
           
           res[i] = o;
           !--l2&&cb(null,res);
         };
     for(var i = 0; i < l; i++){ 
       fn(this[i], c.curry(i));
     }
  }
});