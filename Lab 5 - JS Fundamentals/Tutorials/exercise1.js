// node --watch exercise1.js
// CRTL + Z
/*
console.log("Welcome to JS World cup");
// DECLARE VARIABLES

var age = 111;
let name = "Abdulahi";
const gender = "Male";
const status = false;

console.log(age, name, gender, status);

if (age > 20) console.log("You are getting old");
else console.log("You are too young");

console.log(true || false);
console.log(true && false);
console.log(true || true);
console.log(true && true);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Functions
function add(a, b) {
  return a + b;
}

function display(name) {
  console.log("Your name is ", name);
}

console.log("The sum is ", add(2, 4));
console.log("The sum is ", add("Abdulahi", " Hassen "));

display("Asma Bahabarah");

function addAndDisplay(a, b, display) {
  result = a + b;
  display(result);
}

a = 12;
b = 10;
c = function (result) {
  console.log(result);
};

function c(result) {
  console.log(result);
}

addAndDisplay(a, b, c);
addAndDisplay(12, 10, function (result) {
  console.log(result);
});

function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function sub(a, b) {
  return a - b;
}
function dis(result) {
  console.log(result);
}

function superF(a, b, opr, display) {
  result = opr(a, b);
  display(result);
}

superF(1, 2, add, dis);
superF(1, 2, mul, dis);
superF(1, 2, div, dis);
superF(1, 2, sub, dis);


// Objects
let person = {
  name: "Abdulahi",
  age: 111,
  gender: "M",
  toString: function () {
    console.log(this.name, this.age, this.gender);
  },
};

person.toString();
console.log(person.name);
console.log(person.age);
console.log(person.gender);

let person = {
  name: "Abdulahi",
  age: 111,
  gender: "M",
  toString: function () {
    console.log(this.name, this.age, this.gender);
  },
};
let students = [
  "Abdulahi",
  "Mohamed",
  "Hassen",
  990,
  person,
  [1, 2, 3, 4, 5],
  function display() {
    console.log("Jellp");
  },
];
console.log(students[6]());

*/

let numbers = [1, 2, 3, 4, 5, 6];
numbers.push(11);
console.log("After push", numbers);
numbers.pop();
console.log("After pop", numbers);

numbers.shift();
console.log("After shifting", numbers);

numbers.unshift(100);
console.log("After unshifting", numbers);

sliced = numbers.slice(2, 4);
console.log("After slicing", sliced);
console.log("After numbers", numbers);

splice = numbers.splice(3, 2);
console.log("After splice", splice);
console.log("After splice", numbers);

// squareValue = function (a) {
//   return a ** 2;
// };

(a) => a ** 2;

function squareValue(a) {
  return a ** 2;
}

squared = numbers.map((a) => a ** 2);
negated = numbers.map((a) => -a);

filtered = numbers.filter((a) => a % 2 == 0);
gthan50 = numbers.filter((a) => a > 50);
findTwo = numbers.find((a) => a == 2);

console.log("------------------------");
console.log("Original Array", numbers);
console.log("------------------------");
console.log("Squared", squared);
console.log("negated", negated);
console.log("filtered", filtered);
console.log("gthan50", gthan50);
console.log("findTwo", findTwo);

numbers.forEach((a) => a);

// for (let a in numbers) {
//   console.log(a);
// }

reducerFunction = function (acc, curr) {
  return acc * curr;
};

multiAll = numbers.reduce((acc, curr) => acc + curr, 1);

console.log(multiAll);
