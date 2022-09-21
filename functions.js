"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(add(2, 3));
console.log(add(3, 5, 77));
const sub = (a, b, c = 10) => { return a - b - c; };
console.log(sub(34, 33));
console.log(sub(34, 33, 2));
const mult = function (a, b) { return a * b; };
console.log(mult(33, 45));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [2, 3, 4, 5, 6];
console.log(add2(2, 3, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([2, 3, 4, 5, 5, 6, 7]);
let concatString = getItems(['a', 'd', 'f', 'g']);
console.log(concatResult, concatString);
