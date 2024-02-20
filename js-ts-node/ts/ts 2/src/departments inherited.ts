abstract class Person {
    constructor(protected firstName: string, protected lastName: string){}
    abstract toString(): void;
}

class Employee extends Person{
    constructor(firstName:string, lastName: string, private employeeNumber: number) {
        super(firstName, lastName);
    }

    toString(): void {
        console.log(`first name: ${this.firstName}, last name: ${this.lastName}, employee number: ${this.employeeNumber}`)
    }
}

class Costumer extends Person{
    constructor(firstName: string, lastName: string, private creditCard: number) {
        super(firstName, lastName);
    }

    toString(): void {
        console.log(`first name: ${this.firstName}, last name: ${this.lastName}, credit card: ${this.creditCard}`)
        
    }
}

const costumer1 = new Costumer(`ariel`, `kashani`, 123456789);
costumer1.toString();
const employee = new Employee(`asaf`, `kashani`, 1);
employee.toString()

// interface

interface Address  {
    city: string, 
    street: string, 
    houseNumber: number, 
    zipCode: number
}

abstract class Human {

    public address: Address
    constructor(
        protected firstName: string, 
        protected lastName: string ,  
        city: string,  
        street: string,  
        houseNumber: number,  
        zipCode: number
        ){
        this.address.city = city;
        this.address.street = street;
        this.address.houseNumber = houseNumber;
        this.address.zipCode = zipCode;
    }
}

class Emply extends Human {
    constructor(
        firstName: string,
        lastName: string, 
        city: string,  
        street: string,  
        houseNumber: number,  
        zipCode: number, 
        public id: number, 
        public salary: number
        ){
        super(firstName, lastName, city, street, houseNumber,zipCode);
    }
}

class Client extends Human {
    constructor(firstName: string, lastName: string, city: string,  street: string,  houseNumber: number,  zipCode: number, public id: number, public salary: number, public cCNumber: number){
        super(firstName, lastName, city, street, houseNumber,zipCode);
    }
}

interface buissiness {
    merch: string,
    capacity: number,
    address: Address
}

let emplye = new Emply(`danel oria`, `kashani`, `petah-tikva`, `rothschild`, 12, 456655, 6451320512, 120);
let client = new Client(`michael`, `kashani`, `jerusalem` , `I dont know`, 12, 6513, 46132, 4865132, 46532);

let store: buissiness = {
    merch: `drinks`,
    capacity: 500,
    address: {
        city: `petah-tikva`,
        street: `baron-hirsh`,
        houseNumber: 7,
        zipCode: 5555
    }
}

console.log(store);
console.log(emplye);
console.log(client)