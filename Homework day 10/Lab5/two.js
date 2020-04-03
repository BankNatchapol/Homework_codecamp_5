function objEqual(a,b){
    if(a.length == b.length){
        for(let i in a){
            if(a[i] == b[i]) continue;
            return false;
        }
        return true;
    }else{
        return false;
    }
}

function aclean(arr){
    let ana = [];
    let result = [];
    let obj,k,che,str;
    for(let s of arr){
        obj = {};
        for(let i of s){
            k = i.toLowerCase(); 
            if(k in obj) obj[k] += 1;
            else obj[k] = 1;
        }
        ana.push(obj);
    }
    for(let i in ana){
        che = [];
        che.push(ana[i])
        for(let j = parseInt(i)+1;j<ana.length;j++){

            if(objEqual(ana[i],ana[j])) {
                che.push(ana[j]);
                ana.splice(j,1);
                
            };
        }
        result.push(che);
    }
    for(let i of result){
        str = "";
        for(let j of i){
            str = str + Object.keys(j).join('')+' ';
        }
        console.log(str)
    }
    
    
}

let arr = ["nap","teachers","cheaters","PAN","ear","era","hectares"];
console.log(aclean(arr));