function count(obj){
    let counts = 0;
    for(let i in obj){
        counts += 1;
    }
    return counts; 
}

let user = {
    name:"John",
    age: 30
}
console.log(count(user));