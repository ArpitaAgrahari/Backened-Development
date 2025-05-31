let firstName = "Bharat";
console.log(firstName); // Bharat

const age = 21;
console.log(age); // 21

var isStudent = true;
console.log(isStudent); // true


console.log("firstName"); // firstName
console.log("Bharat"); // Bharat


isStudent = "Deepak";
console.log(isStudent); // Deepak

isStudent = 10;
console.log(isStudent); // 10


// let, const


// let
let isStudent = true;

console.log(isStudent); // true
isStudent = false;
console.log(isStudent); // false


// const
const firstName = "Bharat";

console.log("Hello from before"); // Hello from before
// firstName = 1;   // TypeError: Assignment to constant variable.
console.log("Hello from after");



let number = 44; // Number
let string = "Hello World!"; // String
let isActive = false; // Boolean
let numbers = [1, 2, 3]; // Array

console.log(number); // 44
console.log(string); // Hello World!
console.log(isActive); // false
console.log(numbers); // [1, 2, 3]


let user1 = "Harkirat";
let user2 = "Bharat";
let user3 = "Deepak";

console.log(user1); // Harkirat
console.log(user2); // Bharat
console.log(user3); // Deepak


// Array
let users = ["Harkirat", "Bharat", "Deepak"];

console.log(users); // ["Harkirat", "Bharat", "Deepak"]

console.log(users[0]); // Harkirat
console.log(users[1]); // Bharat
console.log(users[2]); // Deepak
console.log(users[3]); // undefined



let sum = 10 + 20; // Arithmetic Operator
let isEquals = (10 === 10); // Comparison Operator
let isTrue = (true && false); // Logical Operator

console.log(sum); // 30
console.log(isEquals); // true
console.log(isTrue); // false


let age = 19;
let canVote = (age >= 18); // true, false

console.log(canVote); // true




// Function Declaration - greet someone
function greet(name) {
  return "Hello, " + name;
}

// Function Call
let ans1 = greet("Bharat");
let ans2 = greet("Harkirat");
let ans3 = greet("Deepak");

// log the output
console.log(ans1); // Hello, Bharat
console.log(ans2); // Hello, Harkirat
console.log(ans3); // Hello, Deepak

// Function Declaration - sum of two numbers
function sum(a, b) {
  let totalSum = a + b;

  return totalSum;
}

// Function Call
let sum1 = sum(2, 3);
let sum2 = sum(5, 10);

// log the output
console.log(sum1); // 5
console.log(sum2); // 15

// Function Declaration - can vote or not
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Function Call
let ans4 = canVote(20);
let ans5 = canVote(15);

// log the output
console.log(ans4); // true
console.log(ans5); // false

// Function Declaration - can vote or not
function canVote1(age) {
  //   if (age >= 18) {
  //     console.log("Yes, you can vote");
  //   } else {
  //     console.log("No, you can't vote");
  //   }

  if (age >= 18) {
    console.log("Yes, you can vote");
  }
  
  if (age < 18) {
    console.log("No, you can't vote");
  }
}

canVote1(20); // Yes, you can vote
canVote1(15); // No, you can't vote


let age = 19;

if (age >= 18) {
    console.log("Yes, you can vote");
} else {
    console.log("No, you can't vote");
}




// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // print 1 to 5
}

// While Loop
let j = 1;

while (j <= 5) {
    console.log(j); // print 1 to 5
    j++;
}


// array of users
let users = ["Bharat", "Harkirat", "Deepak", "Rahul", "Rohit"];

// console.log(users[0]); // Bharat
// console.log(users[1]); // Harkirat
// console.log(users[2]); // Deepak
// console.log(users[3]); // Rahul
// console.log(users[4]); // Rohit

// For Loop
for (let i = 0; i < 4; i++) {
    console.log(users[i]); // print Bharat, Harkirat, Deepak, Rahul
}

let totalUsers = users.length; 

for (let i = 0; i < totalUsers; i++) {
    console.log(users[i]); // print Bharat, Harkirat, Deepak, Rahul, Rohit
}



let users = ["Harkirat", "Bharat", "Deepak", "Rahul", "Rohit"];

console.log(users); // ["Harkirat", "Bharat", "Deepak", "Rahul", "Rohit"]

// console.log(users[0]); // Harkirat
// console.log(users[1]); // Bharat
// console.log(users[2]); // Deepak
// console.log(users[3]); // Rahul
// console.log(users[4]); // Rohit
// console.log(users[5]); // undefined

let totalUsers = users.length; 
console.log(totalUsers); // 5


for (let i = 0; i < totalUsers; i++) {
  console.log(users[i]); // Harkirat, Bharat, Deepak, Rahul, Rohit
}