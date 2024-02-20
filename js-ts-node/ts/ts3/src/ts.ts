class Person {
    constructor(protected name: string, protected id: number, protected age: number) {}
}

class Employee extends Person{
    constructor(name: string, id: number, age: number, private duty: string) {
        super(name, id, age)
    }

    toString() {
        return `name: ${this.name}, id: ${this.id}, age: ${this.age}, duty: ${this.duty}`
    }
}

class Costumer extends Person{
    constructor(name: string, id: number, age: number, private duty: string, private ccNumber: number) {
        super(name, id, age)
    }
    toString() {
        return `name: ${this.name}, id: ${this.id}, age: ${this.age}, duty: ${this.duty}, cc number: ${this.ccNumber}`
    }

    creditNum() {
        return this.ccNumber.toString().slice(-4)
    }
}

let employee1 = new Employee(`employee1`, 11, 25, `employee`);
let employee2 = new Employee(`employee2`, 22, 35, `employee`);
let costumer1 = new Costumer(`costumer1`, 33, 50, `costumer`, 98461320);
let costumer2 = new Costumer(`costumer2`, 44, 60, `costumer`, 84613203);
let costumer3 = new Costumer(`costumer3`, 55, 70, `costumer`, 84613651);

let peopleArray: Person[] = [];

peopleArray.push(employee1, employee2, costumer1, costumer2, costumer3);

for (const item of peopleArray) {
document.write(item+`<br/>`)
}


for (const item of peopleArray) {
    if(item instanceof Costumer) {
        console.log(item.creditNum())
    }
}

//2
class Sms <T>{
    constructor(
        protected destination: string,
        private massage: T
    ) {}
    sendMassage() {
        if(typeof this.massage ===`string`) {
            console.log(`sending to: ${this.destination}, by string`);
        } 
        else if(typeof this.massage === "number") {
            console.log(`sending to: ${this.destination}, by number`);
        } 
        else if(this.massage instanceof Employee) {
            console.log(`sending to: ${this.destination}, by Employee`);
        }
        else if(this.massage instanceof Costumer) {
            console.log(`sending to: ${this.destination}, by Employee`);
        }
    }
}

const sms = new Sms(`ariel`, employee1).sendMassage()