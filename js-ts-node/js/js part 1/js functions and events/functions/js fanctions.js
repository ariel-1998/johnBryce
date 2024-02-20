function mtgr(){
    document.write(`make things go right <br/>`)
}
mtgr();
mtgr();
mtgr();

//2
function fn(){
    document.write(`ariel kashani <br/>`)
}
for(let i=0; i<100; i++){
    fn()
}

//3
function string(n){
    for(let i=0; i<10; i++){
        document.write(`${n} <br/>`)

    }
}
string('david');
string(prompt('write a string'));

// 4
function stringNum(a,b){
    for(let i=0; i<a; i++){
        document.write(`${b}<br/>`)
    }
}
stringNum(4,`hello`);
stringNum(prompt(`choose a number`),prompt(`choose a string`));

//5
function avg(a,b,c){
    document.write(`the avg is: ${Number.parseInt((a+b+c)/3)}<br/>`)
}
avg(4,5,2);
avg(+prompt(`choose a number 1/3`),+prompt(`choose a number 2/3`),+prompt(`choose a number 3/3`));
avg(Math.random()*100,Math.random()*100,Math.random()*100);

//6
function max(a,b,c){
    let max=0
    if(a>b && a>c){
        max=a
    }else if(b>a && b>c){
        max=b
    }else{
        max=c
    }
    document.write(`the max number is: ${max}<br/>`)
}
max(3,9,5);
max(+prompt(`choose a number 1/3`),+prompt(`choose a number 2/3`),+prompt(`choose a number 3/3`));
max(Math.random()*100,Math.random()*100,Math.random()*100);

// 7
function smily(a){
    if(a===1){document.write(`:-(<br/>`)}
    else if(a===2){document.write(`)-:<br/>`)}
    else if(a===3){document.write(`/-:<br/>`)}
    else if(a===4){document.write(`(-;<br/>`)}
    else if(a===5){document.write(`)-;<br/>`)}
}
smily(1);
smily(+prompt(`choose a number between 1 and 5`));
smily(Number.parseInt(Math.random()*5 + 1));

function allSmily(){
    for(let i=1; i< 6; i++){
        smily(a)
    }
}
allSmily();

function hundredSmily(){
    for(let i=0; i<100; i++){
        let b= Number.parseInt(Math.random()*5 + 1)
        smily(b)
    }
}
hundredSmily();

//8
function time(){
    const d = new Date();
    document.write(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
}
time();

//9
function array(arr){
    document.write(`${arr}<br/>`)
}
array([1,2,3,4,5]);
array([Number.parseInt(Math.random()*10),Number.parseInt(Math.random()*10),Number.parseInt(Math.random()*10)]);

//10
function array2(arr2){
    let sum= 0
    for(let i=0; i<arr2.length; i++)
    {
        sum= sum + arr2[i]
    }
    document.write(`the avg of the array is: ${sum / arr2.length}<br/>`)
}
array2([1,2,3,4,5]);
array2([Number.parseInt(Math.random()*10),Number.parseInt(Math.random()*10),Number.parseInt(Math.random()*10)]);

//11
function random(start,end){
    let range = Number.parseInt(Math.random()*(end-start +1) +start)
    document.write(`the random number between ${start} and ${end} is: ${range}<br/>`)
}
random(1,5);
random(+prompt(`choose your starting number`),+prompt(`choose your ending range number`));

function random1(start,end){
    let range = Number.parseInt(Math.random()*(end-start) +start )
    document.write(`the random number between ${start} and ${end} is: ${range}<br/>`)
}

function hundredRandom(end,start){
    for(let i=0; i<100; i++){
        random1(start,end)
    }
}
hundredRandom(-10,10);

//12
function check(i,j,height,width){
    if(i===0 || i===height-1){
        document.write(`*`)
    }

    else if(j===0 || j==width-1 ){
        document.write(`*`)
    } 
    else{
        document.write(`&nbsp&nbsp`)

    }
}

function tri(height,width){
        for(let i=0; i<height; i++){
            for(let j=0; j<width; j++){
               check(i,j,height,width)
            }
            document.write(`<br/>`)
        }
    }
    tri(4,8);
    tri(Number.parseInt(Math.random()*10),Number.parseInt(Math.random()*10));
    tri(+prompt(`choose a number`),+prompt(`choose a number`));

//13
function printline(n){
    for(let i=1; i<=n; i++){
        document.write(i)
    }
    for(let j=n-1; j>=1; j--){
        document.write(j)
    }
}
function profit(n,i){
    for(let j=1; j<=n-i; j++){
        document.write(`&nbsp&nbsp`)

    }
}
function printRows(n){
    for(let i=1; i<=n; i++){
        profit(n,i)
        printline(i)
        document.write(`<br/>`)
    }
}


printRows(+prompt(`choose a number`))
