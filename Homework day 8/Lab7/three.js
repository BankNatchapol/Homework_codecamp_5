function draw(n = 0){
    
    for(let i=0;i<n;i++){
        let str = ""
        for(let j=1;j<=n;j++){
            str += j.toString();
        }
        console.log(str);
    }
}
draw(5);