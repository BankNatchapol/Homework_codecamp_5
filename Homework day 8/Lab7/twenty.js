function draw(n = 0){
    let count = 1
    for(let i=n;i>=1;i--){
        let str = ""
        for(let j=1;j<=n;j++){
            if(i>j){
                str += "_";
            }
            else{
                str += count.toString();
                count ++;
            }
            
            
        }
        console.log(str);
    }
    for(let i=2;i<=n;i++){
        let str = ""
        for(let j=1;j<=n;j++){
            if(i>j){
                str += "_";
            }
            else{
                str += count.toString();
                count ++;
            }
            
            
        }
        console.log(str);
    }
}
draw(5);