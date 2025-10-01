## What Is TypeScript?

TypeScript is an open-source programming language developed by Microsoft. It's a **syntactic superset of JavaScript**, which means any valid JavaScript code is also valid TypeScript code. The key difference is that TypeScript adds an optional, static type system. This allows you to define the types of variables, function parameters, and return values, which helps catch errors early in the development process. The TypeScript code you write is eventually **compiled** into plain JavaScript so that it can be run in any browser, server, or environment that supports JavaScript.

### How Is It Different from JavaScript?

The core difference is that JavaScript is a **dynamically typed language**, while TypeScript is a **statically typed language**.

- **JavaScript (Dynamic Typing):** The type of a variable is determined at runtime. You don't declare the type of a variable beforehand. This can lead to unexpected errors if a variable's type isn't what you expect. For example, `let x = "hello"; x = 10;` is valid in JavaScript.

- **TypeScript (Static Typing):** You can explicitly declare the type of a variable. This allows the TypeScript compiler to perform **compile-time checks** to ensure type correctness. If you try to assign a number to a variable declared as a string, the compiler will show an error before the code even runs. This is one of the biggest benefits of using TypeScript. For example, `let x: string = "hello"; x = 10;` will throw a compile-time error.

---

## Core TypeScript Concepts

Let's break down the fundamental building blocks of TypeScript.

### 1\. The `any`, `unknown`, `never`, and `void` Types

These are special utility types that are essential for handling different scenarios.

- `any`: This is the most flexible type and essentially **disables TypeScript's type checking**. It's useful when you need to interact with a third-party library that doesn't have type definitions or when you're migrating a large JavaScript codebase to TypeScript. However, it's generally best to avoid `any` whenever possible, as it defeats the purpose of using TypeScript's type system.

- `unknown`: This is a **safer alternative to `any`**. A variable with the `unknown` type can hold any value, but you can't perform any operations on it until you've narrowed its type. This forces you to perform a type check (e.g., using `typeof` or `instanceof`) before you can use the variable, which prevents many common runtime errors.

- `never`: This type represents the value of a function that **never returns**. A common use case is for functions that always throw an error or contain an infinite loop. The compiler uses `never` to ensure that a function's execution path is never completed.

- `void`: This type is used as a function's return type when the function **doesn't return a value**. It's common for functions that perform a side effect, like logging to the console.

### 2\. Interfaces vs. Types

Both `interface` and `type` are used to define the shape of an object, but they have some key differences.

- `interface`:

  - Primarily used for **object shape contracts**.
  - Can be **extended** using the `extends` keyword, which is perfect for object-oriented inheritance.
  - Supports **declaration merging**, meaning you can declare multiple interfaces with the same name, and TypeScript will merge them into a single interface. This is often used for augmenting existing library types.

- `type`:

  - More versatile. Can be used to create an **alias for any type**, including primitive types (`type MyString = string`), union types (`type ID = string | number`), and intersection types.
  - Cannot be declaration merged. Redeclaring a `type` with the same name will result in an error.

**When to use which?**
The general rule of thumb is to use `interface` when you're defining an object's shape or creating class contracts, and use `type` for everything else, such as aliases for primitives, unions, and intersections.

### 3\. Null vs. Undefined

In TypeScript, `null` and `undefined` are two distinct types and values.

- `undefined`: A variable that has been declared but **has not been assigned a value**. It's the default value for uninitialized variables.
- `null`: A variable that has been explicitly assigned a **non-value**. It represents the intentional absence of a value.

By default, TypeScript allows `null` and `undefined` to be assigned to any type. However, with the `strictNullChecks` compiler option enabled (which is highly recommended), you must explicitly allow `null` and `undefined` in a type using a union, such as `string | null`. This helps prevent a whole class of common bugs.

### 4\. Enums

Enums (enumerations) are a feature not present in JavaScript that allow you to define a set of **named constants**. They can be either numeric or string-based. Enums are great for making code more readable by using descriptive names instead of "magic numbers" or strings.

- **Numeric Enum:**
  ```typescript
  enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
  }
  let myDirection = Direction.Up; // 0
  ```
- **String Enum:**
  ```typescript
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }
  let myDirection = Direction.Up; // "UP"
  ```

### 5\. Type Inference

