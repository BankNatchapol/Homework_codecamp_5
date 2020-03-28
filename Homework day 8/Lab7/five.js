function draw(n = 0){
    
    for(let i=n;i>=1;i--){
        let str = ""
        for(let j=1;j<=n;j++){
            str += i.toString();
        }
        console.log(str);
    }
}
draw(5);