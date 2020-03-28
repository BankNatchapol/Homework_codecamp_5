function draw(n = 0){
    let count = 1;
    for(let i=0;i<n;i++){
        let str = ""
        for(let j=1;j<=n;j++){
            str += count.toString();
            count++;
        }
        console.log(str);
    }
}
draw(5);