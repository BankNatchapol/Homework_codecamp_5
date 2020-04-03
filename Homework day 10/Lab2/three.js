function truncate(str, maxlength){
    if(str.length>maxlength) return str.slice(0,maxlength) + "...";
    return str;
}

console.log(truncate("asdfghjkloasdaaaaaaaarida",10));
console.log(truncate("asdfga",10));
