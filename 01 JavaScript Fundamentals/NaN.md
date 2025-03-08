`NaN` (Not-a-Number) is a special value in JavaScript that represents an invalid number. It is a property of the global `Number` object and is returned when a mathematical operation or function fails to produce a valid number. Here's a detailed explanation of `NaN` with examples:

---

### **What is `NaN`?**

- `NaN` is a value of the `Number` type.
- It is the result of an operation that cannot produce a meaningful number.
- `NaN` is the only value in JavaScript that is not equal to itself (`NaN === NaN` returns `false`).

---

### **Common Scenarios Where `NaN` Occurs**

#### 1. **Invalid Mathematical Operations**

```javascript
console.log(0 / 0); // Output: NaN
console.log(Math.sqrt(-1)); // Output: NaN
console.log("abc" / 2); // Output: NaN
```

#### 2. **Parsing Non-Numeric Strings**

```javascript
console.log(parseInt("Hello")); // Output: NaN
console.log(Number("123abc")); // Output: NaN
```

#### 3. **Using `NaN` in Operations**

```javascript
console.log(NaN + 5); // Output: NaN
console.log(NaN * 10); // Output: NaN
```

---

### **Checking for `NaN`**

Since `NaN` is not equal to itself, you cannot use `===` or `==` to check for it. Instead, use the `isNaN()` function or `Number.isNaN()`.

#### **`isNaN()`**

Checks if a value is `NaN` or cannot be converted to a number.

```javascript
console.log(isNaN(NaN)); // Output: true
console.log(isNaN("Hello")); // Output: true (cannot be converted to a number)
console.log(isNaN(123)); // Output: false
```

#### **`Number.isNaN()`**

Checks if a value is exactly `NaN` (strict check).

```javascript
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN("Hello")); // Output: false (not exactly NaN)
console.log(Number.isNaN(123)); // Output: false
```

---

### **Examples of `NaN` in Action**

#### Example 1: Invalid Operations

```javascript
let result = "abc" * 10;
console.log(result); // Output: NaN
console.log(typeof result); // Output: number (NaN is of type number)
```

#### Example 2: Checking for `NaN`

```javascript
let value = Math.sqrt(-1);
if (Number.isNaN(value)) {
  console.log("Invalid operation: Result is NaN");
} else {
  console.log("Valid operation");
}
// Output: Invalid operation: Result is NaN
```

#### Example 3: `NaN` in Comparisons

```javascript
console.log(NaN === NaN); // Output: false
console.log(NaN == NaN); // Output: false
console.log(isNaN(NaN)); // Output: true
```

---

### **Key Points About `NaN`**

1. **Type of `NaN`**: `NaN` is of type `number`.
   ```javascript
   console.log(typeof NaN); // Output: number
   ```
2. **Propagation**: Any operation involving `NaN` results in `NaN`.
   ```javascript
   console.log(NaN + 10); // Output: NaN
   console.log(NaN * 5); // Output: NaN
   ```
3. **Equality Check**: Use `Number.isNaN()` or `isNaN()` to check for `NaN`.
4. **Common Causes**: Invalid math operations, parsing non-numeric strings.

---

### **Summary Table**

| Feature             | Example                 | Output   |
| ------------------- | ----------------------- | -------- |
| Invalid Operation   | `0 / 0`                 | `NaN`    |
| Parsing Non-Numeric | `Number("abc")`         | `NaN`    |
| Type of `NaN`       | `typeof NaN`            | `number` |
| Equality Check      | `NaN === NaN`           | `false`  |
| `isNaN()`           | `isNaN("Hello")`        | `true`   |
| `Number.isNaN()`    | `Number.isNaN("Hello")` | `false`  |

---

### **Best Practices**

1. Use `Number.isNaN()` for strict `NaN` checks.
2. Avoid operations that can result in `NaN` (e.g., dividing by zero, parsing invalid numbers).
3. Validate user input to prevent `NaN` in calculations.

Understanding `NaN` is crucial for debugging and ensuring your code handles invalid numeric operations gracefully!
