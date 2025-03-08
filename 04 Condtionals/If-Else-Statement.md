The **`if/else` statement** in JavaScript is a control structure that allows you to execute different blocks of code based on whether a condition is `true` or `false`. It is one of the most fundamental tools for decision-making in programming.

---

### **1. Syntax of `if/else`**

#### **Basic Structure**

```javascript
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}
```

- **`condition`**: An expression that evaluates to `true` or `false`.
- **`if` block**: Executed if the condition is `true`.
- **`else` block**: Executed if the condition is `false`.

---

### **2. Simple `if` Statement**

If the condition is `true`, the code inside the `if` block is executed.

**Example**:

```javascript
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
// Output: You are an adult.
```

---

### **3. `if/else` Statement**

If the condition is `true`, the `if` block is executed. Otherwise, the `else` block is executed.

**Example**:

```javascript
let age = 15;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: You are a minor.
```

---

### **4. `else if` Statement**

Use `else if` to test multiple conditions. The first condition that evaluates to `true` will execute its block, and the rest will be skipped.

**Example**:

```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Output: Grade: B
```

---

### **5. Nested `if/else` Statements**

You can nest `if/else` statements inside other `if/else` statements to handle more complex logic.

**Example**:

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive.");
  } else {
    console.log("You need a license to drive.");
  }
} else {
  console.log("You are too young to drive.");
}
// Output: You can drive.
```

---

### **6. Truthy and Falsy Values**

In JavaScript, conditions are evaluated based on **truthy** and **falsy** values:

- **Falsy Values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
- **Truthy Values**: Everything else.

**Example**:

```javascript
let name = ""; // Falsy value
if (name) {
  console.log("Name is provided.");
} else {
  console.log("Name is missing.");
}
// Output: Name is missing.
```

---

### **7. Ternary Operator as a Shortcut**

The ternary operator (`? :`) is a shorthand for `if/else`.

**Syntax**:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

**Example**:

```javascript
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Output: Adult
```

---

### **8. Practical Examples**

#### Example 1: Checking Even or Odd

```javascript
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
// Output: Odd
```

#### Example 2: Login System

```javascript
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful.");
} else {
  console.log("Invalid credentials.");
}
// Output: Login successful.
```

#### Example 3: Discount Calculation

```javascript
let total = 120;
let discount;

if (total > 100) {
  discount = 10;
} else if (total > 50) {
  discount = 5;
} else {
  discount = 0;
}

console.log(`Discount: ${discount}%`);
// Output: Discount: 10%
```

---

### **9. Common Mistakes**

#### Mistake 1: Using `=` Instead of `===`

```javascript
let age = 18;
if ((age = 20)) {
  // Mistake: = is assignment, not comparison
  console.log("Age is 20.");
}
// Fix: Use === for comparison
if (age === 20) {
  console.log("Age is 20.");
}
```

#### Mistake 2: Forgetting Braces `{}`

```javascript
let age = 20;
if (age >= 18) console.log("Adult"); // Only this line is part of the if block
console.log("You can vote."); // This line always executes
// Fix: Use braces for multiple statements
if (age >= 18) {
  console.log("Adult");
  console.log("You can vote.");
}
```

---

### **10. Summary**

The `if/else` statement is a powerful tool for controlling the flow of your program based on conditions. Key points:

- Use `if` for a single condition.
- Use `else` for an alternative action.
- Use `else if` for multiple conditions.
- Nest `if/else` for complex logic.
- Be mindful of truthy and falsy values.

**Example**:

```javascript
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cold outside.");
}
// Output: It's warm outside.
```

By mastering `if/else`, you can make your programs more dynamic and responsive!