This is one of TypeScript's most powerful features. The compiler can automatically **determine a variable's type** without you having to explicitly annotate it. This makes your code cleaner while still providing type safety.

```typescript
let myName = "Alice"; // TypeScript infers this as a string
let myAge = 30; // TypeScript infers this as a number
```

In these cases, you don't need to write `let myName: string`.

### 6\. Union (`|`) and Intersection (`&`) Types

- **Union Types (`|`):** A union type allows a value to be **one of several types**. It's like an "OR" condition.
  ```typescript
  type ID = string | number;
  let userId: ID = 123;
  userId = "abc";
  ```
- **Intersection Types (`&`):** An intersection type **combines multiple types into one**. The resulting type has all the properties of each intersected type. It's like an "AND" condition.
  ```typescript
  interface Person {
    name: string;
  }
  interface Employee {
    employeeId: number;
  }
  type MyEmployee = Person & Employee;
  const employee: MyEmployee = {
    name: "John Doe",
    employeeId: 101,
  };
  ```

### 7\. Generics

Generics are a way to create **reusable components** that can work with a variety of types while still providing type safety. They act as **placeholders for types**.

**Example:**
Imagine you have a function that returns the same type as the argument it's given. Without generics, you might use `any`, which loses all type information.

```typescript
// Without Generics (loses type info)
function identity(arg: any): any {
  return arg;
}

// With Generics (retains type info)
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("myString"); // output is inferred as string
```

The `<T>` is the generic type variable. It captures the type that the user provides (in this case, `string`) and allows you to use that same type for the return value, ensuring type safety.

---

## Deep Dive Interview Questions

Now let's tackle the more complex concepts that show a deeper understanding of TypeScript.

### 1\. Structural vs. Nominal Typing

This is a core concept that defines how TypeScript checks for type compatibility.

- **Structural Typing (TypeScript):** Two types are considered **compatible if their shapes match**. The names of the types don't matter. If `TypeA` has all the properties of `TypeB` (and their types match), then `TypeA` can be used where `TypeB` is expected.

  ```typescript
  interface Point2D {
    x: number;
    y: number;
  }
  interface Point3D {
    x: number;
    y: number;
    z: number;
  }
  let p2d: Point2D = { x: 1, y: 2 };
  let p3d: Point3D = { x: 1, y: 2, z: 3 };
  p2d = p3d; // This is OK! The compiler checks if p3d has the properties of p2d (x and y).
  p3d = p2d; // This is a compiler error because p2d is missing the z property.
  ```

- **Nominal Typing (e.g., Java, C++):** Two types are considered compatible **only if they have the same name**, regardless of their structure.

### 2\. Declaration Merging

This is a unique feature of TypeScript that allows the compiler to **merge multiple declarations with the same name into a single definition**. This is most commonly used with **interfaces** and is a powerful way to add new properties to a pre-existing interface, especially for augmenting library types.

**Example:**
Imagine you want to add a new method to the global `Window` interface.

```typescript
interface Window {
  myCustomMethod(): void;
}

// Now the window object has this new method
window.myCustomMethod = () => console.log("Hello!");
```

The TypeScript compiler sees the two `Window` interface declarations and merges them into one, allowing you to use `myCustomMethod` without error.

### 3\. Difference Between `keyof`, `typeof`, and `in`

These three operators are crucial for advanced type manipulation.

- `keyof`: This operator takes a type and produces a **union of its property keys**.
  ```typescript
  interface User {
    name: string;
    age: number;
  }
  type UserKeys = keyof User; // "name" | "age"
  ```
- `typeof`: This operator takes a variable or expression and returns its **type**. This is often used with `keyof` to get the keys of an object's type.
  ```typescript
  const user = { name: "Alice", age: 30 };
  type UserType = typeof user; // { name: string; age: number; }
  type UserKeys = keyof typeof user; // "name" | "age"
  ```
- `in`: This operator is used in **mapped types** to iterate over the keys of a union type, similar to a `for...in` loop in JavaScript.

### 4\. Conditional Types

Conditional types allow you to create a type that is **conditional on a specific type check**. The syntax is `T extends U ? X : Y`, where if `T` can be assigned to `U`, the type is `X`; otherwise, it's `Y`.

**Example:**

```typescript
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"
```

Conditional types are the foundation for many of TypeScript's powerful built-in utility types.

