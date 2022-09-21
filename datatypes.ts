let lname : string;
lname = 'Paul';

let newName = lname.toUpperCase()

console.log(newName)


let age : number;
age = 25

let dob = '25'
let result = parseInt(dob)
console.log(age,dob,result)

let empList : string[]

empList = ['Chris', 'John','Sasha']

let numList : Array<number>

numList = [2,3,4,66,6,5,34,1]

let resuLt = numList.filter((num)=> num<2);
console.log(resuLt);

let num = numList.find((num) => num === 2);
console.log(num)

let sum = numList.reduce((prev,curr)=> prev+curr);
console.log(sum)

const enum Color{
    red,
    green,
    blue
}

let c: Color = Color.blue;

console.log(c)
//tuple
let swapNum: [number,number]

function swapNumbers(num1:number, num2:number):[number,number]{
    return[num2, num1]
}

swapNum = swapNumbers(10,20)

console.log(swapNum)
swapNum[0];