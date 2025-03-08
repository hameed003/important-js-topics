### **Memoization in JavaScript**

Memoization is an optimization technique used to speed up programs by caching the results of expensive function calls and reusing them when the same inputs occur again. It is particularly useful for functions with repetitive and computationally expensive calculations.

---

### **1. What is Memoization?**

- **Memoization** is the process of storing the results of function calls in a cache (e.g., an object or a map) and reusing them when the same inputs occur again.
- It is a form of caching that avoids redundant computations.
- Memoization is commonly used in dynamic programming, recursive algorithms, and functions with expensive calculations.

---

### **2. Why Use Memoization?**

- **Performance Improvement**: Reduces the time complexity of repetitive function calls.
- **Efficiency**: Avoids redundant calculations by reusing cached results.
- **Scalability**: Makes algorithms more efficient for large inputs.

---

### **3. How Memoization Works**

1. When a memoized function is called, it first checks if the result for the given inputs is already in the cache.
2. If the result is found in the cache, it returns the cached result.
3. If the result is not found, the function computes the result, stores it in the cache, and then returns it.

---

### **4. Example of Memoization**

#### **Non-Memoized Function**

A recursive Fibonacci function without memoization:

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // Output: 55 (but slow for larger `n`)
```

This function has exponential time complexity (`O(2^n)`) because it recalculates the same values repeatedly.

---

#### **Memoized Function**

A Fibonacci function with memoization:

```javascript
function memoizedFibonacci() {
  const cache = {}; // Cache to store results

  return function fib(n) {
    if (n in cache) {
      return cache[n]; // Return cached result
    }
    if (n <= 1) {
      return n; // Base case
    }
    cache[n] = fib(n - 1) + fib(n - 2); // Store result in cache
    return cache[n];
  };
}

const fib = memoizedFibonacci();
console.log(fib(10)); // Output: 55 (much faster for larger `n`)
```

This version has linear time complexity (`O(n)`) because it avoids redundant calculations.

---

### **5. Automating Memoization**

You can create a utility function to automatically memoize any function.

#### **Memoize Utility Function**

```javascript
function memoize(fn) {
  const cache = {}; // Cache to store results

  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key for the arguments
    if (key in cache) {
      return cache[key]; // Return cached result
    }
    const result = fn(...args); // Compute the result
    cache[key] = result; // Store result in cache
    return result;
  };
}
```

#### **Example: Using the Memoize Utility**

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);
console.log(memoizedFib(10)); // Output: 55
```

---

### **6. Practical Examples**

#### **Example 1: Memoized Factorial**

```javascript
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
```

#### **Example 2: Memoized Expensive Calculation**

```javascript
function expensiveCalculation(n) {
  console.log("Calculating...");
  return n * 2;
}

const memoizedCalculation = memoize(expensiveCalculation);
console.log(memoizedCalculation(5)); // Output: Calculating... 10
console.log(memoizedCalculation(5)); // Output: 10 (cached result)
```

---

### **7. Real-World Use Cases**

#### **Example 1: Memoized API Calls**

Memoization can be used to cache API responses and avoid redundant network requests.

```javascript
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

const memoizedFetchData = memoize(fetchData);

memoizedFetchData("https://api.example.com/data").then((data) =>
  console.log(data)
); // Makes the API call
memoizedFetchData("https://api.example.com/data").then((data) =>
  console.log(data)
); // Uses cached result
```

#### **Example 2: Memoized React Components**

In React, memoization is used to optimize rendering by preventing unnecessary re-renders.

```javascript
import React, { useMemo } from "react";

function ExpensiveComponent({ value }) {
  const computedValue = useMemo(() => {
    console.log("Computing...");
    return value * 2;
  }, [value]);

  return <div>{computedValue}</div>;
}
```

---

### **8. Advantages of Memoization**

1. **Performance Improvement**: Reduces redundant computations.
2. **Efficiency**: Reuses cached results for the same inputs.
3. **Scalability**: Makes algorithms more efficient for large inputs.

---

### **9. Disadvantages of Memoization**

1. **Memory Overhead**: Caching results consumes memory.
2. **Complexity**: Adds complexity to the code.
3. **Not Always Applicable**: Only useful for pure functions (functions that always return the same output for the same inputs).

---

### **10. Summary**

| Feature         | Description                                              | Example              |
| --------------- | -------------------------------------------------------- | -------------------- |
| **Memoization** | Caching function results to avoid redundant computations | `memoize(fibonacci)` |
| **Cache**       | Stores results for reuse                                 | `const cache = {};`  |
| **Use Cases**   | Recursive functions, expensive calculations, API calls   | Fibonacci, factorial |
| **Automation**  | Use a utility function to memoize any function           | `memoize(fn)`        |

**Example**:

```javascript
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const memoizedFib = memoize(fibonacci);
console.log(memoizedFib(10)); // Output: 55
```

By using memoization, you can significantly improve the performance of your JavaScript applications!
