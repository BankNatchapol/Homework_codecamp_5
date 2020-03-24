let fist = prompt("input number 1-100");
let check;
let second;
while(true){
    second = prompt('Guest 1-100');
    if(second == first){
        alert('win');
        break;
    }
    check = second - first;
    if(check<0){
        alert('too small');
    }else{
        alert('too large');
    }
}