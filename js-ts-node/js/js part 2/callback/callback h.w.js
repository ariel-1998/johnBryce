function name1(name) {
  document.write(name);
}

function callbackName(myName, cb) {
  cb(myName);
}

callbackName(`ariel`, name1);
document.write(`<br/>`);

callbackName(`ariel`, function (a) {
  document.write(a);
});
document.write(`<br/>`);

callbackName(`ariel`, (a) => document.write(a));
document.write(`<br/>`);

//2

function randomNum(max) {
  let num = Math.random() * max;
  document.write(num);
}

function cool(num, cb) {
  cb(num);
}

cool(30, randomNum);
document.write(`<br/>`);

cool(30, function (max) {
  let num = Math.random() * max;
  document.write(num);
});
document.write(`<br/>`);

cool(60, (random) => document.write(Math.random() * random));
document.write(`<br/>`);

//3
function printNum(a) {
  document.write(a);
}

function nice(callback) {
  callback(42);
}

nice(printNum);
document.write(`<br/>`);

nice(function (num) {
  document.write(num);
});
document.write(`<br/>`);

nice((num) => document.write(num));
document.write(`<br/>`);

//4
function randomArrayNum(a, b, c, d, e) {
  let arrayNum = [a, b, c, d, e];
  let num = Number.parseInt(Math.random() * arrayNum.length);
  return arrayNum[num];
}

function amazing(callback) {
  const num = callback(42, 128, 37, 81, 66);
  document.write(`Num:` + num);
}

amazing(randomArrayNum);
document.write(`<br/>`);

amazing(function (a, b, c, d, e) {
  let arrayNum = [a, b, c, d, e];
  let num = Number.parseInt(Math.random() * arrayNum.length);
  return arrayNum[num];
});
document.write(`<br/>`);

amazing((a, b, c, d, e) => {
  let arrayNum = [a, b, c, d, e];
  let num = Number.parseInt(Math.random() * arrayNum.length);
  return arrayNum[num];
});
document.write(`<br/>`);

//5
function arrayColors() {
  let colors = [`red`, `yellow`, `green`, `purple`];
  let color = Number.parseInt(Math.random() * colors.length);
  document.body.style.background = colors[color];
}
function paint(paintCb) {
  paintCb();
}

paint(arrayColors);

paint(function () {
  let colors = [`red`, `yellow`, `green`, `purple`];
  let color = Number.parseInt(Math.random() * colors.length);
  document.body.style.background = colors[color];
});

paint(() => arrayColors());

//6
function paintBG(color) {
  document.body.style.background = color;
}
function cbPaintBG(paintCallback) {
  paintCallback(`Green`);
}

cbPaintBG(paintBG);

cbPaintBG(function (color) {
  paintBG(color);
});

cbPaintBG((col) => paintBG(col));

//7
function colorFun(a, b, c) {
  let colors = [a, b, c];
  let num = Number.parseInt(Math.random() * colors.length);
  return (document.body.style.background = colors[num]);
}

function bGcol(paintCallback) {
  const paintedColor = paintCallback(`Red`, `Green`, `Blue`);
  document.write(`Painted Color: ` + paintedColor);
}

bGcol(colorFun);
document.write(`<br/>`);

bGcol(function (a, b, c) {
  colorFun(a, b, c);
});
document.write(`<br/>`);

bGcol((a, b, c) => {
  colorFun(a, b, c);
});
document.write(`<br/>`);

//8
function writeRandomNum() {
  let a = Number.parseInt(Math.random() * 100);
  document.write(a);
}

function writeEverySecond(callback) {
  setInterval(callback(), 1000);
}

writeEverySecond(writeRandomNum);
document.write(`<br/>`);

writeEverySecond(function () {
  writeRandomNum();
});
document.write(`<br/>`);

writeEverySecond(() => writeRandomNum());
document.write(`<br/>`);

//9
function numForColors() {
  return Number.parseInt((Math.random() * 256) << 0).toString();
}

function backgroundColor(callback) {
  document.body.style.backgroundColor = `rgb(${numForColors()},${numForColors()},${numForColors()})`;
}

setInterval(backgroundColor, 1000);

//10
function writeHundredRandomNumbers() {
  setInterval(() => {
    for (let i = 0; i < 100; i++) {
      document.write(numForColors() + ` | `);
    }
  }, 3000);
}
writeHundredRandomNumbers();
