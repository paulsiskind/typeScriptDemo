interface User{
    name:string;
    age?:number;
    id:number;
    email:string;
}

let user:User = {name:'John', id:2343,email: ''};

interface Employees extends User{
    salary:number;
}

let employee:Employees = {name:'George',id:2323,email:'',salary:6500};
console.log(employee)
export interface Login{
    Login():User;
}