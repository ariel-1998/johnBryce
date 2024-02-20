type Car = {
    createdAt?: Date;
    vehicle: string;
    model: string;
    type?: string;
    color: string;
    id?: string;
}

document.addEventListener(`DOMContentLoaded`, async () => {
    const form = document.getElementById(`creatCar`) as HTMLFormElement;
    form.addEventListener(`submit`, async e => {
        e.preventDefault();

        const newCarObject = creatNewCarObject();
        
        (document.getElementById(`btn`) as HTMLButtonElement).disabled = true;
        const newCar = await creatCar(newCarObject);
        creatCarElement(newCar);
        (document.getElementById(`btn`) as HTMLButtonElement).disabled = false;
        form.reset()
    });

    let cars: Car[] = await fetch(`https://633af55b471b8c39557961ef.mockapi.io/cars`).then(res => res.json());

    for(const car of cars) {
        creatCarElement(car)
    }
});

function creatNewCarObject(): Car {
    const vehicle = (document.getElementById(`vehicle`) as HTMLInputElement).value;
    const model = (document.getElementById(`model`) as HTMLInputElement).value;
    const color = (document.getElementById(`color`) as HTMLSelectElement).value;

    return {
        "vehicle": vehicle,
        "model": model,
        "color": color
    }
}

async function creatCar(car: Car): Promise<Car>{
    return fetch(`https://633af55b471b8c39557961ef.mockapi.io/cars`, {
        method: "POST",
        body: JSON.stringify(car),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

function creatCarElement(car: Car) {
    const carElement = document.createElement(`li`);
    carElement.innerText = `${car.id} - ${car.model} - ${car.vehicle} - ${car.color}`;

    const button = document.createElement(`button`);
    button.innerText = `X`
    carElement.style.marginLeft = `8px`;

    button.addEventListener(`click`, async function () {
        await fetch(`https://633af55b471b8c39557961ef.mockapi.io/cars/${car.id}`, {
            method: "DELETE"
        });
        document.getElementById(`cars`).removeChild(this.parentElement);
    })
    document.getElementById(`cars`).append(carElement);
}