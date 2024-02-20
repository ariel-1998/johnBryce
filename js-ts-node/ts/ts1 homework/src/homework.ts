class Book {
    private _name: string;
    private _author: string;
    private _added: number;
    private _price: number;

    constructor(name: string, author: string, added: number, price: number){
        this._name = name;
        this._author = author;
        this._added = added;
        this._price = price;
    }

    toString() {
        console.log(`name: ${this._name}, author: ${this._author}, added: ${this._added}, price: ${this._price}.`)
    }

    maam() {
        return this._price * 0.17;
    }
}

const book1 = new Book(`book1`, `ariel`, 1998, 200);
const book2 = new Book(`book2`, `raziel`, 2000, 300);
const book3 = new Book(`book3`, `gadi`, 2002, 250);


book1.toString();
book2.toString();
book3.toString();

console.log(book1.maam());
console.log(book2.maam());
console.log(book3.maam());

//2

class Perfume {
    private _name: string;
    private _company: string;
    private _capacity: number;
    private _gender: string;
    private _price: number;

    constructor(name: string, company: string, capacity: number, gender: string, price: number) {
        this._name = name;
        this._company = company;
        this._capacity = capacity;
        this._gender = gender;
        this._price = price;
    }

    toString() {
        console.log(`name: ${this._name}, company: ${this._company}, capacity: ${this._capacity}, gender: ${this._gender}, price: ${this._price}.`)
    }

    maam() {
        return this._price * 0.17;
    }

}


class Employee {
    private _firstName: string;
    private _lastName: string;
    private _address: string;
    private _salary: number;

    constructor(firstName: string, lastName: string, address: string, salary: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
        this._salary = salary;
    }

    toString() {
        console.log(`firstName: ${this._firstName}, lastName: ${this._lastName}, address: ${this._address}, salary: ${this._salary}.`)
    }

    tax() {
        return this._salary * 0.1;
    }

}

const employee1 = new Employee(`ariel`, `kashani`, `israel`, 6000);
const employee2 = new Employee(`raziel`, `kashani`, `israel`, 3000);

employee1.toString();
employee2.toString();

console.log(employee1.tax());
console.log(employee2.tax());


const perfume1 = new Perfume(`perfume1`, `company1`, 100, `male`, 200);
const perfume2 = new Perfume(`perfume2`, `company2`, 300, `male`, 500);

perfume1.toString();
perfume2.toString();

console.log(perfume1.maam());
console.log(perfume2.maam());