class Book {
    name: string;
    writer: string;
    price: number;
    ISBN: number;

    // constructor(name1: string, writer1: string, price1: number, isban1: number ) {
    //     this.name
    // }

    writeTheBook() {
        console.log(`name: ${this.name} writer: ${this.writer}  price: ${this.price} ISBN: ${this.ISBN}`)
    }

}
let book1= new Book();
book1.name = 'meyrav';
book1.writer = 'ariel';
book1.price = 568;
book1.ISBN = 578368902;
// book1.writeTheBook()

class Library {
    name: string;
    address: string;
    private books: Book[];

    constructor(name1: string, address: string, books: Book) {
        this.name = name1;
        this.address = address;
    }

}

let lbrry = new Library('ariel' , 'kashani', book1)