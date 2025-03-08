# Functions And It's Types:

### **JavaScript Functions: A Complete Guide**

In JavaScript, **functions** are reusable blocks of code designed to perform a specific task. Functions are essential to maintain clean, efficient, and modular code.

---

## **What is a Function?**

A function in JavaScript is defined using the `function` keyword, and it may accept **parameters** and **return a value**.

### **Basic Syntax**

```javascript
function functionName(parameters) {
  // code to be executed
  return result; // optional
}
```

### **Example**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Ahmad")); // Hello, Ahmad!
```

---

## **Why Use Functions?**

- **Code Reusability**: Write once, use multiple times.

- **Modularity**: Break down complex programs into smaller, manageable pieces.

- **Maintainability**: Easier to read, debug, and maintain code.

- **Abstraction**: Hide complex logic behind simple function calls.

---

# **Types of Functions in JavaScript**

JavaScript offers several types of functions, each serving different purposes.

### 1. **Function Declaration (Named Function)**

### 2. **Function Expression (Anonymous or Named)**

### 3. **Arrow Function**

### 4. **Immediately Invoked Function Expression (IIFE)**

### 5. **Higher-Order Function**

### 6. **Generator Function**

### 7. **Constructor Function**

### 8. **Callback Function**

### 9. **Recursive Function**

---

## 🟢 **1. Function Declaration**

A **function declaration** defines a named function using the `function` keyword. It is **hoisted**, meaning it can be called before its declaration.

### **Syntax**

```javascript
function functionName(param1, param2) {
  // code block
  return result;
}
```

### **Example**

```javascript
// Calling before declaration due to hoisting
console.log(add(5, 3)); // 8

// Function declaration
function add(a, b) {
  return a + b;
}
```

### **Key Features**

- **Hoisted** to the top of the scope.

- Can be invoked before the function is declared.

---

## 🟡 **2. Function Expression**

A **function expression** involves assigning a function to a variable. Function expressions **are not hoisted**.

### **Syntax**

```javascript
const functionName = function (param1, param2) {
  // code block
  return result;
};
```

### **Example**

```javascript
// Function expression
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(7, 3)); // 4
```

### **Key Features**

- **Not hoisted**, so must be defined before calling.

- Can be **anonymous** (without a name) or **named**.

### **Named Function Expression**

```javascript
const multiply = function multiplyNumbers(a, b) {
  return a * b;
};

console.log(multiply(4, 3)); // 12
```

---

## 🔴 **3. Arrow Function (ES6)**

Arrow functions provide a more concise syntax and **lexically bind `this`**.

### **Syntax**

```javascript
const functionName = (param1, param2) => {
  // code block
  return result;
};
```

### **Example**

```javascript
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Hameed")); // Hello, Hameed!
```

### **Key Features**

- **No `this`, `arguments`, or `super`** keyword.

- **Shorter** syntax.

- **Implicit return** if there’s a single statement.

### **Arrow Function vs Regular Function**

```javascript
// Arrow function doesn't bind 'this'
const obj = {
  name: "Ahmad",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // 'this' refers to obj
    }, 1000);
  },
};

