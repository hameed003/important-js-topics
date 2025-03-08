### **Currying in JavaScript**

Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Instead of calling a function with all its arguments at once, you call it with one argument at a time, and each call returns a new function that accepts the next argument.

---

### **1. What is Currying?**

- **Currying** is the process of breaking down a function that takes multiple arguments into a series of functions that each take one argument.
- The curried function keeps returning a new function until all the arguments are provided.
- Once all arguments are provided, the final function executes and returns the result.

---

### **2. Why Use Currying?**

- **Reusability**: Curried functions allow you to create specialized functions from more general ones.
- **Partial Application**: You can fix some arguments and create new functions with fewer parameters.
- **Functional Composition**: Currying makes it easier to compose functions.

---

### **3. Example of Currying**

#### **Non-Curried Function**

A regular function that takes multiple arguments:

```javascript
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // Output: 6
```

#### **Curried Function**

The same function, but curried:

```javascript
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // Output: 6
```

---

### **4. How Currying Works**

1. The outer function (`add`) takes the first argument (`a`) and returns a new function.
2. The returned function takes the second argument (`b`) and returns another function.
3. The final function takes the third argument (`c`) and returns the result.

---

### **5. Practical Examples**

#### **Example 1: Curried Addition**

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5); // Partially applied function
console.log(add5(10)); // Output: 15
```

#### **Example 2: Curried Multiplication**

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2); // Partially applied function
console.log(double(5)); // Output: 10
```

#### **Example 3: Curried Function with Three Arguments**

```javascript
function calculate(a) {
  return function (b) {
    return function (c) {
      return a * b + c;
    };
  };
}

const result = calculate(2)(3)(4); // 2 * 3 + 4
console.log(result); // Output: 10
```

---

### **6. Automating Currying**

You can create a utility function to automatically curry any function.

#### **Curry Utility Function**

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}
```

#### **Example: Using the Curry Utility**

```javascript
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
```

---

### **7. Real-World Use Cases**

#### **Example 1: Reusable Logging Function**

```javascript
function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

const curriedLog = curry(log);

// Partially apply the date and importance
const logNow = curriedLog(new Date())("INFO");

logNow("User logged in"); // Output: [HH:MM] [INFO] User logged in
logNow("User logged out"); // Output: [HH:MM] [INFO] User logged out
```

#### **Example 2: Dynamic Discount Calculation**

```javascript
function calculateDiscount(discount) {
  return function (price) {
    return price - price * discount;
  };
}

const tenPercentDiscount = calculateDiscount(0.1);
const twentyPercentDiscount = calculateDiscount(0.2);

console.log(tenPercentDiscount(100)); // Output: 90
console.log(twentyPercentDiscount(100)); // Output: 80
```

---

### **8. Advantages of Currying**

1. **Partial Application**: Fix some arguments and create new functions with fewer parameters.
2. **Function Composition**: Easily combine smaller functions to build more complex ones.
3. **Code Reusability**: Create specialized functions from general ones.
4. **Readability**: Break down complex functions into smaller, more manageable pieces.

---

### **9. Disadvantages of Currying**

1. **Performance Overhead**: Currying can introduce additional function calls, which may impact performance.
2. **Complexity**: Overusing currying can make code harder to read and debug.

---

### **10. Summary**

| Feature                 | Description                                                                         | Example                          |
| ----------------------- | ----------------------------------------------------------------------------------- | -------------------------------- |
| **Currying**            | Transforming a multi-argument function into a sequence of single-argument functions | `add(1)(2)(3)`                   |
| **Partial Application** | Fixing some arguments to create a new function                                      | `const add5 = add(5);`           |
| **Curry Utility**       | A function to automatically curry any function                                      | `const curriedAdd = curry(add);` |
| **Use Cases**           | Reusable functions, dynamic behavior                                                | Discount calculation, logging    |

**Example**:

```javascript
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(10)); // Output: 15
```

By mastering currying, you can write more modular, reusable, and expressive JavaScript code!
