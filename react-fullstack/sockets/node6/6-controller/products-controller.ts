import express from "express";
import { UploadedFile } from "express-fileupload";
import { adminValidationOnly } from "../3-middleware/adminValidationOnly";
import { putLog } from "../3-middleware/putLog";
import { tokenValidationOnly } from "../3-middleware/tokenValidationOnly";
import { ProductModel } from "../4-models/ProductModel";
import { ProductNotFound } from "../4-models/ProductNotFound";
import { addProduct, deleteProduct, getProduct, getProducts, productUpdate } from "../5-logics/products-logic";
import path from 'path';
import fs from 'fs/promises'

export const productRouter = express.Router();
productRouter.use(tokenValidationOnly);

productRouter.get('/products', adminValidationOnly, async (req, res) => {
    const products = await getProducts();
    res.json(products);
});

productRouter.get('/products/:id([0-9]+)', async (req, res, next) => {
    const { id } = req.params;
    const product = await getProduct(+id);
    if (product) {
        res.json(product).status(200);
    } else {
        next(new ProductNotFound());
    }
});


productRouter.post('/products', async (req, res) => {
    const {name, price} = req.body
    const product = await addProduct(name, price);
    
    const files = req.files;
    const image  = files.image as UploadedFile;
    image.mv(path.resolve('1-assets/' + product.id + '.png'));

    res.json(product);
});

productRouter.put('/products/:id', putLog, async (req, res) => {
    const updateProduct: ProductModel = {
        id: +req.params.id,
        name: req.body.name,
        price: +req.body.price
    };
    const product = await productUpdate(updateProduct);
    
    if (product) {
        await fs.rm('1-assets/' + product.id + '.png')
        const files = req.files;
        const image  = files.image as UploadedFile;
        image.mv(path.resolve('1-assets/' + product.id + '.png'));

        res.json(product);
    } else {
        res.sendStatus(404);
    }
});

productRouter.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await deleteProduct(+id);
    await fs.rm('1-assets/' + id + '.png');
});



productRouter.get('/products/image/:id([0-9]+)', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await getProduct(+id);
        res.sendFile(path.resolve('1-assets/' + product.id + '.png'));
    } catch (e) {
        next(new ProductNotFound());
    }
});

// productRouter.put('/products/imageupdate/:id([0-9]+)', async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const product = await getProduct(+id);
//         res.sendFile(path.resolve('1-assets/' + product.id + '.png'));
//     } catch (e) {
//         next(new ProductNotFound());
//     }
// });