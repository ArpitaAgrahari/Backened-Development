Perfect, Arpita! 🌟 You're now stepping into **JavaScript** — the heart of interactivity on the web. Let’s start **from absolute basics** and go **deep into each terminology**, just like we did with CSS.

I’ll break it into **logical chunks** with easy explanations, **examples**, and practical usage so you don’t just memorize — you understand.

---

# 🚀 JavaScript Terminologies (Beginner to Pro)

---

## ✅ 1. **What is JavaScript?**

JavaScript is a **scripting language** used to create dynamic, interactive web pages.
It works in the **browser** (client-side) and can now run on servers using **Node.js**.

---

## ✅ 2. **Variables and Data Types**

### 🔹 Variable = A named container for storing data.

```js
let name = "Arpita";
const age = 21;
var course = "Web Dev";
```

| Keyword | Meaning                                 |
| ------- | --------------------------------------- |
| `let`   | Block-scoped, can be updated            |
| `const` | Block-scoped, cannot be updated         |
| `var`   | Function-scoped (old way — avoid using) |

---

### 🔹 Data Types:

| Type           | Example                              |
| -------------- | ------------------------------------ |
| String         | `"Hello"`                            |
| Number         | `25`                                 |
| Boolean        | `true` / `false`                     |
| Null           | `null` (intentional empty)           |
| Undefined      | A variable declared but not assigned |
| Object         | `{ name: "Arpita" }`                 |
| Array          | `["JS", "React", "Node"]`            |
| Symbol, BigInt | Advanced cases                       |

---

## ✅ 3. **Operators**

| Type       | Example             | Meaning              |     |                    |
| ---------- | ------------------- | -------------------- | --- | ------------------ |
| Arithmetic | `+ - * / % **`      | Math                 |     |                    |
| Assignment | `= += -=`           | Assign/update values |     |                    |
| Comparison | `== === != !== < >` | Compare values       |     |                    |
| Logical    | \`&&                |                      | !\` | Combine conditions |
| Ternary    | `condition ? a : b` | Short if-else        |     |                    |

---

### 🧠 Example:

```js
let score = 90;
let grade = score > 85 ? "A" : "B";
```

---

## ✅ 4. **Conditional Statements**

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Also includes:

- `else if`
- `switch`

---

## ✅ 5. **Loops**

Used to repeat actions.

### 🔹 Types:

```js
for (let i = 0; i < 3; i++) { ... }      // Traditional loop
while (condition) { ... }               // Loop while true
do { ... } while (condition);           // Always runs at least once
```

For arrays:

```js
fruits.forEach((f) => console.log(f));
```

---

## ✅ 6. **Functions**

Reusable blocks of code.

```js
function greet(name) {
  return "Hi, " + name;
}
```

### Arrow Function (ES6):

```js
const greet = (name) => `Hi, ${name}`;
```

---

## ✅ 7. **Objects & Arrays**

### Object:

```js
const user = {
  name: "Arpita",
  age: 20,
  skills: ["JS", "HTML"],
};
```

### Array:

```js
const colors = ["red", "blue"];
colors.push("green");
```

---

## ✅ 8. **DOM (Document Object Model)**

JS can control the webpage.

```js
document.getElementById("btn").addEventListener("click", function () {
  alert("You clicked!");
});
```

Terms:

- `getElementById`, `querySelector`, `innerText`, `style`, etc.

---

## ✅ 9. **Events**

Reacting to user actions:

```js
element.addEventListener("click", handler);
```

Common events:

- `click`, `submit`, `change`, `keydown`, `mouseover`

---

## ✅ 10. **ES6+ Features**

Modern JS introduced many new features:

| Feature            | Example                     | Benefit                |
| ------------------ | --------------------------- | ---------------------- |
| `let` / `const`    | Safer variable declarations |                        |
| Arrow Functions    | `() => {}`                  | Shorter syntax         |
| Template Literals  | \`\${name}\`                | Easier string building |
| Destructuring      | `const { name } = user`     | Pull data easily       |
| Spread / Rest      | `...arr`                    | Copying/merging data   |
| Modules            | `import`, `export`          | Code organization      |
| Default Parameters | `function(x = 1)`           | Simpler APIs           |

---

## ✅ 11. **Hoisting**

Variables declared with `var` are “hoisted” (moved to top of scope), but not initialized.

```js
console.log(a); // undefined
var a = 5;
```

`let` and `const` are hoisted but stay in a “temporal dead zone”.

---

## ✅ 12. **Scope & Closures**

- **Scope**: Where a variable is accessible.
- **Closure**: A function remembers the variables in its scope even after the parent is gone.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

---

## ✅ 13. **Async JavaScript**

### 🔹 Callback → Promise → Async/Await

```js
// Promise
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Async/Await
async function getData() {
  const res = await fetch("url");
  const data = await res.json();
  console.log(data);
}
```

---

## ✅ 14. **Error Handling**

```js
try {
  let result = riskyFunction();
} catch (error) {
  console.error("Something went wrong:", error);
} finally {
  console.log("Cleanup");
}
```

---

## ✅ 15. **Common Built-in Methods**

### Strings:

```js
"Hello".toUpperCase();
"hi there".split(" ");
```

### Arrays:

```js
[1, 2, 3].map((x) => x * 2)[(1, 2, 3)].filter((x) => x > 1);
```

---

## 🧪 Mini Challenges to Practice

| Concept       | Challenge                                      |
| ------------- | ---------------------------------------------- |
| Variables     | Swap two numbers without temp variable         |
| Functions     | Write a calculator                             |
| DOM           | Create a color changer button                  |
| Array methods | Find duplicates in array                       |
| Events        | Toggle light/dark mode                         |
| Loops         | Generate multiplication table                  |
| Async         | Fetch random joke from API and show in browser |

---

## 1. **JavaScript Basics Syntax**

### 👉 Example:

```js
let name = "Arpita";
const age = 21;
var course = "Web Dev";
```

### 🧠 Real-world use:

To store values like user input, settings, counters, etc.

### 🔥 Interview Q:

**Q: What's the difference between `var`, `let`, and `const`?**

**A:**

- `var` is function-scoped and hoisted. Avoid using it.
- `let` is block-scoped. Can be reassigned.
- `const` is block-scoped. Cannot be reassigned.

---

## 2. **DOM Manipulation**

The DOM (Document Object Model) represents the HTML structure as JS objects.

### 👉 Types:

- `getElementById`
- `querySelector`
- `innerText`, `innerHTML`, `classList`, `style`
- `createElement`, `appendChild`, `removeChild`

### 🧠 Use case:

Change button text on click:

```js
document.getElementById("myBtn").innerText = "Clicked!";
```

### 🔥 Interview Q:

**Q: Difference between `innerText` and `innerHTML`?**

- `innerText`: only text.
- `innerHTML`: includes HTML tags.

---

## 3. **Event Listeners**

Used to handle user interactions.

```js
button.addEventListener("click", function () {
  alert("Clicked");
});
```

### 👉 When to use:

- `click` for buttons
- `input` or `change` for forms
- `keydown` for keyboard actions

### 🔥 Interview Q:

**Q: Difference between `onclick` and `addEventListener`?**

- `onclick` overwrites previous handlers.
- `addEventListener` allows multiple handlers.

---

## 4. **Fetch API / Async Await**

Fetch is used to call APIs (like a weather app or database).

```js
async function getUser() {
  const res = await fetch("https://api.example.com/user");
  const data = await res.json();
  console.log(data);
}
```

### 🔥 Interview Q:

**Q: Difference between `fetch().then()` and `async/await`?**

- `async/await` is cleaner and more readable.
- Both are built on Promises.

---

## 5. **ES6+ JavaScript Features**

### 👉 Includes:

- Arrow functions
- `let`/`const`
- Template literals
- Spread/rest
- Destructuring
- Modules

### 🔥 Interview Q:

**Q: What's destructuring and when do you use it?**

```js
const { name } = { name: "Arpita", age: 20 };
```

Used to extract values quickly.

---

## 6. **Hoisting**

Hoisting means variable/function declarations are moved to the top of their scope.

```js
console.log(a); // undefined
var a = 5;
```

### 🔥 Interview Q:

**Q: Why should we avoid using `var`?**
Because it’s hoisted and causes bugs in block scopes.

---

## 7. **Closures**

A closure is a function that remembers its lexical scope.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
```

