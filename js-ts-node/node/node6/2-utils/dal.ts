import fs from 'fs/promises';
import { ProductModel } from '../4-models/ProductModel';
import { UserModel } from '../4-models/UserModel';

const PROD_API = './1-assets/product.json';
const USER_API = './1-assets/users.json';


async function getAllProducts(): Promise<ProductModel[]> {
    const rawProducts = await fs.readFile(PROD_API);
    const products = JSON.parse(rawProducts.toString());
    return products;
}

async function saveAllProducts(products: ProductModel[]) {
    await fs.writeFile(PROD_API, JSON.stringify(products));
}

export const dal = {
    getAllProducts, saveAllProducts
}

async function getUsers(): Promise<UserModel[]> {
    const rawUser = await fs.readFile(USER_API);
    const user = JSON.parse(rawUser.toString());
    return user;
}

async function saveUsers(user: UserModel[]) {
    await fs.writeFile(USER_API, JSON.stringify(user));
}

export const dal2 = {
    getUsers, saveUsers
}