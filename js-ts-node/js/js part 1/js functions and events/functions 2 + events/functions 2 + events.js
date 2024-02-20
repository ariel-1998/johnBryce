function array(arr){
    let min = arr[0]
    for(const key of arr){
        if(key < min){
            min = key
        }
    }
    return min;
}
document.write(`${array([0,3,4,1,6])}<br/>${array([40,63,84,11,66])}<br/>${array([3,5,6,8,9,1])}<br/>`)

//2
function strings(stringArr){
    let length = 0
    for(const key of stringArr){
        if(key.length > length){
            length = key.length
        }
    }
    return length;
}
document.write(`${strings([`arrrr`,`aaaaaaa`])}<br/> ${strings([`arrrrafag`,`aaaaaaa`])}<br/>${strings([`arrrr45648`,`aaaaaaa`])}<br/>`)

3
function string(strin){
    let length = 0
    let stringLength = '';
    for(const key of strin){
        if(key.length > length){
            length = key.length
            stringLength = key
        }
    }
    return stringLength;
}

function string5(a){
    document.write(`${string(a)}<br/>`)
}
string5([`arrrr`,`aaaaaaa`])
string5([`arrlksnrr`,`aaaaaaa`])
string5([`arrsdoglnrr`,`aaaaakgk`])

//4
function keyAvg(keyy){
    let sum = 0
    let avg = 0
    for(const key of keyy){
        sum += key
    }
    avg = sum / keyy.length;
return avg;
}

function aboveAvg(keyy){
    let aAvg = 0
    for(const key2 of keyy){
        if(key2 >= keyAvg(keyy)){
            aAvg++
        }
    }
    return aAvg;
}
document.write(`${aboveAvg([5,82,60,15])}<br/>${aboveAvg([56,82,100,65,12])}<br/>${aboveAvg([5,3,2,0])}<br/>`)

//5
function minIndex(array){
    let min = array[0];
    let index = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            index = i
        }
    }
    return index;
}
document.write(`${minIndex([5,82,60,15])}<br/>${minIndex([56,82,100,65,12])}<br/>${minIndex([5,3,2,0])}<br/>`)

//6
function matrixMax(array){
    let max = 0
    for (const key of array) {
        for (const line of key) {
            if(line > max){
                max = line
            }
            
        }
    }
    return max;
}
document.write(`${matrixMax([[1,5,6,8,100],[56,9,2,66,5]])}<br/>`)

//7
function matrixAvg(mat){
    let sum = 0
    let keys = 0
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            sum += mat[i][j];
            keys ++;
        }
    }
    return sum / keys;
}
document.write(`${matrixAvg([[1,5,6,8,100],[56,0,2,66,5]])}<br/>`)

//8
function prime(num){
    if(num === 2){
        return true;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
        return true;
    }
document.write(`${prime(9)}<br/>`)

//9
function primeArr(array){
    for (const key of array) {
        if(!prime(key)){
            return false;
        }
    }
    return true;
}
document.write(`${primeArr([3,3,9])}<br/>`)

//10
function random(min,max){
    let random = Number.parseInt(Math.random()*(max - min + 1) + min)
    return random;
}
document.write(`${random(5,10)}<br/>`)

//11
function randomArray(array){
    let arr = []
    for(let i = 0; i < array; i++){
        arr.push(random(1,100))
    }
    return arr;
}
document.write(`${randomArray(6)}<br/>${randomArray(9)}<br/>${randomArray(3)}<br/>`)


//1
function getMax(a,b){
   return a > b ? a : b;
}

function testMax(){
    let num1 = +prompt(`choose a number 1/2`)
    let num2 = +prompt(`choose a number 2/2`)
    alert(getMax(num1, num2))
}

//2
function printSquare(num){
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            document.write(`*`)
        }
        document.write(`<br/>`)
    }
}
function testSquare(){
    let x = +prompt(`choose a number`)
    printSquare(`${x}`)
}

//3
function rectangle(width,height){
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            rectangleIfs(width,height ,i ,j)
        }
        document.write(`<br/>`)
    }
}
function rectangleIfs(width,height , i, j){
    if(i === 0 || i === height - 1){
        document.write(`*`)
    }
    else if(j === 0 || j === width - 1){
        document.write(`*`)
    }else{
        document.write(`&nbsp&nbsp`)
    }
}
function printrectangle(){
    let width = +prompt(`choose your width`)
    let height = +prompt(`choose your width`)
    rectangle(width,height)
}

//4
function randomWIdthHEight(){
    let a = Number.parseInt(Math.random()* (20 - 5 + 1) + 5)
    return a;
}
function printRandomRectangle(){
    let width = randomWIdthHEight();
    let height = randomWIdthHEight();
    rectangle(width,height)
}

//5
function add(){
    let num1 = +prompt(`coose 1/2 numbers to add`)
    let num2 = +prompt(`coose 2/2 numbers to add`)
    alert(`the sum is ${num1 + num2}`)
}

function minus(){
    let num1 = +prompt(`coose 1/2 numbers to add`)
    let num2 = +prompt(`coose 2/2 numbers to add`)
    alert(`${num1} - ${num2} = ${num1 - num2}`)
}

function multiply(){
    let num1 = +prompt(`coose 1/2 numbers to add`)
    let num2 = +prompt(`coose 2/2 numbers to add`)
    alert(`${num1} * ${num2} = ${num1 * num2}`)
}

function divide(){
    let num1 = +prompt(`coose 1/2 numbers to add`)
    let num2 = +prompt(`coose 2/2 numbers to add`)
    alert(`${num1} / ${num2} = ${num1 / num2}`)
}

//6
function minNumToMaxNum(num1, num2){
    for(let i = num1; i <= num2; i++){
        document.write(`${i}, `)
    }
}

function printFromMinToMax(){
    let num1 = +prompt(`choose a number`)
    let num2 = +prompt(`choose a number`)
    if(num1 < num2){
        minNumToMaxNum(num1, num2)
    }
        else{minNumToMaxNum(num2, num1)
        }
        document.write(`<br/>`)
}

//7
function annoying(){
    alert(`continue writing`)
}

//8
function time(){
    const watch = new Date()
    alert(`${watch.getHours()}:${watch.getMinutes()}:${watch.getSeconds()}`)

}