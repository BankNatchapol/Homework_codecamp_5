function draw(n = 0){
    
    for(let i=0;i<n;i++){
        let str = ""
        for(let j=0;j<n;j++){
            str += "*";
        }
        console.log(str);
    }
}
draw(5);