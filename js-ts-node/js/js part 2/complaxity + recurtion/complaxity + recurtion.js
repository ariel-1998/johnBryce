const map = new Map([[`111`, { id: `111`, firstName: `Bart`, lastName: `Simpson` }],
    [`222`, {id: `222`, firstName: `first second`, lastName: `last second` }],
    [`333`, {id: `333`, firstName: `first third`, lastName: `last third` }],
    [`444`, {id: `444`, firstName: `first fourth`, lastName: `last fourth` }],
    [`555`, {id: `555`, firstName: `first fifth`, lastName: `last fifth` }]]);

const mapKeys = map.keys();
for(i = 0; i < 5; i++) {
    let val = mapKeys.next().value
    console.log(val);
    console.log(map.get(val));
}


function ids() {   //O(1)
    const identity = document.getElementById(`id`).value;
    for(i = 0; i < 5; i++) {    
        if(map.get(identity)) {
            let a = map.get(identity);
            const{id, firstName, lastName} = a;
            console.log(id, firstName, lastName, a);
            return;
        }
    }
    alert(`not found`);
}

//2
const strings = [`ariel`, `bibi`, `meyrav`, `michael`, `daniel`, `asaf`, `raziel`];
strings.sort();
console.log(strings)

function searchSortedArrays(arr, item) {
    let start = -1;
    let end = arr.length;
    do {
        if (start >= end) return -1;
        let middle = Math.floor((start + end) / 2);
        if(item > arr[middle]) {
            start = middle + 1;
        } else if (item < arr[middle]) {
            end = middle - 1;
        } else{
            return middle;
        }


    } while (true);
}

function searchNameInArray() { //O(log n)
    const name = document.getElementById(`name`).value;
    let num = searchSortedArrays(strings, name);
    if(num === -1) {
        alert(`not found`);
    } else {
        alert(num);
    }
}

//3
const matrix = []

for (let i = 0; i < 10; i++) {
    matrix[i] = [];
    for(let j = 0; j < 10; j++) {
        let num = Number.parseInt(Math.random() * 101);
        matrix[i][j] = num;
    }
}

function matrixAvg(matrix = [[]]) { //O(n^2)
    let sum = 0;
    let counter = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
            counter++;
        }
    }
    return sum / counter;
}

console.log(matrixAvg(matrix));

//recursion
//1

function printSmiley(n) {
    if(n === 0) return;
    console.log(`:-)`)
    printSmiley(n - 1)
}

printSmiley(5);

//2
function printFromNToOne(n) {
    if(n === 0) return;
    console.log(n);
    printFromNToOne(n - 1);
}
printFromNToOne(6);

//3
function printPairsFromOneToN(n) {
    if(n === 0) return;
    if(n % 2 === 0) {
        console.log(n);
    }
    printPairsFromOneToN(n - 1);
}

printPairsFromOneToN(10);

//4
let sum = 0
function sumFromOneToN(n) {
    if(n === 0)return document.write(sum);
    sum += n;
    sumFromOneToN(n - 1);
}

sumFromOneToN(10);

//5
let assembly = 1;
function assemblyOfN(n) {
    if(n === 0)return document.write(assembly);
    assembly *= n;
    assemblyOfN(n - 1)
}

assemblyOfN(3);

//6
function printFromOneToN(n) {
    if(n === 0) return;
    printFromOneToN(n - 1);
    console.log(n)
}

printFromOneToN(12)