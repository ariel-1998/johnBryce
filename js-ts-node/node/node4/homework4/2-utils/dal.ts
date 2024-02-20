import fs from 'fs/promises'
import { CoffeeModel } from '../4-models/CoffeeModel';
const COFFEE_FILE = './1-assets/coffeeProd.json'

async function getAllCoffees(): Promise<CoffeeModel[]> {
    const coffees = await fs.readFile(COFFEE_FILE);
    return JSON.parse(coffees.toString());
}

async function saveAllCoffees(coffees:CoffeeModel[]) {
    await fs.writeFile(COFFEE_FILE, JSON.stringify(coffees))
}

export const dal = {
    getAllCoffees, saveAllCoffees
}