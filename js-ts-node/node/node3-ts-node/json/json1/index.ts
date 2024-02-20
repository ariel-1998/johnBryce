import * as express from 'express';
import { Product } from './models/products';
import { readFile } from "fs/promises";

async function name() {
    const products = await readFile('products.json');
    const parsed: Product[] = JSON.parse(products.toString());
    console.log(parsed);
    for (const item of parsed) {
        console.log(item.name)
    }
}

name()
