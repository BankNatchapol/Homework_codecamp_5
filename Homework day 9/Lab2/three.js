let check = "";
let ob = new Object();
let val;
while(true){
    check = prompt('input');
    if(check=="stop") break;
    val = prompt('value')
    if(val>1) check+="s";
    ob[check] = val;
}
console.log(ob)