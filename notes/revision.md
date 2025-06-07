https://www.freecodecamp.org/news/learn-javascript-for-beginners/

## ✅ **JavaScript `setTimeout()` – Summary**

The `setTimeout()` function is used to **delay the execution** of a function by a specified number of milliseconds.

---

## 📌 **Syntax**

```javascript
setTimeout(function, milliseconds, param1, param2, ...);
```

---

## 🧠 **Key Points**

### 1. **Basic Usage**

Executes a function **after a specified delay**.

```javascript
setTimeout(function () {
  console.log("Hello World");
}, 2000); // Executes after 2 seconds
```

📝 Output:

```
setTimeout() example...
(2 sec delay)
Hello World
```

---

### 2. **Named Function**

You can pass a **function reference** instead of an inline function.

```javascript
function greet() {
  console.log("Hello World");
}
setTimeout(greet, 3000); // Waits 3 seconds
```

---

### 3. **Passing Parameters**

Pass extra parameters **after the delay** argument:

```javascript
function greet(name, role) {
  console.log(`Hello, my name is ${name}`);
  console.log(`I'm a ${role}`);
}
setTimeout(greet, 3000, "Nathan", "Software Developer");
```

❗ **Don’t call the function directly**:

```javascript
setTimeout(greet("Nathan", "Software Developer"), 3000); // ❌ Executes immediately
```

---

### 4. **Immediate Execution (No delay)**

```javascript
setTimeout(() => {
  console.log("Runs immediately");
}); // No delay means immediate execution
```

---

### 5. **Cancel Timeout using `clearTimeout()`**

You can cancel a scheduled function using the **timeout ID** returned.

```javascript
const timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 2000);

clearTimeout(timeoutId); // Cancels the timeout
console.log(`Timeout ID ${timeoutId} has been cleared`);
```

---

## 📒 **Revision Notes**

| Feature                | Details                            |
| ---------------------- | ---------------------------------- |
| **Purpose**            | Delays execution of a function     |
| **Time unit**          | Milliseconds (1000 ms = 1 sec)     |
| **Returns**            | Timeout ID (used for cancellation) |
| **Cancel**             | `clearTimeout(timeoutId)`          |
| **Function Reference** | Pass function name, not call       |
| **Use with Params**    | Pass extra args after milliseconds |

---

## ⚡ Real-World Tip:

You **usually won't need** to pass parameters; using closures or arrow functions is more common. Ex:

```javascript
setTimeout(() => {
  console.log(`Hi Arpita`);
}, 1000);
```

---

Here’s a **clear summary**, **key points**, and **examples** version of your detailed explanation of **Promises in JavaScript**:

---

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

It has **3 states**:

- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

Think of it like messaging a store:

- Sending a request = accessing a promise.
- Auto-reply = promise is pending.
- Reply with product availability = promise resolved.
- Reply that it's the wrong store = promise rejected.

---

## 🔑 **Key Points**

### 📌 Creating a Promise

```js
let promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Resolved!");
  } else {
    reject("Rejected!");
  }
});
```

### 📌 Consuming a Promise

```js
promise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

### 📌 Callback vs Promise

**Callbacks:**

```js
function process(callback1, callback2) {
  if (error) callback2("Error");
  else callback1("Success");
}
```

**Promises:**

```js
function process() {
  return new Promise((resolve, reject) => {
    if (error) reject("Error");
    else resolve("Success");
  });
}

process()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

---

## 🔁 **Example: Callback Hell vs Promise Chaining**

### ❌ Callback Hell

```js
stepOne(1, () => {
  stepTwo(2, () => {
    stepThree(3, () => {
      console.log("Done");
    });
  });
});
```

### ✅ Using Promises

```js
stepOne(1)
  .then(() => stepTwo(2))
  .then(() => stepThree(3))
  .then(() => console.log("Done"));
```

---

## 🌐 **Fetch API and Promises**

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

---

## 🚀 **Promise Utility Methods**

### 1. **Promise.all()**

Waits for **all** promises to resolve, fails fast if **any** rejects.

```js
Promise.all([p1, p2, p3])
  .then((responses) => console.log(responses))
  .catch((error) => console.log(error));
```

### 2. **Promise.allSettled()**

Waits for **all** promises to finish (resolved or rejected).

```js
Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
```

Output:

```js
[
  { status: "rejected", reason: "Error" },
  { status: "fulfilled", value: 200 },
  { status: "fulfilled", value: "Done" },
];
```

### 3. **Promise.any()**

Returns the **first resolved** value. Ignores rejections unless **all fail**.

```js
Promise.any([p1, p2, p3]).then((response) => console.log(response));
```

### 4. **Promise.race()**

Returns the **first settled** promise (resolved or rejected).

```js
Promise.race([p1, p2, p3])
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

---

## 📌 When to Use Promises Over Callbacks

Use **Promises** when:

- Operations are **asynchronous** (e.g., fetch, timeout, API calls).
- You want to **avoid nested callbacks**.
- You need to **compose multiple async tasks** cleanly.

Use **Callbacks** when:

- Logic is **simple and synchronous**.
- Inside **array methods** like `map`, `filter`, `forEach`.

---

## 🧠 Final Thoughts

Promises provide:

- Cleaner async code
- Easier chaining and error handling
- Better support with tools like `async/await`

---
