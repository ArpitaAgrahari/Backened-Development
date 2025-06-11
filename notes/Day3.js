/*
// rect1 object with width, height and color properties
const rect1 = {
    width: 2,
    height: 4,
    color: "red",
}

// Function to calculate area of rectangle 
function area1(rect) {
    return rect.width * rect.height;
}

// Function to paint rectangle with color
function paint1(rect) {
    console.log(`Painting with color ${rect.color}`);
}


// Call area function with rect1 object and store the result in a variable
const area2 = area1(rect1);
console.log(area2); // Output: 8

// Call paint function with rect1 object
paint1(rect1); // Output: Painting with color red
*/



// Rectangle class with area and paint methods
class Rectangle {
  // Constructor with width, height and color properties
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Method to calculate area of rectangle
  area() {
    const area = this.width * this.height;
    return area;
  }

  // Method to paint rectangle with color
  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

// Create a instance/object of Rectangle class
const rect1 = new Rectangle(2, 4, "red");

// Call area method using the instance and store the result in a variable
const area1 = rect1.area();

// Log the area of the rectangle
console.log(area1); // Output: 8

// Call paint method using the instance
rect1.paint(); // Output: Painting with color red

// Create another instance/object of Rectangle class
const rect2 = new Rectangle(3, 6, "blue");

// Call area method using the instance and store the result in a variable
const area2 = rect2.area();

// Log the area of the rectangle
console.log(area2); // Output: 18

// Call paint method using the instance
rect2.paint(); // Output: Painting with color blue



// Base / Parent / Super class
class Shape {
  // constructor with color property
  constructor(color) {
    this.color = color;
  }

  // Method to paint shape with color
  paint() {
    console.log(`Painting with color ${this.color}`);
  }

  // Method to calculate area of shape
  area() {
    throw new Error("The area method must be implemented in the subclass");
  }

  // Method to get description of shape with color property
  getDescription() {
    return `A shape with color ${this.color}`;
  }
}

// Derived / Child / Sub class
class Rectangle extends Shape {
  // constructor with width, height and color properties
  constructor(width, height, color) {
    super(color); // Call the parent class constructor to set the color
    this.width = width;
    this.height = height;
  }

  // Method to calculate area of rectangle
  area() {
    return this.width * this.height;
  }

  // Method to get description of rectangle with width, height and color properties
  getDescription() {
    return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
  }
}

// Derived / Child / Sub class
class Circle extends Shape {
    // constructor with radius and color properties
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    // Method to calculate area of circle
    area() {
        return Math.PI * this.radius * this.radius;
    }

    // Method to get description of circle with radius and color properties
    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}

// Create a instance/object of Rectangle class
const rect1 = new Rectangle(2, 4, "red");

// Call area method using the instance and store the result in a variable
const area1 = rect1.area();

// Log the area of the rectangle
console.log(area1); // Output: 8

// Call paint method using the instance
rect1.paint(); // Output: Painting with color red

// Log the description of the rectangle
console.log(rect1.getDescription()); // Output: A rectangle with width 2, height 4, and color red


// Create a instance/object of Circle class
const circle1 = new Circle(5, "blue");

// Call area method using the instance and store the result in a variable
const area2 = circle1.area();

// Log the area of the circle
console.log(area2); // Output: 78.53981633974483

// Call paint method using the instance
circle1.paint(); // Output: Painting with color blue

// Log the description of the circle
console.log(circle1.getDescription()); // Output: A circle with radius 5 and color blue



// Current Date and Time in JavaScript using Date Class  
const date = new Date();

// Print the current date and time
console.log(date); // Output: 2025-06-11+T15:13:47.818Z

// print the current year
console.log(date.getFullYear());  

// print the current month
console.log(date.getMonth());

// print the current date
console.log(date.getDate());

// print the current day
console.log(date.getDay());

// print the current hours
console.log(date.getHours()); 

// print the current minutes
console.log(date.getMinutes()); 



// create a map object with key-value pairs
const map = new Map();

// Set key-value pairs in the map object
map.set('name', 'Bharat');
map.set('age', 21);

// Log the map object
console.log(map); // Output: Map(2) { 'name' => 'Bharat', 'age' => 21 }

// Get the value of the key 'name' and 'age' from the map object
console.log(map.get('name')); // Output: Bharat
console.log(map.get('age')); // Output: 21








