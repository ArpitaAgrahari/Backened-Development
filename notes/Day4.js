// Create a counter variable and set it to 1
let counter = 1;

// Create a function called callback that logs the counter variable to the console
function callback() {
    // Clear the console before logging the counter variable
    console.clear();

    // Log the counter variable to the console
    console.log(counter);

    // Increment the counter variable by 1
    counter++;
}

// Call the setInterval function and pass the callback function and 1000 milliseconds as arguments
setInterval(callback, 1000);



/*
Counter without setInterval

Without using setInterval, try to code a counter in Javascript. 

There is a hint at the bottom of the file if you get stuck.
setTimeout();
*/


// Create a counter variable and set it to 1
let counter = 1;

// Create a function called callback that logs the counter variable to the console
function callback() {
    // Clear the console before logging the counter variable
    console.clear();

    // Log the counter variable to the console
    console.log(counter);

    // Increment the counter variable by 1
    counter++;

    // Call the setTimeout function and pass the callback function and 1000 milliseconds as arguments
    setTimeout(callback, 1000);
}

// Call the setInterval function and pass the callback function and 1000 milliseconds as arguments
setTimeout(callback, 1000);





/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  /*
  // convert the string to lowercase
  str1 = str1.toLowerCase(); // "Spar" => "spar"
  // split the string into an array of characters
  const arr1 = str1.split(""); // "spar" => ["s", "p", "a", "r"]
  // sort the array of characters in ascending order
  arr1.sort(); // ["a", "p", "r", "s"]
  // join the array of characters back into a string and store it in a variable called sortedString1
  const sortedString1 = arr1.join(""); // "aprs"  
 
  // convert the string to lowercase 
  str2 = str2.toLowerCase(); // "rasp" => "rasp"
  // split the string into an array of characters
  const arr2 = str2.split(""); // "rasp" => ["r", "a", "s", "p"]
  // sort the array of characters in ascending order
  arr2.sort();    // ["a", "p", "r", "s"]
  // join the array of characters back into a string and store it in a variable called sortedString2
  const sortedString2 = arr2.join(""); // "aprs"  
  
  // compare the two strings and return true if they are equal, otherwise return false 
  if (sortedString1 === sortedString2) { // "aprs" === "aprs" => true
      return true;
  } else {
      return false;
  }
  */

  // convert the string to lowercase and split the string into an array of characters and sort the array of characters in ascending order and join the array of characters back into a string and store it in a variable called sortedString1
  const sortedString1 = str1.toLowerCase().split("").sort().join("");

  // convert the string to lowercase and split the string into an array of characters and sort the array of characters in ascending order and join the array of characters back into a string and store it in a variable called sortedString2
  const sortedString2 = str2.toLowerCase().split("").sort().join("");

  // compare the two strings and return true if they are equal, otherwise return false
  return sortedString1 === sortedString2;
}

console.log(isAnagram("Spar", "rasp")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("abb", "aab")); // false
console.log(isAnagram("abb", "bba")); // true
console.log(isAnagram("abb", "bbaa")); // false


*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // store the first element of the array in a variable called largestElement
    let largestElement = numbers[0];

    // loop through the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {

        // if the current element is greater than the largestElement then update the largestElement to the current element
        if (numbers[i] > largestElement) {
            largestElement = numbers[i];
        }
    }

    // return the largestElement 
    return largestElement;
}

// Test cases
console.log(findLargestElement([3, 7, 2, 9, 1])); // 9
console.log(findLargestElement([3, 7, 2, 9, 1, 10])); // 10
console.log(findLargestElement([3, 7, 2, 9, 1, 10, 10])); // 10
console.log(findLargestElement([12, 7, 2, 9, 1, 10, 10, 10])); // 12