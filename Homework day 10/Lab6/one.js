function sumSaralies(obj){
    let total = 0;
    for(let key in obj){
        total += obj[key];
    }
    return total;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}

console.log(sumSaralies(salaries));