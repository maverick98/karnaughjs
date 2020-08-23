define(function () {
    var self =this;
    self.operands = function(){
        let result = [];
        for (var i = 65; i <= 90; i++) {
            result.push(String.fromCharCode(i));
        }
        for (var i = 97; i <= 122; i++) {
            result.push(String.fromCharCode(i));
        }
        return result;
    };
    self.isOperand = function(key){
        let result = false;
        $.each(self.operands,function(k,v){
            if(v === key){
                result = true;
                return false;
            }
        });
        return result;
    };
    self.operators = function(){
        let result = [];  
        result.push('&'); //AND 
        result.push('|'); //OR
        result.push('$');//XOR
        result.push('#');//XNOR
        return result;  
    };
    self.isOperator = function(key){
        let result = false;
        $.each(self.operators,function(k,v){
            if(v === key){
                result = true;
                return false;
            }
        });
        return result;
    };
    self.brackets = function(){
        let result = [];
        result.push(self.startBracket());
        result.push(self.endBracket());
        return result;
    };
    self.isBracket = function(key){
        let result = false;
        $.each(self.brackets,function(k,v){
            if(v === key){
                result = true;
                return false;
            }
        });
        return result;
    };
    self.startBracket = function(){
        return  '(';
    };
    self.isStartBracket = function(key){
        return key === self.startBracket();
    };
    self.endBracket = function(){
        return  ')';
    };
    self.isEndBracket = function(key){
        return key === self.endBracket();
    };
    return {
        operands:self.operands,
        isOperand:isOperand,
        operators:self.operators,
        isOperator:isOperator,
        brackets:self.brackets,
        isBracket:isBracket,
        startBracket:startBracket,
        isStartBracket:isStartBracket,
        endBracket:endBracket,
        isEndBracket:isEndBracket
    };
});



