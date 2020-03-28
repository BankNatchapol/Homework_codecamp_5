function draw(n = 0){
    let count = 1;
    for(let i=1;i<=n;i++){
        let str = ""
        for(let j=n;j>=1;j--){
            if(i<j){
                str += "_";
            }
            else{
                str += count.toString();
                count ++;
            }
            
        }
        for(let j=2;j<=n;j++){
            if(i<j){
                str += "_";
            }
            else{
                str += count.toString();
                count ++;
            }
            
        }
        
        console.log(str);

    }
    for(let i=n;i>=1;i--){
        let str = ""
        for(let j=n;j>=1;j--){
            if(i<j){
                str += "_";
            }
            else{
                str += count.toString();
                count ++;
            }
            
        }
        for(let j=2;j<=n;j++){
            if(i<j){
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