

function time() {
    let date = new Date()
    document.write(`start <br/>`);
    document.write(`${date}<br/>`);
    document.write(`end<br/>`);
}
document.write(`answer 1<br/>`)
time();


//2
function timeDelayed() {
    document.body.innerHTML += `start <br/>`;
    setTimeout(() => {
    let date = new Date()
    document.body.innerHTML += `${date}<br/>`;
    },3000)
    document.body.innerHTML +=`end <br/>`;
}

//3
function timeDelayed2() {
    let date = new Date()
    document.body.innerHTML +=`start <br/>`;
    setTimeout(() => {
    document.body.innerHTML += `${date}<br/>`;
    },3000)
    document.body.innerHTML +=`end <br/>`;
}

//4
function printRandomNum(){
    document.body.innerHTML += Number.parseInt(Math.random() * 101) +`<br/>`;
}

function delayed() {
    document.body.innerHTML += `start<br/>`;
    setTimeout(printRandomNum, 3000);
    setTimeout(printRandomNum, 5000);
    setTimeout(printRandomNum, 7000);
    document.body.innerHTML += `end<br/>`;
}

//5


function randNumLimit(max) {
    return Number.parseInt(Math.random()* max )
}

function randomFromText() {
    const div = document.querySelector(`#div`);
    const txt = document.querySelector(`#text`);
    setInterval(() => {
        let txtVal = Number.parseInt(txt.value)
        let num = randNumLimit(txtVal);
        div.innerText = num
    } ,1000);
}

//6
function randomNumForColors() {
    return Number.parseInt(Math.random() * 256).toString();
}

function randomColor() {
    document.body.style.backgroundColor = `rgb(${randomNumForColors()}, ${randomNumForColors()}, ${randomNumForColors()})`
}

function intervalBodyBgColor(){
    setInterval(randomColor, 1000)
}
// intervalBodyBgColor()

//7
function answer7() {
    document.body.style.backgroundColor = "Green";
    alert("the reason alert is happening before is, the HTML will not load before the popup windows so it is delayed");
    
}

function answer7Solution() {
    document.body.style.backgroundColor = "Green";
    setTimeout(() => alert(`done`), 3000)
}

//8
function randNum() {
  
    return Number.parseInt(Math.random() * 101)
    
}

function printrandNum(cb) {
    setTimeout(() =>
    document.body.innerHTML += cb()
    ,10)
}

//9
function randNum2(limit) {
    return Number.parseInt(Math.random() * limit)
}

function printrandNum2(cb,a) {
    setTimeout(() =>
    document.body.innerHTML += cb(a)
    ,5000)
}

//10

function randNum3(min, max) {
    return Number.parseInt(Math.random()* (max - min) + min)
}

function printrandNum3(cb,a,b) {
    setTimeout(() =>
    document.body.innerHTML += cb(a, b)
    ,5000)
}

//11
function evenRandNum(min, max) {
    let num = Number.parseInt(Math.random()* (max - min) + min)
    while(num % 2 !== 0){
        num = Number.parseInt(Math.random()* (max - min) + min)
    }
    return num
}

function printEvenRandNum(cb,a,b) {
    setTimeout(() =>
    document.body.innerHTML += cb(a, b)
    ,5000)
}

//12
function getUserFromServer(cb) {       
    setTimeout(() => {
    const user = { firstName: "Moishe",  lastName: "Ufnik"  } 
    cb(user)
    }, 4000); 
}