Used in counters, modules, data privacy.

---

## 8. **Promises**

Handle async code.

```js
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

---

## 9. **Currying**

Transforming a function with multiple arguments into a series of unary functions.

```js
function add(a) {
  return function (b) {
    return a + b;
  };
}
add(2)(3); // 5
```

---

## 10. **Short-circuiting**

```js
const name = userName || "Guest"; // if userName is falsy, use Guest
```

---

## 11. **Arrow Functions**

```js
const greet = (name) => `Hi, ${name}`;
```

Shorter, doesn't have its own `this`.

---

## 12. **Function Parameters & Expressions**

```js
const sum = function (a, b = 1) {
  return a + b;
};
```

---

## 13. **Spread and Rest Operator**

```js
const arr = [1, 2, 3];
const copy = [...arr]; // Spread

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
} // Rest
```

---

## 14. **Object & Array Methods**

### Arrays:

- `map`, `filter`, `reduce`, `forEach`, `some`, `every`, `find`

### Objects:

- `Object.keys()`, `Object.values()`, `Object.entries()`

---

## 15. **Scope & Scoping**

- **Global**: available everywhere
- **Function**: declared inside function
- **Block**: declared inside `{}`

```js
if (true) {
  let x = 10; // block scoped
}
```

---

## 16. **Classes**

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi ${this.name}`;
  }
}
```

---

## 17. **Modules**

```js
// file1.js
export const name = "Arpita";

// file2.js
import { name } from "./file1";
```

---

## 18. **Template Literals**

```js
let msg = `Hello ${user}, you have ${count} messages.`;
```

---

## 19. **Event Loop**

Handles sync and async code in JS. Runs code in **Call Stack**, async goes to **Web APIs**, then to **Callback Queue**, and finally back to the stack.

---

## 20. **Event Delegation**

Instead of adding listeners to each element, you attach one to a parent:

```js
document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
```

---

## 21. **This Keyword**

- In global: refers to `window` (browser)
- In method: refers to the object
- In arrow: `this` is lexically inherited

```js
const person = {
  name: "Arpita",
  greet() {
    console.log(this.name);
  },
};
```

---
