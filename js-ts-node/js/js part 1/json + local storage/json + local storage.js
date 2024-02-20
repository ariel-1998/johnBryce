let books = [
    {
        "BookID":532,
        "BookName":'ariel',
        "BookAuthor":'kashani',
        "BookPrice":123
    },
    {
        "BookID":532,
        "BookName":'ariel',
        "BookAuthor":'kashani',
        "BookPrice":123
    },
    {
        "BookID":532,
        "BookName":'ariel',
        "BookAuthor":'kashani',
        "BookPrice":123
    }
]
let booksString = JSON.stringify(books)
alert(booksString)
let items = JSON.parse(booksString)

console.log(books , items)

for (const spot of items) {
    for (const key in spot) {
       document.write(`${key}: ${spot[key]} <br/>`)
    }
    document.write(`<br/>`)

}


//2

myCat = {
    "name":`cat`,
    "age":12,
    "color": `black`,
    "isSterile": true
}

let myCatString = JSON.stringify(myCat)

alert(myCatString)
let yourCat = JSON.parse(myCatString)

for (const key in yourCat) {
    document.write(`${key}: ${yourCat[key]} <br/>`)
}
console.log(myCat , yourCat)

//1

function localStorageSave(){
    const email = document.getElementById(`email`);
    const emailVal = email.value;
    window.localStorage.setItem(`mail` , emailVal)
}

function localStorageLoad(){
    let email = window.localStorage.getItem(`mail`);
    alert(email)
}

//2

function localStorageSave2(){
    const phone = document.getElementById(`phoneNumber`).value;
    window.localStorage.setItem(`number` , phone);
}

function localStorageLoad2(){
    let phone = window.localStorage.getItem(`number`);
    alert(phone)
}

//3

function localStorageSave3(){
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    window.localStorage.setItem(`firstName`, firstName);
    window.localStorage.setItem(`lastName`, lastName);
}

function localStorageLoad3(){
    let fullName = window.localStorage.getItem(`firstName`) + ` ` + window.localStorage.getItem(`lastName`) ;
    alert(fullName)
}

//4 - 5

function localStorageSave4(){
    const city = document.getElementById(`city`);
    const street = document.getElementById(`street`);
    const house = document.getElementById(`house`);
    const zip = document.getElementById(`zip`);

    const cityValid = document.getElementById(`cityValid`);
    const streetValid = document.getElementById(`streetValid`);
    const houseValid = document.getElementById(`houseValid`);
    const zipValid = document.getElementById(`zipValid`);
    
    if(!city.value){
        city.style.backgroundColor = `red`;
        cityValid.classList.add(`visible`)
    }else{
        city.style.backgroundColor = `revert`;
        cityValid.classList.remove(`visible`)
    }
    if(!street.value){
        street.style.backgroundColor = `red`;
        streetValid.classList.add(`visible`)
    }else{
        street.style.backgroundColor = `revert`;
        streetValid.classList.remove(`visible`)
    }
    if(!house.value){
        house.style.backgroundColor = `red`;
        houseValid.classList.add(`visible`)
    }else{
        house.style.backgroundColor = `revert`;
        houseValid.classList.remove(`visible`)
    }
    if(!zip.value){
        zip.style.backgroundColor = `red`;
        zipValid.classList.add(`visible`)
    }else{
        zip.style.backgroundColor = `revert`;
        zipValid.classList.remove(`visible`)
    }
    address = {
        city: city.value,
        street: street.value,
        house: house.value,
        zip: zip.value
    }
    window.localStorage.setItem(`address`, JSON.stringify(address));
}

function localStorageLoad4(){
    let address = window.localStorage.getItem(`address`);
    window.localStorage.setItem(`address`, JSON.parse(address))
}

//6

function colors(){
    const color = document.getElementById(`colors`).value;
    const body = document.getElementById(`body`);
    body.style.backgroundColor = color
    window.localStorage.setItem(`color`, color)
}

function bodyColor(){
    const body = document.getElementById(`body`)
    const color = window.localStorage.getItem(`color`)
    body.style.backgroundColor = color
}