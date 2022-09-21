import {Login} from './interfaces'


class Employee{
    #id: number;

    name:string;

    address:string;

   constructor(id:number, name:string,address:string){
    this.address  = address
    this.#id = id;
    this.name = name;
   }
//    getNameWithAddress():string{
//     return this.name +" " + this.address
// }
    getNameWithAddress():string{
        return `${this.name} stays at ${this.address}`
    }
    static getEmployeeCount():number{
        return 50;
    }
    get empID():number{
        return this.#id;
    }
    set empID(id:number){
        this.#id = id;
    }
}

class Manager extends Employee{

    constructor(id:number, name:string,address:string){
        super(id, name, address);
    }
    getNameWithAddress():string{
        return `${this.name} is a manager at ${this.address}`
    }
}

let mike =  new Manager(3,'Mike', 'Sobo')
let chris = new Employee(2,"Chris","Route 66");
// let john = new Employee();
mike.empID = 666;
console.log(mike.empID)
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 82';

let address = chris.getNameWithAddress();
let otherAddress = mike.getNameWithAddress();
console.log(chris, address,mike, otherAddress, Employee.getEmployeeCount())

//methods

