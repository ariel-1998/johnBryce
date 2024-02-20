function powerOf3(event){
    const number = document.getElementById(`number`);
    event.preventDefault()
    if(!number.value){
    }
    else{
        alert(number.value ** 3)
        number.style.backgroundColor = `skyblue`

    }
}

//2
function sum(){
    const num1 = Number.parseInt(document.getElementById(`number1`).value);
    const num2 = Number.parseInt(document.getElementById(`number2`).value);
    const num3 = Number.parseInt(document.getElementById(`number3`).value);

    alert(summ(num1, num2, num3))
}

function avg(){
    const num1 = Number.parseInt(document.getElementById(`number1`).value);
    const num2 = Number.parseInt(document.getElementById(`number2`).value);
    const num3 = Number.parseInt(document.getElementById(`number3`).value);
    alert(summ(num1, num2, num3) / 3)
}

function summ(a,b,c){
    return a + b + c
}

//3
function colors(){
    const col = document.getElementById(`colors`)
    col.style.backgroundColor = randomColor()
}
function randomColor(){
    const color = [`red` , `green`, `blue`, `yellow`, `white`, `purple`];
    return color[random(1,color.length)]
}
function random(min, max){
    return Number.parseInt(Math.random() * (max - min) + min)
}

//4
function email(){
    const email = document.getElementById(`email`).value;
    const emailSpan = document.getElementById(`emailSpan`);
    if(!email){
        emailSpan.innerHTML = `fill the email box!`
        emailSpan.style.color = `red`
    }
    else{
        alert(email)
        emailSpan.innerHTML = ``

    }

}

//5
function fullName(){
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const span = document.getElementById(`validation`);
    if(!firstName || !lastName){
        span.innerHTML = `fill all the boxes!`
    }
    else{
        alert(`${firstName} ${lastName}`)
        span.innerHTML = ``

    }
}

//6
function email2(){
    const email = document.getElementById(`email2`);
    const emailSpan = document.getElementById(`emailSpan2`);
    if(!email.value){
        emailSpan.innerHTML = `fill the email box!`;
        emailSpan.style.color = `red`;
        email.style.backgroundColor = `red`;
    }
    else{
        alert(email.value)
        emailSpan.innerHTML = ``;
        email.style.backgroundColor = `revert`;

    }

}

//7
function fullName2(){
    const firstName = document.getElementById(`firstName2`);
    const lastName = document.getElementById(`lastName2`);
    const span = document.getElementById(`validation2`);
    if(!firstName.value){
        span.innerHTML = `fill all the boxes!`
        firstName.style.backgroundColor = `red`
    }
    else{
        span.innerHTML = ``
        firstName.style.backgroundColor = `revert`
    }
    if(!lastName.value){
        span.innerHTML = `fill all the boxes!`
        lastName.style.backgroundColor = `red`
    }
    else{
        span.innerHTML = ``
        lastName.style.backgroundColor = `revert`
    }
    if(firstName.value.length && lastName.value.length){
        alert(`${firstName.value} ${lastName.value}`)

    }
}

//8
function enter(event){
   if(event.srcElement.nodeName === `BUTTON`){
    event.srcElement.style.backgroundColor =`red`
    event.srcElement.style.color = `blue`;
   }
}

function leave(event){
    if(event.srcElement.nodeName === `BUTTON`){
        event.srcElement.style.backgroundColor = `green`;
        event.srcElement.style.color = `white`;
       }
}


//1
function randonCircle(){
    const canvas = document.getElementById(`canvas`);
    const painter = canvas.getContext(`2d`);
    let radius = random(5,50)
    let width = random(1,8)
    let y = random(radius + width, canvas.width - radius - width)
    let x = random(radius + width, canvas.width - radius - width)
    painter.beginPath();
    painter.arc(x, y, radius, 0, 2 * Math.PI);
    painter.lineWidth = width
    painter.strokeStyle = randomColors()
    painter.stroke();
}
function randomColors(){
    const color = [`red` , `green`, `blue`, `yellow`, `orange`, `purple`, `grey`, `blue`, `black`];
    return color[random(1,color.length)]
}

//2
function randonCircle2(){
    const canvas = document.getElementById(`canvas`);
    const painter = canvas.getContext(`2d`);

    for(let i = 0; i < 100; i++){
        let radius = random(5,50)
        let width = random(1,8)
        let y = random(radius + width, canvas.width - radius - width)
        let x = random(radius + width, canvas.width - radius - width)
        painter.beginPath();
        painter.arc(x, y, radius, 0, 2 * Math.PI);
        painter.lineWidth = width
        painter.stroke();
        painter.strokeStyle = randomColors()

    }
}

//3
function randomRectangle(){
    const canvas = document.getElementById("canvas");
    const painter = canvas.getContext("2d");

    let line = random(3, 10);
    let width = random(5, 30);
    let height = random(35, 60);
    let x = random(0,canvas.width - line)
    let y = random(0,canvas.width - line)
    painter.beginPath();
    painter.rect(x, y, width, height);
    painter.lineWidth = line
    painter.strokeStyle = randomColors()
    painter.stroke();
    
}

//4
function randomRectangle2(){
    const canvas = document.getElementById("canvas");
    const painter = canvas.getContext("2d");
    const Count = Number.parseInt(prompt(`choose a number`))

    for(let i = 0; i < Count; i++){
    let width = random(5, 30);
    let height = random(35, 60);
    let x = random(0,canvas.width - width)
    let y = random(0,canvas.width - height)
    let line = random(3, 10);

    painter.beginPath();
    painter.rect(x, y, width, height);
    painter.lineWidth = line
    painter.strokeStyle = randomColors()
    painter.stroke();
    }
}

//5 - 6
function create(){
    const canvas = document.getElementById("canvas");
    const painter = canvas.getContext("2d");
    const span = document.getElementById(`fillCheck`);

    const x = document.getElementById(`xx`);
    const y = document.getElementById(`yy`);
    const width = document.getElementById(`width`);
    const height =document.getElementById(`height`);
    const color = document.getElementById(`select`);

    if(!x.value){
        x.style.backgroundColor = `red`
        span.classList.add(`visible`)

    }
    else{
        x.style.backgroundColor = `revert`
    }
    if(!y.value){
        y.style.backgroundColor = `red`
        span.classList.add(`visible`)

    }
    else{
        y.style.backgroundColor = `revert`
    }
    if(!width.value){
        width.style.backgroundColor = `red`
        span.classList.add(`visible`)

    }
    else{
        width.style.backgroundColor = `revert`

    }
    if(!height.value){
        height.style.backgroundColor = `red`
        span.classList.add(`visible`)

    }
    else{
        height.style.backgroundColor = `revert`
    }
    if(!color.value){
        color.style.backgroundColor = `red`
        span.classList.add(`visible`)

    }
    else{
        color.style.backgroundColor = `revert`
    }
    if(x.value.length > 0 && y.value.length > 0 && width.value.length > 0 && height.value.length > 0 && !!color.value ){
    span.classList.remove(`visible`)
    
    painter.beginPath();
    painter.rect(x.value, y.value, width.value, height.value);
    painter.strokeStyle = color.value
    painter.stroke();
    }
}