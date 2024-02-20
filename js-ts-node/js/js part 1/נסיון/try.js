// document.write(`<div class="grid">`)

// const array = []

// for( let i = 0; i< 10; i++){
//     array.push([])
//     for(let j = 0; j < 10; j++){
//         array[i].push((i + 1) * (j + 1))
//         ifs(i, j)
//     }
// }
// document.write(`</div>`)


// function ifs(i, j){
//     if(i === 0 || j ===0){
//         document.write(`<span class="green">${array[i][j]}</span>`)

//     }else{
//         document.write(`<span>${array[i][j]}</span>`)

//     }
// }

// function random(min, max){
//     return Number.parseInt(Math.random() * (max - min) +min)
// }


const canvas = document.getElementById(`canvas`);
const painter = canvas.getContext(`2d`);
let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 50;

function move(dx, dy){
    x = x + dx;
    y = y + dy;
    borders()
    drawCircle()

}

function drawCircle(){
    painter.clearRect(0 ,0 ,canvas.width, canvas.height)
    painter.beginPath();
    painter.arc(x, y, radius, 0, 2 * Math.PI);
    painter.stroke()
}

function borders(){
    x = Math.min(x, canvas.width - radius);
    y = Math.min(y, canvas.height - radius);

    x = Math.max(x, radius)
    y = Math.max(y, radius)


}