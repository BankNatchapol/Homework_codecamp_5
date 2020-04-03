let array = [1, 2, 30, 400];
console.log(array.map(item => item * 2));

array = [1, 2, 3, 4];
console.log(array.map(item => item.toString()));

array = [1, "1", 2, {}];
console.log(array.map(item => typeof (item)));

array = ["apple", "banana", "orange"];
console.log(array.map(item => item.toUpperCase()));

array = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 }
]
console.log(array.map(item => item.name));

array = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 }
]
console.log(array.map(item => item.age));

array = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" }
]
console.log(array.map(item => (item.name + " " + item.surname)));

array = [1, 3, 4, 5, 6, 7, 8];
console.log(array.map(function (item) {
    if (item % 2) return "odd";
    return "even";
}));

array = [1, -3, 2, 8, -4, 5];
console.log(array.map(function (item) {
    if (item < 0) return -item;
    return item;
}));

array = [100, 200.25, 300.84, 400.3];
console.log(array.map(item => item.toFixed(2)));

array = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" }
]
console.log(array.map(function (item) {
    let birth = new Date(item.birth);
    let now = new Date();
    return Math.floor((now - birth) / (60 * 60 * 24 * 365 * 1000))
}));

array = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" }
]
console.log(array.map(function (item) {
    let birth = new Date(item.birth);
    return `<tr> <td>${item.name}</td> <td>${birth.getDate()} ${birth.toLocaleString('default', { month: 'long' }).toLowerCase().slice(0, 3)} ${birth.getFullYear()}</td></tr>`
}));