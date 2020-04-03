function sumInput(){
    let values = [];
    while(true){
        value = +prompt("input value");
        if(isNaN(value)) break; 
        values.push(value);
    }
    let total = 0;
    for(let i of values){
        total += i;
    }
    return total;
}
