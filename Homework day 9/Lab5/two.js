function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        let a = +prompt('input value');
        this.value += a; 
    };
}
