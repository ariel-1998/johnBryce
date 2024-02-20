import { dal } from "../2-utils/dal";
import { CoffeeModel } from "../4-models/CoffeeModel";

export function getCoffees() {
    return dal.getAllCoffees();
}

export async function getCoffee(id: number) {
    const coffees = await getCoffees();
    const coffee = coffees.find(c => c.id === id);
    return coffee;
}

export async function addNewCoffee(type: string, price: number, level: number) {
    const coffees = await getCoffees();
    const id = Math.max(...coffees.map(c => c.id)) + 1;
    const newCoffee: CoffeeModel = {
        id,
        type,
        price,
        level
    };

    coffees.push(newCoffee);
    dal.saveAllCoffees(coffees);
    return newCoffee;
}

export async function updateCoffee(updatedCoffee: CoffeeModel) {
    const coffees = await getCoffees();
    let coffee = coffees.find(c => c.id === updatedCoffee.id);
    if (coffee) {
        coffee.level = updatedCoffee.level;
        coffee.price = updatedCoffee.price;
        coffee.type = updatedCoffee.type;
    }
    await dal.saveAllCoffees(coffees)

    return coffee;
}

export async function deleteCoffe(id: number) {
    let coffees = await getCoffees();
    coffees = coffees.filter(c => c.id !== id);
    await dal.saveAllCoffees(coffees);
}
