import express from "express";
import { logRequest } from "../3-middleware/log";
import { BookModel } from "../4-models/BookModel";
import { bookSchema } from "../4-models/ErrorModel";
import { ResourceNotFound } from "../4-models/ResourceNotFound";
import { addBook, deleteBook, getBook, getBooks, updateBook } from "../5-logic/book-logic";

export const booksRouter = express.Router();

booksRouter.get('/books', logRequest ,async (req, res) => {
    const books = await getBooks();
    res.json(books)
});

booksRouter.get('/books/:id([0-9]+)', async (req, res, next) => {
    try {
        const id = req.params.id;
        const book = await getBook(+id);
        res.json(book);
    } catch (e) {
        next(new ResourceNotFound())
    }
});


booksRouter.post('/books', (req, res, next) => {
    const book = req.body;
    try {
        bookSchema.parse(book);
        next()
    } catch (error) {
        next(error)
    }
}, async (req, res) => {
    const name: string = req.body.name;
    const price: number = req.body.price;

    const book = await addBook(name, price);
    res.sendStatus(201).json(book);

});

booksRouter.delete('/books/:id', async (req, res) => {
    const id = req.params.id;
    await deleteBook(+id);
    res.sendStatus(204);
});

booksRouter.put('/books/:id', async (req, res) => {
    let book: BookModel = {name: req.body.name, price: +req.body.price, id: +req.params.id};
    let updatedBook = await updateBook(book);
    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.sendStatus(404);
    }
});
