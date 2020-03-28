function draw(n = 0){
    for(let i=1;i<=n;i++){
        let str = ""
        for(let j=1;j<=n;j++){
            if(i<j){
                str += "_";
            }
            else{
                str += "*";
            }
            
        }
        console.log(str);
    }
}
draw(5);