obj.greet(); // Hello, Ahmad
```

---

If you replace the arrow function with a regular function inside `setTimeout`, the `this` keyword will behave differently due to how `this` works in JavaScript.

### **Updated Code with Regular Function**

```javascript
const obj = {
  name: "Ahmad",
  greet: function () {
    setTimeout(function () {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  },
};

obj.greet();
```

### **Explanation**

In this case, the `this` inside the `setTimeout` callback **does not refer to `obj`**. Instead, it refers to the **global object**:

- In a **browser**, `this` will be `window`.

- In **Node.js**, `this` will be `undefined` (in strict mode) or `global` (in non-strict mode).

### **Output**

```plaintext
Hello, undefined
```

---

## **Why Does This Happen?**

- Regular functions determine `this` based on how they're **called**.

- `setTimeout` is a **standalone function call**, so `this` becomes the **global object**, not `obj`.

### **How to Fix It?**

1. **Use Arrow Function** _(lexically binds `this`)_:

```javascript
setTimeout(() => {
  console.log(`Hello, ${this.name}`); // Works correctly
}, 1000);
```

---

2. **Save `this` in a variable**:

```javascript
const obj = {
  name: "Ahmad",
  greet: function () {
    const self = this;
    setTimeout(function () {
      console.log(`Hello, ${self.name}`);
    }, 1000);
  },
};

obj.greet(); // Hello, Ahmad
```

---

3. **Use `bind()` method**:

```javascript
setTimeout(
  function () {
    console.log(`Hello, ${this.name}`);
  }.bind(this),
  1000
);
```

---

### **Key Takeaway:**

- **Arrow functions** inherit `this` from their **lexical scope**.

- **Regular functions** depend on how they're **invoked**.

---

## 🔵 **4. Immediately Invoked Function Expression (IIFE)**

An IIFE is a function that runs as soon as it is defined.

### **Syntax**

```javascript
(function () {
  console.log("IIFE executed!");
})();
```

### **Example**

```javascript
// IIFE to avoid polluting the global namespace
(function () {
  let message = "Hello from IIFE!";
  console.log(message);
})(); // Hello from IIFE!
```

### **Key Features**

- Runs **immediately** after definition.

- **Isolated scope** to avoid conflicts with global variables.

---

## 🟣 **5. Higher-Order Function**

A **higher-order function** takes another function as an argument or returns a function.

### **Example**

```javascript
function operate(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(operate(5, 3, add)); // 8
```

### **Key Features**

- Enables **functional programming** patterns like **map**, **filter**, and **reduce**.

---

## ⚫ **6. Generator Function**

A **generator function** returns an iterator and can pause execution with `yield`.

### **Syntax**

```javascript
function* generatorFunction() {
  yield "Step 1";
  yield "Step 2";
  yield "Step 3";
}
```

### **Example**

```javascript
const generator = generatorFunction();

console.log(generator.next().value); // Step 1
console.log(generator.next().value); // Step 2
console.log(generator.next().value); // Step 3
```

### **Key Features**

- Can **pause** execution with `yield`.

- Useful for **asynchronous** workflows.

---

## 🟠 **7. Constructor Function**

Constructor functions create objects when invoked with the `new` keyword.

### **Example**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const person1 = new Person("Ahmad", 25);
person1.greet(); // Hi, I'm Ahmad
```

### **Key Features**

- Used for **object creation**.

- Works similarly to **class constructors**.

---

## 🔶 **8. Callback Function**

A **callback function** is passed as an argument to another function and executed later.

### **Example**

```javascript
function processUserInput(callback) {
  let name = "Ahmad";
  callback(name);
}

processUserInput(function (name) {
  console.log(`Hello, ${name}`);
}); // Hello, Ahmad
```

### **Key Features**

- Essential for **asynchronous operations** like event handling and API calls.

---

## 🔷 **9. Recursive Function**

A **recursive function** calls itself until it meets a base condition.

### **Example: Factorial Calculation**

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

### **Key Features**

- Used for **problems with repetitive sub-tasks** like tree traversal and factorials.

---

# 🆚 **Function Declaration vs Function Expression**

| **Feature**        | **Function Declaration**               | **Function Expression**         |
| ------------------ | -------------------------------------- | ------------------------------- |
| **Definition**     | Declared using the `function` keyword. | Assigned to a variable.         |
| **Hoisting**       | Hoisted to the top of its scope.       | Not hoisted.                    |
| **Syntax**         | `function greet() {}`                  | `const greet = function () {}`  |
| **Naming**         | Always named.                          | Can be named or anonymous.      |
| **Usage**          | Can be called before declaration.      | Must be defined before calling. |
| **Context (this)** | `this` depends on how it’s called.     | `this` depends on the context.  |

---

### **Example**

```javascript
// Function Declaration - can call before definition
console.log(declareFunction()); // Works due to hoisting

function declareFunction() {
  return "Hello from Declaration!";
}

// Function Expression - cannot call before definition
// console.log(expressFunction()); // Error: expressFunction is not defined

const expressFunction = function () {
  return "Hello from Expression!";
};

console.log(expressFunction()); // Hello from Expression!
```

---

# 🎯 **Conclusion**

JavaScript functions come in many forms, each serving specific use cases.

- Use **function declarations** when you need **hoisting**.

- Use **function expressions** for **modularity** and **encapsulation**.

- **Arrow functions** are perfect for **callbacks** and **functional programming**.

- **Higher-order functions** and **callbacks** are essential for **asynchronous JavaScript**.

Understanding the **differences between declarations and expressions** and mastering these **function types** is crucial for efficient JavaScript programming.
