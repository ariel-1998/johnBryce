import fs from 'fs/promises';
import { BookModel } from '../4-models/BookModel';

const BOOKS_FILE = './1-assets/books.json';

async function getAllBooks(): Promise<BookModel[]> {
    const books = await fs.readFile(BOOKS_FILE);
    return JSON.parse(books.toString())
}

async function saveAllBooks(books: BookModel[]) {
    await fs.writeFile(BOOKS_FILE, JSON.stringify(books))
}

export const dal = {
    getAllBooks, saveAllBooks
}