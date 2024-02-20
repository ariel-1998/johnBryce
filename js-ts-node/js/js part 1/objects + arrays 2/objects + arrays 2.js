x=Number.parseInt(prompt(`choose a staring number`))
y=Number.parseInt(prompt(`choose your ending number`))
little=0
big=0
if(x>y)
{
    big=x
    little=y 
}
else
{
    big=y
    little=x
}
random=Number.parseInt(Math.random()*(big+1-little) +little )
document.write(`ranodom number between the chosen numbers: ${random} <br/>`) 


//2
randomArray=[]
sum=0
for(i=0; i<100; i++)
{
    random1=Number.parseInt(Math.random()*(big+1-little) +little )
    document.write(`${random1} | `)
    randomArray.push(`${random1} | `)
    sum= sum + random1

}

//3

document.write(`<br/>${randomArray}`)
avg=sum/100
document.write(`<br/>${avg}`)

//4

array=[]
sum1=0
max=0
dual=0
for(i=0; i<100; i++)
{
    random2=Number.parseInt(Math.random()*(500 +1-300) +300 )
    array.push(random2)
    sum1 = sum1 + random2
    if(array[i]>max)
    {
        max=array[i]
    }
    if(array[i]%2===0)
    {
        dual=dual + 1
    }
}
document.write(`<br/> ${sum1}`)

max1=0
sum2=0
dual1=0
for(line of array)
{
    sum2=sum2+line
    if(line> max1)
    {
        max1=line
    }
    if(line % 2 === 0)
    {
        dual1= dual1 + 1
    }
}

document.write(`<br/> ${sum2}`)

document.write(`<br/>max value for: ${max}`)

document.write(`<br/>max value for of: ${max1}`)

document.write(`<br/>dual numbers for: ${dual}`)

document.write(`<br/>max value for of: ${dual1}`)

//5

cars=[]
car1={
    model:` Tesla, 2020`,
    color: `black`,
    yearOfProduction:2021,
}
car2={
    model:` Mazda, 2018`,
    color: `grey`,
    yearOfProduction:2019,
}
car3={
    model:` audi, 2017`,
    color: `white`,
    yearOfProduction:2020,
}
cars.push(car1)
cars.push(car2)
cars.push(car3)


for(i=0; i<3; i++)
{
    document.write(`${cars[i].model} <br/>`)
    document.write(`${cars[i].color} <br/>`)
    document.write(`${cars[i].yearOfProduction} <br/>`)


}

for(key of cars)
{
    for(line in key)
    document.write(`${line}: ${key[line]} <br/>`)
}


//6

clothes=[
    clothing1={
        type:`pants`,
        color:`black`,
        price:`120$`,
        size: 28,
        
    },
    clothing2={
        type:`shirt`,
        color:`white`,
        price:`100$`,
        size: `s`,  
    },
    clothing3={
        type:`shoes`,
        color:`white`,
        price:`200$`,
        size: 41,  
    },
    clothing4={
        type:`hoodie`,
        color:`blue`,
        price:`110$`,
        size: `m`,  
    },
    clothing5={
        type:`socks`,
        color:`yellow`,
        price:`5$`,
        size: `40-45`,  
    },
]
for(object of clothes)
{
    for(key in object)
    {
        document.write(`${key}: ${object[key]} <br/>`)
    }
}

//7

geoLocation=[]
  
for(j=0; j<3; j++)
{
    latitude= prompt(`enter latitude`)
    longitude = prompt(`enter longitude`)
    geoLocation.push({latitude,longitude})
}
for(object of geoLocation)
{
    for(key in object)
    {
        document.write(`${key}: ${object[key]} <br/>`)
    }
}

//8

min5=100
max5=0
sum5=0
matrix=[[12,23,34,45],[56, 67, 78, 89], [10, 20, 30, 40]]
document.write(matrix)
for(array of matrix)
{
    for(line of array)
    {
        sum5= sum5 + line
        if(line> max5)
        {max5=line}

        if(line<min5)
        {min5= line}
    }
}
document.write(`<br/>${sum5}`)
document.write(`<br/>${sum5/12}`)
document.write(`<br/>${max5}`)
document.write(`<br/>${min5}`)

matrix2=[]
for(array of matrix)
{
    for(line of array)
    {
        if(line%2!=0)
        {matrix2.push(`x`)}
        else
        {matrix2.push(line)}
    }
}
document.write(matrix2)


dabel=[]
double=0;
document.write(`<div style= "display:grid; grid-template: repeat(10, 30px) / repeat(10, 30px)
; background-color:yellow ; width:300px ; margin:auto; border: 2px , solid , black ">`);

for(i=0; i<10; i++)
{   
    dabel.push([])

    for(j=0; j<10; j++)
{
    double= (i +1) * (j + 1)
    dabel[i].push(double)}
}


for(line of dabel)
{
    for(li of line)
    document.write(`<span style="border: 1px  solid black;">${li}</span>`)
}

document.write(`</div>`);
