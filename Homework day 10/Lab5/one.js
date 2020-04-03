function unique(arr){
    let s = new Set(arr);
    return Array.from(s);
}
let value = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Hare","Hare",":-o"];
console.log(unique(value));