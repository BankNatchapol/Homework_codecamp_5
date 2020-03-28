function sum(obj) {
    let total = 0;
    for (key in obj) {
        total += obj[key];
    }
    return total;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

console.log(sum(salaries))