JavaScript provides several types of loops to execute a block of code repeatedly until a specific condition is met. Let's go through each type with detailed explanations and examples.

---

### **1. `for` Loop (Entry Controlled)**

**Use case:** When you know how many times you want to loop.

**Syntax:**

```javascript
for (initialization; condition; increment / decrement) {
  // code to be executed
}
```

**Example:**

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Explanation:**

1. `let i = 1`: Initializes `i` to 1.
2. `i <= 5`: Loop runs while `i` is less than or equal to 5.
3. `i++`: Increments `i` by 1 after each iteration.

**Output:**

```plaintext
1 2 3 4 5
```

---

### **2. `while` Loop (Entry Controlled)**

**Use case:** When you don't know the exact number of iterations but want to run until a condition is false.

**Syntax:**

```javascript
while (condition) {
  // code to execute
}
```

**Example:**

```javascript
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
```

**Explanation:**

- It checks the condition **before** executing the loop.

- Continues until `count` becomes 6.

**Output:**

```plaintext
1 2 3 4 5
```

---

### **3. `do...while` Loop (Exit Controlled)**

**Use case:** When you want to ensure the loop runs **at least once** regardless of the condition.

**Syntax:**

```javascript
do {
  // code to execute
} while (condition);
```

**Example:**

```javascript
let num = 6;
do {
  console.log(num);
  num++;
} while (num <= 5);
```

**Explanation:**

- The loop runs once **even though** the condition `num <= 5` is false from the start.

**Output:**

```plaintext
6
```

---

### **4. `for...in` Loop (Object Iteration)**

**Use case:** To iterate over the **keys** of an object.

**Syntax:**

```javascript
for (let key in object) {
  // code to execute
}
```

**Example:**

```javascript
const student = { name: "Ahmad", age: 24, course: "BCA" };

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
```

**Explanation:**

- Iterates over each **property name** of the `student` object.

**Output:**

```plaintext
name: Ahmad
age: 24
course: BCA
```

**⚠️ Caution:** Avoid using `for...in` on arrays as it can produce unexpected results.

---

### **5. `for...of` Loop (Iterable Iteration)**

**Use case:** To iterate over **iterable objects** like arrays, strings, maps, sets, etc.

**Syntax:**

```javascript
for (let value of iterable) {
  // code to execute
}
```

**Example:**

```javascript
const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

**Explanation:**

- Directly accesses **values** instead of keys.

**Output:**

```plaintext
apple
banana
mango
```

---

### **6. `forEach()` Method (Array Method)**

**Use case:** When you need to **execute a function** for each element in an array.

**Syntax:**

```javascript
array.forEach(callbackFunction);
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});
```

**Explanation:**

- Executes the callback for each element.

**Output:**

```plaintext
2 4 6 8 10
```

**⚠️ Limitation:** You **cannot use `break` or `continue`** here.

---

### **4. Comparison Table**

| Loop Type             | Description                                                                     | Example                          |
| --------------------- | ------------------------------------------------------------------------------- | -------------------------------- |
| **`for` Loop**        | Iterates a block of code a specific number of times                             | `for (let i = 0; i < 5; i++) {}` |
| **`while` Loop**      | Executes a block of code as long as a condition is `true`                       | `while (i < 5) {}`               |
| **`do...while` Loop** | Executes a block of code at least once, then repeats if the condition is `true` | `do { ... } while (i < 5);`      |
| **`for...in` Loop**   | Iterates over the enumerable properties of an object                            | `for (let key in obj) {}`        |
| **`for...of` Loop**   | Iterates over iterable objects (arrays, strings, etc.)                          | `for (let value of arr) {}`      |
| **`break`**           | Exits the loop immediately                                                      | `if (i === 5) { break; }`        |
| **`continue`**        | Skips the current iteration                                                     | `if (i === 2) { continue; }`     |

---

### **5. Best Use Case**

| **Loop Type** | **Best Use Case**                  |
| ------------- | ---------------------------------- |
| `for`         | Counting or range-based iterations |
| `while`       | Event-driven conditions            |
| `do...while`  | Must execute at least once         |
| `for...in`    | Objects with key-value pairs       |
| `for...of`    | Arrays, strings, maps, sets        |
| `forEach`     | Arrays when no `break` is needed   |

---

### **Key Insights**

- **`for` vs `while`:** Use `for` when you know the number of iterations. Use `while` when you only know the stopping condition.

- **`for...in` vs `for...of`:** Use `for...in` for objects, `for...of` for arrays.

- **Arrow functions in loops:** Arrow functions are great for `forEach`, but **avoid them in object methods** if `this` is needed.

Would you like me to add some **visual diagrams** to explain the execution flow? 😊
