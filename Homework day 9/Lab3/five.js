function multiplyNumeric(obj, times){
    for(key in obj){
        if(typeof(obj[key])=="number"){
            obj[key] *= times;
        }
    }
    return;
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

multiplyNumeric(menu, 2);

console.log(menu)