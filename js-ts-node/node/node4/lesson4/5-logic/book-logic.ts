import { dal } from "../2-utils/dal";
import { BookModel } from "../4-models/BookModel";

export function getBooks() {
    return dal.getAllBooks();
}

export async function getBook(id: number) {
    // get all books
    const books = await getBooks();

    // find specific book
    const book = books.find(b => b.id === id);
    if (!book) throw new Error;
    
    return book;
}

export async function addBook(name: string, price: number) {
    // get all books
    const books = await getBooks();
    // add new book to the books array
    const id = Math.max(...books.map(b =>b.id)) + 1;
    let book: BookModel = {
        id,
        name,
        price
    }
    books.push(book);
    //save all books
    await dal.saveAllBooks(books);

    return book
}

export async function deleteBook(id: number) {
    //get all books
    let books = await getBooks();

    //delete the book
    books = books.filter(b => b.id !== id);

    //save books
    await dal.saveAllBooks(books);
}

export async function updateBook(bookUpdate: BookModel) {
    //get all books
    let books = await getBooks();

    //update the required book
    const book = books.find(b => b.id === bookUpdate.id);
    if (book) {
        book.name = bookUpdate.name;
        book.price = bookUpdate.price;

        //save books
        await dal.saveAllBooks(books);
    }

    return book;
}

