/// <reference path="jquery-3.6.1.min.js"/>

//1
function ajaxPromisify(url,object = {}) {
    return new Promise((resolve, reject) => {
        $.ajax(url, {
            ...object,
            success: resolve,
            error: reject,
            dataType: `json`,
            contentType: `application/json`
        })
    })
}
function getUsersAjax() {
    ajaxPromisify('https://jsonplaceholder.typicode.com/users', {
        method: `GET`,
    }).then((res) => {
        const table = document.createElement(`table`);

    for (const {name, username, email, phone, address: {city, street, zipcode}, company: {name: cname}} of res) {
        const row = document.createElement(`tr`);
        const td1 = document.createElement(`td`);
        const td2 = document.createElement(`td`);
        const td3 = document.createElement(`td`);
        const td4 = document.createElement(`td`);
        const td5 = document.createElement(`td`);
        const td6 = document.createElement(`td`);
        const td7 = document.createElement(`td`);
        const td8 = document.createElement(`td`);
        
        td1.innerText = name;
        td2.innerText = username;
        td3.innerText = email;
        td4.innerText = phone;
        td5.innerText = city;
        td6.innerText = street;
        td7.innerText = zipcode;
        td8.innerText = cname;

        
        row.append(td1, td2, td3, td4, td5, td6, td7, td8);
        table.append(row)

    }
    document.body.append(table)
    // console.log(res)
    })
}

//2
function getUsersByIdAjax() {
    const user = document.getElementById(`user-id`).value;
    ajaxPromisify(`https://jsonplaceholder.typicode.com/users/${user}`, {
        method: `GET`,
    }).then(res => {
        const {name, username, email, phone, address: {city, street, zipcode}, company: {name: cname}} = res;
        const printName = document.createElement(`p`);
        const printUserName = document.createElement(`p`);
        const printEmail = document.createElement(`p`);
        const printPhone = document.createElement(`p`);
        const printCity = document.createElement(`p`);
        const printStreet = document.createElement(`p`);
        const printZipcode = document.createElement(`p`);
        const printCName = document.createElement(`p`);

        printName.innerText = `name: ` + name;
        printUserName.innerText = `username: ` + username;
        printEmail.innerText = `email: ` + email;
        printPhone.innerText = `phone: ` + phone;
        printCity.innerText = `city ` + city;
        printStreet.innerText = `street: ` + street;
        printZipcode.innerText = `zipcode: ` + zipcode;
        printCName.innerText = `cname: ` + cname;

        document.body.append(printName, printUserName, printEmail, printPhone, printCity, printStreet, printZipcode, printCName);
    })
}
//3

function getUsersToSelectByAjax() {
    ajaxPromisify(`https://jsonplaceholder.typicode.com/users/`, {
        method: `GET`,
    }).then(results => {
        const select = document.createElement(`select`);
        for (const key of results) {
            const option = document.createElement(`option`);
            option.innerText = key.name;
            option.value = key.id;
            select.append(option)
        }
        document.body.append(select)
        const div = document.createElement(`div`);

        select.addEventListener(`change`, e =>{
        const optVal = e.target.value;
        ajaxPromisify(`https://jsonplaceholder.typicode.com/users/${optVal}`, {
        method: `GET`,
        }).then(res => {
        const {name, username, email, phone, address: {city, street, zipcode}, company: {name: cname}} = res;
        clearElement(div); 
        const printName = document.createElement(`p`);
        const printUserName = document.createElement(`p`);
        const printEmail = document.createElement(`p`);
        const printPhone = document.createElement(`p`);
        const printCity = document.createElement(`p`);
        const printStreet = document.createElement(`p`);
        const printZipcode = document.createElement(`p`);
        const printCName = document.createElement(`p`);

        printName.innerText = `name: ` + name;
        printUserName.innerText = `username: ` + username;
        printEmail.innerText = `email: ` + email;
        printPhone.innerText = `phone: ` + phone;
        printCity.innerText = `city ` + city;
        printStreet.innerText = `street: ` + street;
        printZipcode.innerText = `zipcode: ` + zipcode;
        printCName.innerText = `cname: ` + cname;
        
        div.append(printName, printUserName, printEmail, printPhone, printCity, printStreet, printZipcode, printCName);
        document.body.append(div)
        })
        })
    })
}

function clearElement(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
getUsersToSelectByAjax();

//4
function getPhotosByAjax() {
    ajaxPromisify(`https://jsonplaceholder.typicode.com/photos`, {
        method: `GET`,
    }).then(res => {
        console.log(res)
        const table = document.createElement(`table`);
        for(let i = 0; i < 100; i++) {
            const tr = document.createElement(`tr`);
            const albumId = document.createElement(`td`);
            const id = document.createElement(`td`);
            const title = document.createElement(`td`);
            const thumbnailUrl = document.createElement(`td`);
            const img = document.createElement(`img`);

            albumId.innerText = res[i].albumId;
            id.innerText = res[i].id;
            title.innerText = res[i].title;
            img.src = res[i].thumbnailUrl;

            thumbnailUrl.append(img);
            tr.append(albumId, id, title, thumbnailUrl);
            table.append(tr);
        }
        document.body.append(table)
    })
}

function getApiUsers() {
    ajaxPromisify(`https://reqres.in/api/users`, {
        method: `GET`,
    }).then(res => {
        console.log(res);
        const data = res.data
        const table = document.createElement(`table`)
        for (const {first_name, last_name, email, avatar} of data) {
            const tr = document.createElement(`tr`);
            const firstName = document.createElement(`td`);
            const lastName = document.createElement(`td`);
            const emailTd = document.createElement(`td`);
            const avatarTd = document.createElement(`td`);
            const img = document.createElement(`img`);

            firstName.innerText = first_name;
            lastName.innerText = last_name;
            emailTd.innerText = email;
            img.src = avatar;
            avatarTd.append(img);
            tr.append(firstName, lastName, emailTd, avatarTd);
            table.append(tr)
        }
        document.body.append(table)
    })
}

//

document.getElementById(`city`).addEventListener(`change`, (e) => {
    ajaxPromisify(`http://api.weatherstack.com/current?access_key=0d1b6a7ea7e0412c648372c914a09a14&query=${e.target.value}`, {
        method: `GET`
    }).then(results => console.log(results))
})