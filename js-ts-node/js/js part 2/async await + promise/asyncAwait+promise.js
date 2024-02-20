function generate7BoomAfterDelayAsync(min, max) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * (max - min) + min);
            if(num !== 0 && num % 7 === 0 || num % 10 === 7){
                resolve(num);
                return;
            }
                reject(`error: ${num} is not divided by 7, or end with 7`);
        } ,1000);
    })
}


async function generate7BoomAfterDelayAsyncAwait() {
    let min = Number.parseInt(document.getElementById(`q1-p1`).value);
    let max = Number.parseInt(document.getElementById(`q1-p2`).value);
    try {
        const num = await generate7BoomAfterDelayAsync(min, max);
        console.log(num);
    } catch (error) {
        console.log(error);
    }
}

function generate7BoomAfterDelayAsyncPromise() {
    let min = Number.parseInt(document.getElementById(`q1-p1`).value);
    let max = Number.parseInt(document.getElementById(`q1-p2`).value);
    generate7BoomAfterDelayAsync(min, max)
        .then((num) => console.log(num))
        .catch((error) => console.log(error))
}

//2
function generatePrimeNumberAfterDelayAsync(min, max) {
    return new Promise((resolve, reject) => {

        let num = Math.floor(Math.random() * (max - min) + min);
        setTimeout(() => {
            for( i = 2; i < num; i ++){
                if(num % i === 0){
                    reject(`Error: ${num} is not prime`);
                    return;
                }
            }
            if(num === 0){
                reject(`Error: ${num} is not prime`);
                return;
            }
            resolve(num + ` is prime`)
        },1000)        
    })
}

async function generatePrimeNumberAfterDelayAsyncAwait() {
    let min = Number.parseInt(document.getElementById(`q2-p1`).value);
    let max = Number.parseInt(document.getElementById(`q2-p2`).value);
    try {
    const random = await generatePrimeNumberAfterDelayAsync(min, max);
        console.log(random)
    } catch (error) {
        console.log(error)
    }
}

function generatePrimeNumberAfterDelayAsyncPromise() {
    let min = Number.parseInt(document.getElementById(`q2-p1`).value);
    let max = Number.parseInt(document.getElementById(`q2-p2`).value);
    generatePrimeNumberAfterDelayAsync(min, max)
        .then((num) => console.log(num))
        .catch((e) => console.log(e))
}

//3
const animals = [
    {
        name: `cat`,
        cute: true
    },
    {
        name: `dog`,
        cute: true
    },
    {
        name: `bunny`,
        cute: true
    },
    {
        name: `parrot`,
        cute: true
    },
    {
        name: `scorpion`,
        cute: false
    },
    {
        name: `spider`,
        cute: false
    },
    {
        name: `cockroach`,
        cute: false
    }
]
function generateCuteAnimalAfterDelayAsync() {
    return new Promise((resolve, reject) => {
        let animal = animals[Math.floor(Math.random()* animals.length)];
        setTimeout(() => {
            if(animal.cute){
                resolve(`${animal.name} is cute`);
                return;
            }
            reject(`${animal.name} is NOT cute`)
        },1000)
    })
}

async function generateCuteAnimalAfterDelayAsyncAwait() {
    try {
    const animal = await generateCuteAnimalAfterDelayAsync();
    console.log(animal)
    } catch (error) {
        console.log(error)
    }
}

function generateCuteAnimalAfterDelayAsyncPromise() {
    generateCuteAnimalAfterDelayAsync()
        .then(cute => console.log(cute))
        .catch(e => console.log(e))
}

//4
const week = [`sunday`, `monday`, `tuseday`, `wednesday`, `thursday`, `friday`, `saturday`];
function generateWorkingDayAfterDelayAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let day = week[Math.floor(Math.random() * week.length)];
            if(day === `saturday` || day === `friday`) {
                reject(`Error: ${day} is not a working day`);
                return;
            }
            resolve(day)
        },1000)
    })
}

async function generateWorkingDayAfterDelayAsyncAwait() {
    try {
    let day = await generateWorkingDayAfterDelayAsync();
        console.log(day);
    } catch (error) {
        console.log(error);
    }
}

function generateWorkingDayAfterDelayAsyncPromise() {
    generateWorkingDayAfterDelayAsync()
        .then(day => console.log(day))
        .catch(e => console.log(e));
}

//5
function getArrayFromServerAsync(size) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 10);
            if(num % 2 === 0) {
                const sizeArray = []
                for(let i = 0; i < size; i++) {
                    let arrayNum = Math.floor(Math.random() * 10);
                    sizeArray.push(arrayNum);
                }
                resolve(sizeArray);
                return;
            }
            reject(`Error: we could'nt get an array from server!`);
        },1000)
    })
}

async function getArrayFromServerAsyncAwait() {
    const num = Number.parseInt(document.getElementById(`q5`).value);
    try {
        let array = await getArrayFromServerAsync(num);
        console.log(array)
    } catch (error) {
        console.log(error)
    }
}

function getArrayFromServerAsyncPromise() {
    const num = Number.parseInt(document.getElementById(`q5`).value);
    getArrayFromServerAsync(num)
        .then(arr => console.log(arr))
        .catch(e => console.log(e))
}

//6
function getPizzaFromServerAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10);
            if(num % 2 === 0) {
                let diameter =  Math.floor(Math.random() * (50 -10) + 10);
                let price = Math.floor(Math.random() * (80 - 20) + 20);
                let toppingsAmount = Math.floor(Math.random() * 4);
                const pizza ={
                        diameter,
                        price,
                        toppingsAmount
                    }
                    resolve(pizza);
                    return;
            }
            reject(`Error: We could'nt order a pizza for you!`)
        },1000)
    })
}

async function getPizzaFromServerAsyncAwait() {
    try {
        const pizza = await getPizzaFromServerAsync();
        console.log(pizza)
    } catch (error) {
        console.log(error)
    }
}

function getPizzaFromServerAsyncPromise() {
    getPizzaFromServerAsync()
        .then(pizza => console.log(pizza))
        .catch(e => console.log(e))
}

//7
function generateStrongPasswordAsync() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const getPasswordArray = [`abcdefghijklmnopqrstuvwxyz`, `ABCDEFGHIJKLMNOPQRSTUVWXYZ`, `0123456789`]
            let password = ``
            for(let i = 0; i < 6; i++) {
                let slot = getPasswordArray[Math.floor(Math.random() * getPasswordArray.length)]; 
                password += slot[Math.floor(Math.random() * slot.length)];
            }
            if(passwordValidation(password)) {
                resolve(password); 
                return
            }
            reject(`Error: ${password}`); 
        },1000)
    })
}
async function generateStrongPasswordAsyncAwait() {
    try {
        let password = await generateStrongPasswordAsync();
        console.log(password)
    } catch (error) {
        console.log(error)
    }
}

function generateStrongPasswordAsyncPromise() {
    generateStrongPasswordAsync()
        .then(pass => console.log(pass))
        .catch(e => console.log(e))
}


function passwordValidation(pass) {
    if(pass.length < 6) return false;
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(pass);
}

