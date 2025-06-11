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

