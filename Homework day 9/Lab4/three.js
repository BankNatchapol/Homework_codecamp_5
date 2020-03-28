let calculator = {
    read: function(){
        this.a = +prompt('input a');
        this.b = +prompt('input b');
    },
    sum: function(){
        return this.a+this.b;
    },
    mul: function(){
        return this.a*this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
