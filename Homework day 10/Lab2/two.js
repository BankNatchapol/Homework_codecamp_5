function checkSpam(string){
    return string.includes("xxx")||string.includes("viagra");
}

console.log(checkSpam("asdasxxx"));
console.log(checkSpam("asdasasdsa"));
console.log(checkSpam("asdviagraas"));