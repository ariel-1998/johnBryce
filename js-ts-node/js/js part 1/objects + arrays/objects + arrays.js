//1

rectangle = {
  width: 10,
  height: 20,
  color: "white",
  axisX: 5,
  axisY: 2,
};
document.write("width: " + rectangle.width + "<br/>");
document.write("height: " + rectangle.height + "<br/>");
document.write("color: " + rectangle.color + "<br/>");
document.write("axisX: " + rectangle.axisX + "<br/>");
document.write("axisY: " + rectangle.axisY + "<br/>");
for (key in rectangle) {
  document.write(key + " : " + rectangle[key] + "<br/>");
}

//2

employee = {
  firstName: "ariel",
  lastName: "kashani",
  salary: 7000,
  email: "aaa@aa.com",
  phoneNumber: "052-5645646",
};
document.write("first name: " + employee.firstName + "<br/>");
document.write("last name: " + employee.lasstName + "<br/>");
document.write("salary: " + employee.salary + "<br/>");
document.write("email: " + employee.email + "<br/>");
document.write("phone number: " + employee.phoneNumber + "<br/>");
for (key in employee) {
  document.write(key + " : " + employee[key] + "<br/>");
}

//3

shirt = {
  manufacturer: "tommy hilfiger",
  size: "s",
  color: "white",
  price: 130,
};
document.write("manufacturer: " + shirt.manufacturer + "<br/>");
document.write("size: " + shirt.size + "<br/>");
document.write("color: " + shirt.color + "<br/>");
document.write("price: " + shirt.price + "<br/>");
for (key in shirt) {
  document.write(key + " : " + shirt[key] + "<br/>");
}

pants = {
  manufacturer: prompt("choose a manufacturer"),
  size: prompt("choose your size"),
  color: prompt("choose a color"),
  price: prompt("choose the price you want to pay"),
};
document.write("manufacturer: " + pants.manufacturer + "<br/>");
document.write("size: " + pants.size + "<br/>");
document.write("color: " + pants.color + "<br/>");
document.write("price: " + pants.price + "<br/>");
for (key in pants) {
  document.write(key + " : " + pants[key] + "<br/>");
}

//4

costumer = {
  firstName: "ariel",
  lastName: "kashani",
  email: "aaa@aa.com",
  phoneNumber: "0505566654",
  credit: {
    creditType: "isracard",
    cardNumber: "1234567890123456",
    cardValidity: "08/2024",
    cvv: "123",
  },
};
document.write("first name: " + costumer.firstName + "<br/>");
document.write("last name: " + costumer.lastName + "<br/>");
document.write("email: " + costumer.email + "<br/>");
document.write("phone number: " + costumer.phoneNumber + "<br/>");
document.write(
  "credit card:<br/> credit type: " + costumer.credit.creditType + "<br/>"
);
document.write("card number: " + costumer.credit.cardNumber + "<br/>");
document.write("card validity: " + costumer.credit.cardValidity + "<br/>");
document.write("card cvv: " + costumer.credit.cvv + "<br/>");

for (key in costumer) {
  document.write(key + ": " + costumer[key] + "<br/>");
}
for (key in costumer.credit) {
  document.write(key + ": " + costumer.credit[key] + "<br/>");
}

//arrays

// //1

names = [];
for (i = 0; i < 5; i++) {
  names[i] = prompt("choose a name");
}

document.write(names[0] + ", " + names[4] + "<br/> ");

document.write(names[0] + "<br/> " + names[4] + "<br/> ");

for (a = 4; a >= 0; a--) {
  document.write(names[a] + " ");
}

//2

grades = [];
grades2 = [];
for (i = 0; i < 10; i++) {
  x = Number.parseInt(prompt("enter your grade"));
  grades.push(Number.parseInt(x));
  if (x > 100 || x < 0) {
    grades2.push(Number.parseInt(x));
  }
}

if (grades2.length > 0) {
  document.write(`these are the incorrect grades you have entered: ${grades2}`);
} else {
  document.write(`all grades are good`);
}

//3 א

numbers = [];
for (i = 0; i < 100; i++) {
  num = Number.parseInt(Math.random() * 100 + 1);
  numbers.push(num);
}
for (key of numbers) {
  document.write(`${key} | `);
}

//3 ב

for (i = 99; i >= 0; i--) {
  document.write(`${numbers[i]}, `);
}

