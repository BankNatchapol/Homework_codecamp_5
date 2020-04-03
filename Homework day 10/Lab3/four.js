function sumInput(array){
    let total = 0;
    for(let i of array){
        total += i;
    }
    return total;
}

function getMaxSubSum(array){
    let sum;
    let result = [0,0];
    for(let i in array){
        for(let j=i;j<array.length+1;j++){
            arr = array.slice(i,j);
            sum = sumInput(arr);
            if(sum>result[0]){
                result[0]=sum;
                result[1]=arr;
            }
        }
    }
    return result;
}
console.log(getMaxSubSum([-1,2,3,-9]));
console.log(getMaxSubSum([2,-1,2,3,-9]));
console.log(getMaxSubSum([-1,2,3,-9,11]));
console.log(getMaxSubSum([-2,-1,1,2]));
console.log(getMaxSubSum([100,-9,2,-3,5]));
console.log(getMaxSubSum([1,2,3]));