### 5\. Utility Types

Utility types are built-in generic types that allow you to **transform and manipulate existing types**. They are essential for writing concise and reusable type definitions.

- `Partial<T>`: Makes all properties of a type `T` **optional**.
- `Pick<T, K>`: Creates a new type by **picking a subset of properties** `K` from a type `T`.
- `Omit<T, K>`: Creates a new type by **omitting a subset of properties** `K` from a type `T`.
- `Required<T>`: Makes all properties of a type `T` **required**.

### 6\. Function Overloads

Function overloads allow you to define a function that has **multiple function signatures** with different argument types and return types, but only **one implementation**. The compiler chooses the correct signature based on the arguments provided when the function is called.

**Example:**

```typescript
// Overload Signatures
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): number;

// Implementation Signature (more general)
function add(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  return a + b;
}

add("Hello", " World"); // OK, returns "Hello World"
add(10, 20); // OK, returns 30
add("10", 20); // OK, returns 30
```

### 7\. Type Narrowing

Type narrowing is the process of **refining a union type to a more specific type** within a specific code block. This is done using **type guards**, which are conditional checks that TypeScript can understand.

- `typeof`: Checks for primitive types (`string`, `number`, `boolean`, `symbol`, `bigint`, `undefined`).
- `instanceof`: Checks if a value is an instance of a class.
- `in`: Checks if a property exists on an object.
- Equality checks (`==`, `!=`, `===`, `!==`).

**Example:**

```typescript
function printID(id: string | number) {
  if (typeof id === "string") {
    // Here, id is narrowed to 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is narrowed to 'number'
    console.log(id.toFixed(2));
  }
}
```

### 8\. Mapped Types

Mapped types allow you to **create new types by transforming the properties of an existing type**. The syntax uses a `[P in K]` syntax, where `P` iterates through the keys `K`.

**Example:**

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}
type ReadonlyUser = Readonly<User>;
// Result: { readonly name: string; readonly age: number; }
```

This is how many of TypeScript's built-in utility types are implemented.

### 9\. Discriminated Unions

A discriminated union is a powerful pattern for handling different shapes of objects. It involves a union of types where each member has a **common literal property (the "discriminant")** that TypeScript can use to narrow the type.

**Example:**

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      // TypeScript knows 'shape' is a Circle here
      return Math.PI * shape.radius ** 2;
    case "square":
      // TypeScript knows 'shape' is a Square here
      return shape.side * shape.side;
  }
}
```

The `kind` property acts as the discriminant, allowing TypeScript to correctly infer the type in each `case` block.

### 10\. `extends` in Generics

When used in a generic type definition, the `extends` keyword is a **constraint**. It tells TypeScript that the generic type `T` must be a subtype of `U`. This allows you to safely use properties or methods that are guaranteed to exist on `U`.

**Example:**

```typescript
interface Lengthy {
  length: number;
}

function logLength<T extends Lengthy>(arg: T): T {
  console.log(arg.length); // OK, because we know T has a 'length' property
  return arg;
}

logLength("hello"); // OK, string has a length property
logLength([1, 2, 3]); // OK, array has a length property
logLength(10); // Error, number does not have a length property
```

### 11\. `interface Foo {}` vs. `type Foo = {}`

The core difference lies in their capabilities, particularly with declaration merging and extension.

- `interface Foo {}`: Can be **declaration merged**. If you declare another `interface Foo {}`, the compiler will combine them. It's also extensible with `extends`.
- `type Foo = {}`: **Cannot be declaration merged**. Redeclaring it will cause an error. It can be "extended" using intersection types (`&`).

For most simple object definitions, they are functionally similar. However, `interface` is the convention for defining object shapes that might be extended or declaration merged, especially in libraries.

### 12\. Declaration Files (`.d.ts`)

A declaration file, or `.d.ts` file, is a file that contains only **type declarations** without any implementation. Its purpose is to describe the types of an existing JavaScript codebase so that TypeScript can provide type checking and IntelliSense for that code. When you install a library that was written in JavaScript (like Lodash), you often also install a type declaration package (`@types/lodash`) that contains the `.d.ts` files for that library.

### 13\. Ambient Declarations

