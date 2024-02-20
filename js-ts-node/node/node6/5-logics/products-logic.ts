import { dal } from "../2-utils/dal";
import { ProductModel } from "../4-models/ProductModel";

export function getProducts() {
    return dal.getAllProducts();
}

export async function getProduct(id: number) {
    let products = await getProducts();
    let product = products.find(prod => prod.id === id);
    console.log(product)
    return product; // undefined | product;
}

export async function addProduct(name: string, price: number) {
    let products = await getProducts();
    const id = Math.max(...products.map(prod => prod.id)) + 1;
    let product = {
        id: id,
        name,
        price
    };
    products.push(product);
    await dal.saveAllProducts(products);
    return product;
}

export async function productUpdate(newProduct: ProductModel) {
    let products = await getProducts();
    let product = products.find(prod => prod.id === newProduct.id);


    if (product) {
        product.name = newProduct.name;
        product.price = newProduct.price;
        await dal.saveAllProducts(products);
    }

    return product;
}

export async function deleteProduct(id: number) {
    let products = await getProducts();
    products = products.filter(prod => prod.id !== id);
    await dal.saveAllProducts(products);
} 







