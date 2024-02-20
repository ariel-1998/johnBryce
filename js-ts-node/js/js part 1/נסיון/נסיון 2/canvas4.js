const canvas = document.getElementById(`canvas`);
const painter = canvas.getContext(`2d`);
let x = 50;
let y = 50
let width = 150;
let height = 100

function square(dx, dy){
    x = x + dx
    y = y + dy
    painter.clearRect(0, 0, canvas.width, canvas.height)

    x = Math.min(x, canvas.width - width);
    x = Math.max(x, 0);

    y = Math.min(y, canvas.height - height);
    y = Math.max(y, 0);

    painter.beginPath();
    painter.rect(x, y, width, height);
    painter.stroke();



}