//3 ג

sum = 0;
for (i = 0; i < 100; i++) {
  sum = numbers[i] + sum;
}
document.write(`<br/> ${sum}`);

//3 ד

avg = sum / 100;
document.write(`<br> ${avg} <br/>`);

//3 ה

nmbr = 0;
for (i = 0; i < 100; i++) {
  if (numbers[i] > nmbr) {
    nmbr = numbers[i];
  }
}
document.write(`<br/>${nmbr} <br/>`);

//3 ו

number = 100;
for (i = 0; i < 100; i++) {
  if (numbers[i] < number) {
    number = numbers[i];
  }
}
document.write(`${number} <br/>`);

//3 ז

document.write(numbers.indexOf(nmbr));

//3 ח

document.write(`<br/>${numbers.indexOf(number)} <br/>`);

//3 ט

havg = 0;
for (i = 0; i < 100; i++) {
  if (numbers[i] > sum / 100) {
    havg = havg + 1;
  }
}
document.write(` above avg ${havg} <br/>`);

//3 י

uavg = 0;
for (i = 0; i < 100; i++) {
  if (numbers[i] > avg) {
    uavg = havg + 1;
  }
}
document.write(` under avg ${uavg} <br/>`);

// 3 יא

a = 0;
for (i = 0; i < 100; i++) {
  if (numbers[i] === avg) {
    a = a + 1;
  }
}
document.write(`avg grades: ${a} <br/>`);

//3 יב

dualSum = 0;
dual = 0;
for (i = 0; i < 100; i++) {
  if (numbers[i] % 2 === 0) {
    document.write(`${numbers[i]} | `);
    dual = dual + 1;
    dualSum = dualSum + numbers[i];
  }
}

//3 יג

document.write(`<br/>`);

for (i = 0; i < 100; i++) {
  if (numbers[i] % 2 != 0) {
    document.write(`${numbers[i]} | `);
  }
}

//3 יד

document.write(`<br/>dual: ${dual} <br/>`);

//3 טו

b = 0;
for (i = 0; i < 100; i++) {
  if (numbers[i] % 10 === 7 || numbers[i] % 7 === 0) {
    b = b + 1;
  }
}
document.write(`${b} <br/>`);

//3 טז

document.write(`${dualSum / dual} <br/>`);

//4

products = [
  (shirt = {
    type: `shirt`,
    code: 5053,
    name: `tommy`,
    price: `100$`,
    stock: 5,
  }),
  (pants = {
    type: `pants`,
    code: 4658,
    name: `MJ`,
    price: `300$`,
    stock: 3,
  }),
  (shoes = {
    type: `shoes`,
    code: 5257,
    name: `nike`,
    price: `400$`,
    stock: 10,
  }),
];

for (i = 0; i < 3; i++) {
  document.write(`type: ${products[i].type} <br/>code: ${products[i].code} <br/>name: ${products[i].name} 
    <br/> price: ${products[i].price} <br/>stock: ${products[i].stock} `);
}

for (what of products) {
  for (key in what) {
    document.write(`${key}: ${what[key]} <br/> `);
  }
}

//5

random1 = [];
random2 = [];
size1 = Number.parseInt(Math.random() * 10 + 1);
size2 = Number.parseInt(Math.random() * 10 + 1);
for (i = 0; i < size1; i++) {
  rand = Number.parseInt(Math.random() * 10);
  random1.push(rand);
}

for (j = 0; j < size2; j++) {
  rand1 = Number.parseInt(Math.random() * 10);
  random2.push(rand1);
}

document.write(`${random1} <br/> ${random2} <br/>`);

add1 = 0;
for (i = 0; i < random1.length; i++) {
  add1 = (add1 + random1[i]) * 10;
}
add1 = add1 / 10;

add2 = 0;
for (i = 0; i < random2.length; i++) {
  add2 = (add2 + random2[i]) * 10;
}
add2 = add2 / 10;
add3 = add1 + add2;
randomX = 0;
random3 = [];
do {
  randomX = add3 % 10;
  random3.push(randomX);
  add3 = Number.parseInt(add3 / 10);
} while (add3 >= 1);
random4 = [];
for (i = random3.length - 1; i >= 0; i--) {
  random4.push(random3[i]);
}
document.write(`<br/> ${random4}`);
