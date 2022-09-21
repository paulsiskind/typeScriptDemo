import { isFunctionExpression } from "typescript";

function add(a:number,b:number,c?:number){
    return c ? a+b+c : a+b
}

console.log(add(2,3))
console.log(add(3,5,77))


const sub = (a:number,b:number,c=10):number =>{return a-b-c};
console.log(sub(34,33))
console.log(sub(34,33,2))

const mult = function(a:number,b:number):number{return a*b};

console.log(mult(33,45))

function add2(num1:number,num2:number,...num3:number[]):number{
    return num1+num2+num3.reduce((a,b)=>a+b,0)
}
let numbers=[2,3,4,5,6]
console.log(add2(2,3,...numbers))

function getItems<T>(items:T[]){
    return new Array<T>().concat(items);
}

let concatResult = getItems<number>([2,3,4,5,5,6,7])

let concatString = getItems<string>(['a','d','f','g'])


console.log(concatResult,concatString)