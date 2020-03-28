function Cal(){
    this.read = function(){
        this.a = +prompt('input a ');
        this.b = +prompt('input b');
    };
    this.sum = function(){
        return this.a+this.b;
    };
    this.mul = function(){
        return this.a*this.b;
    };
}