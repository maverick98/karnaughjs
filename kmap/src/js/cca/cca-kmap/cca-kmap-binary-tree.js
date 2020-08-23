define('cca-kmap-exp-constants',function (expConstants) {
    var self =this;
    function Node(key,left,right){
      var myNode =this;  
      myNode.key =key;
      myNode.left = left;
      myNode.right= right;
      myNode.type = findType(key);
      Node.prototype.findType = function(key){
          
      };
      
    };
    self.create = function(exp){
        
        
        
        
    };
    
    return {
        create:self.create
    };
});
