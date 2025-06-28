let name = "Girdhar"
const p1 = 3.14

let number = 42 // Number
let symbolVar = symbol(); // Symbol
let text = "Hello" // String
let isTrue = true // Boolean
let nothing = null // Null
let undefinedVar = undefined // Undefined


 console.log(typeof nothing);
 console.log(typeof undefinedVar);
 console.log(typeof symbolVar);
 
 
 
// Object

 let person = {
    name: "Girdhar",
    age: 26,
    isStudent: true
 }


 let num = "42"
 let converteNum = Number(num);

 console.log(converteNum); 
 console.log(typeof converteNum);
 
 let num1 = "42a"
//  let converteNum1 = Number(num1);
// let converteNum = +num1;
let converteNum1 = parseInt(num1);

 console.log(converteNum1); // NaN
 console.log(typeof converteNum1);



 let str = 123
 let converteString = String(str)



 // Operation 

 let a = 10
 let b = 18

 let sum = a + b
 let difference = a - b
 let product = a * b
 let quotient = a / b
 let reminder = a % b
 let power = a ** b



 let x = 5
 let y = 10

 console.log(x == y);
 console.log(x != y);
 console.log(x > y);
 console.log(x < y);
 console.log(x <= y);
 console.log(x >= y);
 


console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.random()* 10);


// String

let firstName = "Girdhar"
let secondName = "Kumar"

let fullName = firstName + " " + secondName

let message = "Hello world"

console.log(message.length());
console.log(message.indexOf("w"));
console.log(message.slice(0, 5));
console.log(message.toUpperCase());
console.log(message.toLowerCase());


let myName = "Girdhar"
let greeting = `Hello ${myName}, from Sakhmohan`