// funcction to add two numbers and return the sum
function sum(a, b) {
  return a + b;
}

// calling the function and storing the result in a variable
let ans = sum(2, 3)

// printing the result
console.log(ans); // 5



// function to calculate the sum of numbers from 1 to n
function sum(num) {
    // variable to store the sum
	let ans = 0;

    // loop to iterate from 1 to n 
	for (let i = 1; i <= num; i++) {
        // adding the current number to the sum
		ans = ans + i
	}

    // returning the sum of numbers from 1 to n
	return ans;
}

// calling the function and storing the result in a variable
let ans = sum(10);

// printing the result
console.log(ans); // 55



// Syncronous code - code that runs line by line and waits for the current line to finish before moving to the next line

// function to calculate the sum of numbers from 1 to n
function sum(num) {
    // variable to store the sum
	let ans = 0;

    // loop to iterate from 1 to n 
	for (let i = 1; i <= num; i++) {
        // adding the current number to the sum
		ans = ans + i
	}

    // returning the sum of numbers from 1 to n
	return ans;
}

// calling the function and storing the result in a variable
const ans1 = sum(10);
// printing the result
console.log(ans1); // 55

// calling the function and storing the result in a variable
const ans2 = sum(100);
// printing the result
console.log(ans2); // 5050

// calling the function and storing the result in a variable
const ans3 = sum(1000); 
// printing the result
console.log(ans3); // 500500




// fs is stands for file system used to read and write files in your local system 

// import an external fs module
const fs = require('fs');

// read file a.txt and store its content in contents variable
const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous way of reading file

// print the contents of the file 
console.log(contents); 



// fs is stands for file system used to read and write files in your local system 

// import an external fs module
const fs = require('fs');

// read file a.txt & b.txt and store its content in contents variable
const contents = fs.readFileSync("a.txt", "utf8") + fs.readFileSync("b.txt", "utf-8");

// print the contents of the file 
console.log(contents); 

// read file a.txt and store its content in contents1 variable
const contents1 = fs.readFileSync("a.txt", "utf8"); 

// read file b.txt and store its content in contents2 variable
const contents2 = fs.readFileSync("b.txt", "utf8");

// print the contents of the file
console.log(contents1); 
console.log(contents2);



// create a variable ans and set it to 0 
let ans = 0;

// loop through 1 to 1000000 and add each number to ans
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}

// print the value of ans
console.log(ans); // 500000500000




// import an external fs module
const fs = require('fs');

// read file a.txt and store its content in contents variable
const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous way of reading file

// print the contents of the file 
console.log(contents); 



// import the fs module
const fs = require("fs");

// read the contents of the file a.txt and store it in the variable contents1 synchronously using the readFileSync method
const contents1 = fs.readFileSync("a.txt", "utf8");
// print the contents of the file a.txt
console.log(contents1);

// read the contents of the file b.txt and store it in the variable contents2 synchronously using the readFileSync method
const contents2 = fs.readFileSync("b.txt", "utf-8");
// print the contents of the file b.txt
console.log(contents2);

// read the contents of the file b.txt and store it in the variable contents3 synchronously using the readFileSync method
const contents3 = fs.readFileSync("b.txt", "utf-8");
// print the contents of the file b.txt
console.log(contents3);




// import the fs module
const fs = require("fs");

// read the contents of the file a.txt and store it in the variable contents1 asynchronously using the readFile method
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// read the contents of the file b.txt and store it in the variable contents2 asynchronously using the readFile method
fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// read the contents of the file b.txt and store it in the variable contents3 asynchronously using the readFile method
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});





// function to add two numbers
function sum(a, b) {
  return a + b;
}

// function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// function to divide two numbers
function divide(a, b) {
  return a / b;
}

// function to do an operation on two numbers
function doOperation(a, b, op) {
  // return op(a, b);
  let val = op(a, b);
  return val;
}

// print the sum of 1 and 2
console.log(sum(1, 2)); // 3

// print the multiplication of 2 and 5
console.log(multiply(2, 5)); // 10




// function to add two numbers
function sum(a, b) {
  return a + b;
}

// function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// function to divide two numbers
function divide(a, b) {
  return a / b;
}

// function to do an operation on two numbers
function doOperation(a, b, op) {
  // return op(a, b);
  let val = op(a, b);
  return val;
}

// call doOperation function with 1, 2, and sum function
let ans1 = doOperation(1, 2, sum);

// print the result
console.log(ans1); // 3

// call doOperation function with 1, 2, and divide function
let ans2 = doOperation(1, 2, divide);

// print the result
console.log(ans2); // 0.5




// import the fs module
const fs = require("fs");

// read the file a.txt synchronously and print the content
// let contents = fs.readFileSync("a.txt", "utf8"); // synchronous
// console.log(contents);

// function to read the file asynchronously
function print(err, data) {
    console.log(data);
}

// read the file a.txt asynchronously and print the content
// file path, encoding, callback function
fs.readFile("a.txt", "utf8", print); // asynchronous

// read the file b.txt asynchronously and print the content
fs.readFile("b.txt", "utf8", print); // asynchronous

console.log("Done!");


// fs.readFile("a.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// });