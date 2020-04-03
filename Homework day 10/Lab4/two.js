let array = [1,2,30,400];
console.log(array.filter(item=>(item>10)));

array = [1,2,3,4];
console.log(array.filter(item=>(item%2)));

array = [1, "1", 2, {}];
console.log(array.filter(item => (typeof(item)=='number')));

array = ["apple", "banana", "orange","pineapple","watermelon"];
console.log(array.filter(item => (item.length>6)));

array = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16},
    { name: "peach", age: 24}
]
console.log(array.filter(item => item.age<18));

array = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16},
    { name: "peach", age: 24}
]
console.log(array.filter(item => item.age!=32));

array = [1, -3, 2, 8, -4, 5];
console.log(array.filter(item=>item>0));

array = [1,3,4,5,6,7,8];
console.log(array.filter(item=>!(item%3)));

array = ["peach", 1, -3, "2", {}, []];
console.log(array.filter(item=>(typeof(item)=="string")));

array = ["APPLE","appLE","PEACH","PEach"];
console.log(array.filter(item=>(item === item.toUpperCase())));

array = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
    { name: "peach", birth: "2002-10-13"}
]
console.log(array.filter(function (item) {
    let birth = new Date(item.birth);
    return(birth.getMonth()+1)==10;
}));

array = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
    { name: "peach", birth: "2002-10-13"}
]
console.log(array.filter(function (item) {
    let birth = new Date(item.birth);
    return birth.getFullYear()<2000;
}));