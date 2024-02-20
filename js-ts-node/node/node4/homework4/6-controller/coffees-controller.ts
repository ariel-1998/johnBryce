import express from "express";
import { CoffeeModel } from "../4-models/CoffeeModel";
import { addNewCoffee, deleteCoffe, getCoffee, getCoffees, updateCoffee } from "../5-logic/coffee-logic";

export const coffeeRouter = express.Router();

coffeeRouter.get('/coffee', async (req, res) => {
    const coffees = await getCoffees();
    res.json(coffees);
});

coffeeRouter.get('/coffee/:id', async (req, res) => {
    const { id } = req.params
    const coffee = await getCoffee(+id);

    if (coffee) {
        res.json(coffee);
    } else {
        res.sendStatus(404);
    }
});

coffeeRouter.post('/coffee', async (req, res) => {
        const type: string = req.body.type;
        const price: number = req.body.price;
        const level: number = req.body.level;

    const coffee = await addNewCoffee(type, price, level);
    res.json(coffee)
});

coffeeRouter.put('/coffee/:id', async (req, res) => {
    const coffee: CoffeeModel = {
        id: +req.params.id,
        type: req.body.type,
        price: req.body.price,
        level: req.body.level
    }
    const updatedCoffee = await updateCoffee(coffee);
    if (updatedCoffee) {
        res.json(updatedCoffee);
    } else {
        res.sendStatus(404);
    }
});

coffeeRouter.delete('/coffee/:id', async (req, res) => {
    const { id } = req.params;
    await deleteCoffe(+id);
    res.sendStatus(204);
});

coffeeRouter.get('/coffee/price/:min-:max', async (req, res) => {
    const { min, max} = req.params;
    let coffees = await getCoffees();
    coffees = coffees.filter(c => c.price > +min && c.price < +max);
    if (coffees.length) {
        res.json(coffees);
    } else {
        res.sendStatus(404);
    }
});

coffeeRouter.get('/coffee/price/:price', async (req, res) => {
    const { price } = req.params;
    let coffees = await getCoffees();
    coffees = coffees.filter(coffee => coffee.price < +price);
    if (coffees.length) {
        res.json(coffees);
    } else {
        res.sendStatus(404);
    }
});

coffeeRouter.get('/coffee/level/:level', async (req, res) => {
    const { level } = req.params;
    let coffees = await getCoffees();
    coffees = coffees.filter(coffee => coffee.level === +level);
    if (coffees.length) {
        res.json(coffees);
    } else {
        res.sendStatus(404);
    }
});



