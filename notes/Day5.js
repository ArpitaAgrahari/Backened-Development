//DOM

//static DOM

// <!DOCTYPE html>
// <html>
// 	<head>
// 	  <meta charset="utf-8">
// 	  <meta name="viewport" content="width=device-width">
// 	  <title>Static HTML</title>
// 	</head>
	
// 	<body>
// 	  <h1>Todo list</h1>
// 	  <h4>1. Take class</h4>
// 	  <h4>2. Go out to eat</h4>
	  
//       <div>
// 	    <input type="text" placeholder="Write Something..." />
// 	    <button>Add Todo</button>
// 	  </div>

// 	  <script src="script.js"></script>
// 	</body>
	
// </html>








//FEtching data 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation- Fetching Elements</title>
  </head>
  <body>
    <h1>Todo List</h1>

    <h4 id="todo">1. Take class</h4>
    <h4 id="todo">2. Go out to eat</h4>
    <h4 id="todo">3. Go to gym</h4>

    <div>
      <input type="text" placeholder="Add your todo here..." />
      <button id="btn" onclick="addTodo()">Add Todo</button>
    </div>

    <script src="./index.js"></script>
  </body>
</html>


// var name = "Bharat";
// console.log(name);

// console.log(document);

/**
 * querySelector - returns the first element that matches a specified CSS selector(s) in the document.
 * Syntax: element = document.querySelector(selectors);
 * 
 * 
 */


function addTodo() {
  const inputEle = document.querySelector("input");
  const value = inputEle.value;
  console.log(inputEle);
  console.log(value);
}

const h4Ele = document.querySelector("h4");
console.log(h4Ele);

const h4EleAll = document.querySelectorAll("h4");
console.log(h4EleAll);
console.log(h4EleAll[1]);

const btn = document.getElementById("btn");
console.log(btn);

const todo = document.getElementsByClassName("todo");
console.log(todo);




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation - Updating Elements</title>
  </head>
  <body>
    <h1>Todo List</h1>

    <h4 id="todo">1. Take class</h4>
    <h4 id="todo">2. Go out to eat</h4>
    <h4 id="todo">3. Go to gym</h4>

    <div>
      <input type="text" placeholder="Add your todo here..." />
      <button id="btn" onclick="addTodo()">Add Todo</button>
    </div>

    <h2></h2>

    <script src="./index.js"></script>
  </body>
</html>