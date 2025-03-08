# Operators And Operator Precedence

In JavaScript, **operators** are symbols or keywords used to perform operations on values and variables. **Operator precedence** determines the order in which operations are evaluated when multiple operators are present in an expression. Let's dive into the details with examples.

---

### **1. Types of Operators**

#### **a. Arithmetic Operators**

Used for mathematical operations.

| Operator | Description         | Example          | Result |
| -------- | ------------------- | ---------------- | ------ |
| `+`      | Addition            | `10 + 5`         | `15`   |
| `-`      | Subtraction         | `10 - 5`         | `5`    |
| `*`      | Multiplication      | `10 * 5`         | `50`   |
| `/`      | Division            | `10 / 5`         | `2`    |
| `%`      | Modulus (Remainder) | `10 % 3`         | `1`    |
| `**`     | Exponentiation      | `2 ** 3`         | `8`    |
| `++`     | Increment           | `let x = 5; x++` | `6`    |
| `--`     | Decrement           | `let x = 5; x--` | `4`    |

**Example**:

```javascript
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a ** b); // Output: 100000 (10^5)
```

---

#### **b. Assignment Operators**

Used to assign values to variables.

| Operator | Description         | Example       | Result    |
| -------- | ------------------- | ------------- | --------- |
| `=`      | Assignment          | `let x = 10;` | `x = 10`  |
| `+=`     | Add and assign      | `x += 5;`     | `x = 15`  |
| `-=`     | Subtract and assign | `x -= 5;`     | `x = 5`   |
| `*=`     | Multiply and assign | `x *= 2;`     | `x = 20`  |
| `/=`     | Divide and assign   | `x /= 2;`     | `x = 5`   |
| `%=`     | Modulus and assign  | `x %= 3;`     | `x = 1`   |
| `**=`    | Exponent and assign | `x **= 2;`    | `x = 100` |

**Example**:

```javascript
let x = 10;
x += 5; // x = x + 5
console.log(x); // Output: 15
```

---

#### **c. Comparison Operators**

Used to compare values.

| Operator | Description           | Example       | Result  |
| -------- | --------------------- | ------------- | ------- |
| `==`     | Equal to              | `10 == "10"`  | `true`  |
| `===`    | Strict equal to       | `10 === "10"` | `false` |
| `!=`     | Not equal to          | `10 != 5`     | `true`  |
| `!==`    | Strict not equal to   | `10 !== "10"` | `true`  |
| `>`      | Greater than          | `10 > 5`      | `true`  |
| `<`      | Less than             | `10 < 5`      | `false` |
| `>=`     | Greater than or equal | `10 >= 10`    | `true`  |
| `<=`     | Less than or equal    | `10 <= 5`     | `false` |

**Example**:

```javascript
console.log(10 == "10"); // Output: true (loose equality)
console.log(10 === "10"); // Output: false (strict equality)
```

---

#### **d. Logical Operators**

Used to combine or negate conditions.
| **Operator** | **Description** | **Example** | **Result** |
|---------------|-----------------|---------------|-----------|
| `&&` | Logical AND | `true && false` | `false` |
| `\|\|` | Logical OR | `true \|\| false` | `true` |
| `!` | Logical NOT | `!true` | `false` |

**Example**:

```javascript
let isLogged = true;
let isAdmin = false;
console.log(isLogged && isAdmin); // Output: false
console.log(isLogged || isAdmin); // Output: true
console.log(!isLogged); // Output: false
```

---

#### **e. Ternary Operator**

A shorthand for `if-else`.

| Operator | Description | Example                 | Result  |
| -------- | ----------- | ----------------------- | ------- |
| `? :`    | Ternary     | `10 > 5 ? "Yes" : "No"` | `"Yes"` |

**Example**:

```javascript
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Output: Adult
```

---

#### **f. Other Operators**

- **Typeof Operator**: Returns the type of a value.
  ```javascript
  console.log(typeof 42); // Output: number
  ```
- **Comma Operator**: Evaluates multiple expressions and returns the last one.
  ```javascript
  let x = (1, 2, 3); // x = 3
  ```

---

### **2. Operator Precedence**

Operator precedence determines the order in which operations are evaluated. Higher precedence operators are evaluated first.

#### **Precedence Table (Top to Bottom)**

| **Precedence** | **Operator Type**   | **Example Operators**       |
| -------------- | ------------------- | --------------------------- |
| **Highest**    | Grouping            | `()`                        |
|                | Member Access       | `.`, `[]`                   |
|                | Function Call       | `()`                        |
|                | Increment/Decrement | `++`, `--`                  |
|                | Logical NOT         | `!`                         |
|                | Arithmetic          | `*`, `/`, `%`, `+`, `-`     |
|                | Comparison          | `<`, `>`, `<=`, `>=`        |
|                | Equality            | `==`, `===`, `!=`, `!==`    |
|                | Logical AND         | `&&`                        |
|                | Logical OR          | `\|\|`                      |
| **Lowest**     | Assignment          | `=`, `+=`, `-=`, `*=`, etc. |

---

### **Examples of Operator Precedence**

#### Example 1: Arithmetic Operators

```javascript
let result = 10 + 5 * 2; // Multiplication has higher precedence
console.log(result); // Output: 20 (5 * 2 = 10, then 10 + 10 = 20)
```

#### Example 2: Grouping with `()`

```javascript
let result = (10 + 5) * 2; // Grouping has highest precedence
console.log(result); // Output: 30 (10 + 5 = 15, then 15 * 2 = 30)
```

#### Example 3: Logical Operators

```javascript
let a = true;
let b = false;
let c = true;
console.log((a && b) || c); // Output: true (&& has higher precedence than ||)
```

#### Example 4: Assignment Operators

```javascript
let x = 10;
x += 5 * 2; // Multiplication has higher precedence
console.log(x); // Output: 20 (5 * 2 = 10, then 10 + 10 = 20)
```

---

### **Key Takeaways**

1. **Operators**: Perform operations on values and variables.
2. **Precedence**: Determines the order of evaluation.
3. **Grouping**: Use `()` to override precedence.
4. **Common Operators**: Arithmetic, assignment, comparison, logical, ternary.

Understanding operators and precedence is crucial for writing correct and efficient JavaScript code!
