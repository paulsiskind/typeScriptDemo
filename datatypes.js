"use strict";
let lname;
lname = 'Paul';
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 25;
let dob = '25';
let result = parseInt(dob);
console.log(age, dob, result);
let empList;
empList = ['Chris', 'John', 'Sasha'];
let numList;
numList = [2, 3, 4, 66, 6, 5, 34, 1];
let resuLt = numList.filter((num) => num < 2);
console.log(resuLt);
let num = numList.find((num) => num === 2);
console.log(num);
let sum = numList.reduce((prev, curr) => prev + curr);
console.log(sum);
let c = 2 /* Color.blue */;
console.log(c);
//tuple
let swapNum;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNum = swapNumbers(10, 20);
console.log(swapNum);
swapNum[0];