Ambient declarations are a way to tell the TypeScript compiler about a variable, function, or class that **exists somewhere else**, like in a global script or a JavaScript library. You use the `declare` keyword for this. The `declare` keyword tells the compiler, "Trust me, this exists at runtime; just don't produce any code for it."

**Example:**

```typescript
declare var myGlobalVariable: string;
// Now you can use myGlobalVariable in your TypeScript code without a compiler error.
```

This is different from regular declarations, which produce JavaScript code.

### 14\. Index Signatures

An index signature is a way to define a type for an object with **dynamic properties**. It's useful when you don't know the names of all the properties ahead of time but you know the type of the keys and values.

**Example:**

```typescript
interface StringMap {
  [key: string]: string;
}

const myMap: StringMap = {
  name: "Alice",
  city: "New York",
};
myMap.country = "USA"; // OK
```

The `[key: string]: string` part is the index signature. It says, "This object can have any number of string properties, and their values must all be strings."

### 1\. **tsconfig.json File**

This is the configuration file for the TypeScript compiler. It's a key part of any TypeScript project. For an interview, you should understand the purpose of some of the most important options.

- `"target"`: Specifies the ECMAScript version that the TypeScript code should be compiled to (e.g., `es5`, `es2016`, `esnext`).
- `"module"`: Defines the module system to be used (e.g., `commonjs` for Node.js, `esnext` for modern browsers).
- `"strict"`: A master flag that enables all strict type-checking options. You should know that this is best practice.
- `"outDir"`: Specifies the output directory for the compiled JavaScript files.
- `"include"` and `"exclude"`: Used to specify which files the TypeScript compiler should process.
- `"lib"`: Specifies a list of library files to be included in the compilation, such as `dom` (for browser APIs) or `es2015` (for ES6 features).

---

### 2\. **Decorators**

Decorators are a proposed feature for JavaScript that are already available in TypeScript. They are functions that can be used to **add metadata or modify classes, methods, properties, or accessors** at design time. While they are still an experimental feature in TypeScript, they are widely used in frameworks like Angular and NestJS. .

You should know the basic syntax and a few common use cases, such as:

- Class decorators
- Method decorators
- Property decorators

### 3\. **Type Guards**

You've already mentioned type narrowing, but it's important to understand and be able to write **custom type guards**. These are functions that return a boolean and help TypeScript narrow a type. A custom type guard function typically returns a type predicate, which has the form `parameterName is Type`.

```typescript
interface Cat {
  name: string;
  purrs: true;
}

interface Dog {
  name: string;
  barks: true;
}

// This is a custom type guard
function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).purrs !== undefined;
}

const pet: Cat | Dog = { name: "Felix", purrs: true };

if (isCat(pet)) {
  console.log("It's a cat!");
  pet.purrs; // No error, TypeScript knows it's a Cat
}
```

### 4\. **Module Systems**

You should understand how TypeScript handles different module systems, particularly **CommonJS** (Node.js) and **ES Modules** (`import`/`export`). Know how the `module` and `moduleResolution` options in `tsconfig.json` affect how TypeScript compiles and resolves modules.

### 5\. **Async/Await with Types**

Knowing how to properly type asynchronous operations is crucial. You should be comfortable with:

- Typing the return value of an `async` function using `Promise<T>`.
- Handling errors in `try/catch` blocks.
- Typing data fetched from an API.

<!-- end list -->

```typescript
interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`https://api.example.com/users/${id}`);
  const user: User = await response.json();
  return user;
}
```

### 6\. **Using TypeScript with Build Tools**

In a real-world project, TypeScript is often integrated into a build pipeline. You should be aware of how TypeScript works with tools like:

- **Webpack**: Using `ts-loader` to compile TypeScript files.
- **Babel**: Transpiling TypeScript to JavaScript, often for faster builds.
- **Vite**: A modern build tool with built-in TypeScript support.

### 7\. **Practical Scenarios**

Finally, be prepared to answer more abstract questions that test your problem-solving skills with TypeScript. These might include:

- "How would you type a function that takes an array of any type and returns a new array with a specific transformation?" (This involves generics).
- "What are the trade-offs of using TypeScript in a project?" (This tests your understanding of its benefits and potential complexities, like increased build time).
- "How would you set up a new project with TypeScript from scratch?" (This tests your practical knowledge of `npm`, `tsconfig.json`, etc.).
