### **Hoisting in JavaScript**

**Hoisting** is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in the code. However, it's important to understand how hoisting works with different types of declarations (`var`, `let`, `const`, and functions).

---

### **1. Variable Hoisting**

#### **a. `var` Hoisting**

- Variables declared with `var` are hoisted to the top of their function or global scope.
- They are initialized with `undefined` during the hoisting phase.

**Example**:

```javascript
console.log(x); // Output: undefined (hoisted but not initialized)
var x = 10;
console.log(x); // Output: 10
```

**Explanation**:

1. The declaration `var x` is hoisted to the top.
2. The variable `x` is initialized with `undefined`.
3. The assignment `x = 10` is executed during runtime.

---

#### **b. `let` and `const` Hoisting**

- Variables declared with `let` and `const` are also hoisted, but they are not initialized.
- They are placed in a **Temporal Dead Zone (TDZ)** until the declaration is encountered.

**Example**:

```javascript
console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;
console.log(x); // Output: 10
```

**Explanation**:

1. The declaration `let x` is hoisted to the top.
2. The variable `x` is in the TDZ and cannot be accessed until the declaration is encountered.
3. The assignment `x = 10` is executed during runtime.

---

### **2. Function Hoisting**

#### **a. Function Declarations**

- Function declarations are fully hoisted, meaning the entire function is moved to the top of the scope.
- You can call the function before its declaration in the code.

**Example**:

```javascript
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
```

**Explanation**:

1. The function `greet` is hoisted to the top.
2. The function can be called before its declaration.

---

#### **b. Function Expressions**

- Function expressions (assigned to variables) are not hoisted in the same way as function declarations.
- Only the variable declaration is hoisted, not the function assignment.

**Example**:

```javascript
greet(); // Error: greet is not a function

var greet = function () {
  console.log("Hello!");
};
```

**Explanation**:

1. The variable `greet` is hoisted and initialized with `undefined`.
2. The function assignment is not hoisted, so `greet` is `undefined` when called.

---

### **3. Hoisting in Different Scopes**

#### **a. Global Scope**

- Variables and functions declared in the global scope are hoisted to the top of the global scope.

**Example**:

```javascript
console.log(x); // Output: undefined
var x = 10;

greet(); // Output: Hello!
function greet() {
  console.log("Hello!");
}
```

---

#### **b. Function Scope**

- Variables and functions declared inside a function are hoisted to the top of the function scope.

**Example**:

```javascript
function test() {
  console.log(x); // Output: undefined
  var x = 10;

  greet(); // Output: Hello!
  function greet() {
    console.log("Hello!");
  }
}

test();
```

---

#### **c. Block Scope**

- Variables declared with `let` and `const` inside a block are hoisted to the top of the block but remain in the TDZ until the declaration is encountered.

**Example**:

```javascript
if (true) {
  console.log(x); // Error: Cannot access 'x' before initialization
  let x = 10;
  console.log(x); // Output: 10
}
```

---

### **4. Practical Examples**

#### **Example 1: Hoisting with `var`**

```javascript
console.log(x); // Output: undefined
var x = 10;
console.log(x); // Output: 10
```

#### **Example 2: Hoisting with `let`**

```javascript
console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;
console.log(x); // Output: 10
```

#### **Example 3: Hoisting with Function Declarations**

```javascript
greet(); // Output: Hello!

function greet() {
  console.log("Hello!");
}
```

#### **Example 4: Hoisting with Function Expressions**

```javascript
greet(); // Error: greet is not a function

var greet = function () {
  console.log("Hello!");
};
```

---

### **5. Common Pitfalls**

#### **Pitfall 1: Using `var` in Loops**

Using `var` in loops can lead to unexpected behavior due to hoisting.

**Example**:

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Output: 3 3 3
  }, 1000);
}
```

**Fix**: Use `let` to create a new block scope for each iteration.

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Output: 0 1 2
  }, 1000);
}
```

---

#### **Pitfall 2: Redeclaring Variables with `var`**

Redeclaring variables with `var` does not throw an error, which can lead to bugs.

**Example**:

```javascript
var x = 10;
var x = 20; // No error
console.log(x); // Output: 20
```

**Fix**: Use `let` or `const` to avoid accidental redeclaration.

```javascript
let x = 10;
let x = 20; // Error: Identifier 'x' has already been declared
```

---

### **6. Summary**

| Declaration Type         | Hoisting Behavior                        | Example                                   |
| ------------------------ | ---------------------------------------- | ----------------------------------------- |
| **`var`**                | Hoisted and initialized with `undefined` | `console.log(x); var x = 10;`             |
| **`let` and `const`**    | Hoisted but not initialized (TDZ)        | `console.log(x); let x = 10;`             |
| **Function Declaration** | Fully hoisted (entire function)          | `greet(); function greet() { ... }`       |
| **Function Expression**  | Variable hoisted, function not hoisted   | `greet(); var greet = function() { ... }` |

**Example**:

```javascript
console.log(x); // Output: undefined
var x = 10;

greet(); // Output: Hello!
function greet() {
  console.log("Hello!");
}
```

By understanding hoisting, you can write more predictable and maintainable JavaScript code!
