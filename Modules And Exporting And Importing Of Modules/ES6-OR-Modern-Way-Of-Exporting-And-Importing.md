In **ES6 modules (ECMAScript Modules - ESM)**, you have several ways to export code, providing flexibility for different use cases. Let me walk you through all the methods.

---

## 🚀 **1. Default Export (Single Export)**

Use `export default` when you want to export **one primary value** from a file.

### **Syntax:**

```javascript
// utils.js
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

**Import:**

```javascript
// app.js
import greet from "./utils.js";
greet("Ahmad"); // Hello, Ahmad!
```

**Key Points:**

- **Only one `export default` per module.**

- **Name during import can be anything** (e.g., `greet`, `hello`, `x`).

- Great for **single primary functionalities**.

---

## 🌟 **2. Named Exports (Multiple Exports)**

Use named exports when you want to **export multiple items** from a module.

### **Syntax:**

```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14159;
```

**Import:**

```javascript
// app.js
import { add, subtract, PI } from "./mathUtils.js";

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
console.log(PI); // 3.14159
```

**Key Points:**

- Use `{}` for named imports.

- **Names must match the export names** unless using `as` for renaming.

### **Renaming Named Imports:**

```javascript
import { add as sum } from "./mathUtils.js";
console.log(sum(5, 3)); // 8
```

---

### **3. Export an Object with Multiple Properties**

```javascript
// utils.js
module.exports = {
  greet: (name) => console.log(`Hello, ${name}!`),
  sum: (a, b) => a + b,
};
```

**Import & Use:**

```javascript
const utils = require("./utils");

utils.greet("Ahmad"); // Hello, Ahmad!

console.log(utils.sum(5, 3)); // 8
```

**Use Cases:**

- When exporting multiple functions/variables as an object.

---

## ⚡️ **4. Combined Default and Named Exports**

You can **mix default and named exports** in the same file.

### **Syntax:**

```javascript
// utils.js
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}

export const farewell = (name) => {
  console.log(`Goodbye, ${name}!`);
};
```

**Import:**

```javascript
// app.js
import greet, { farewell } from "./utils.js";

greet("Ahmad"); // Hello, Ahmad!
farewell("Ahmad"); // Goodbye, Ahmad!
```

**Key Points:**

- **Only one default export** but **multiple named exports** allowed.

- **Default import has no braces**; named imports need `{}`.

---

## 🔁 **5. Exporting Inline with Declarations**

You can export **directly alongside variable/function declarations**.

### **Syntax:**

```javascript
// utils.js
export const add = (a, b) => a + b;
export function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

---

## 📤 **6. Exporting After Declaration**

Instead of inline, you can **export at the end** of the file.

### **Syntax:**

```javascript
// utils.js
const add = (a, b) => a + b;
function greet(name) {
  console.log(`Hello, ${name}!`);
}

export { add, greet };
```

---

## 🛠️ **7. Re-exporting (Re-exports)**

You can **export from another module** without importing it first.

### **Syntax:**

```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// index.js (Re-export)
export * from "./mathUtils.js";
```

**Import:**

```javascript
// app.js
import { add, subtract } from "./index.js";

console.log(add(5, 2)); // 7
console.log(subtract(5, 2)); // 3
```

**Key Points:**

- `export *` re-exports all named exports.

- Useful when **creating library entry points**.

---

## 🔄 **8. Export with `as` Keyword (Renaming Exports)**

### **Syntax:**

```javascript
// utils.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export { add as sum, subtract as difference };
```

**Import:**

```javascript
import { sum, difference } from "./utils.js";

console.log(sum(5, 3)); // 8
console.log(difference(5, 3)); // 2
```

**Why Use It?**

- **Avoid naming conflicts** with imports from other modules.

---

## 🚨 **Key Differences:**

| **Feature**           | **Default Export**          | **Named Export**             |
| --------------------- | --------------------------- | ---------------------------- |
| **Syntax**            | `export default value`      | `export const name = value`  |
| **Import**            | `import anyName from '...'` | `import { name } from '...'` |
| **Multiple Allowed?** | ❌ No (only one)            | ✅ Yes (unlimited)           |
| **Renaming?**         | ✅ Any name allowed         | ✅ Must use `as` keyword     |

---

## 🧠 **Advanced Tips**

1. **Dynamic Imports:**  
   ES6 supports dynamic imports for lazy loading.

   ```javascript
   import("./utils.js").then((module) => {
     module.default("Ahmad"); // default export
     module.farewell("Ahmad"); // named export
   });
   ```

2. **Tree Shaking:**  
   **Named exports** allow better tree-shaking in bundlers like Webpack.

3. **Module Aggregation:**  
   Use `export * from '...'` to create **barrel files**.

---

**So, ES6 gives you a lot of flexibility!**  
Would you prefer `default`, `named`, or a combination for your next project? 😊

---

# Export & Import Constructor Function And Class

In **ES6**, you can export and import **constructor functions** and **classes** just like regular functions or objects. Let me break it down for you.

---

## 🛠️ **1. Export & Import Constructor Function**

### 🔹 **Exporting Constructor Function**

```javascript
// utils.js
export function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}
```

### 🔹 **Importing Constructor Function**

```javascript
// app.js
import { Person } from "./utils.js";

const ahmad = new Person("Ahmad", 25);
ahmad.greet(); // Hello, my name is Ahmad and I am 25 years old.
```

**Notes:**

- Must use **`new`** keyword when creating an object from a constructor.
- **Named exports** allow multiple functions/constructors in the same file.

---

## 🧑‍🏫 **2. Export & Import Class**

### 🔹 **Exporting Class**

```javascript
// user.js
export class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  getDetails() {
    return `Username: ${this.username}, Email: ${this.email}`;
  }
}
```

### 🔹 **Importing Class**

```javascript
// app.js
import { User } from "./user.js";

const user1 = new User("ahmad", "ahmad@example.com");
console.log(user1.getDetails()); // Username: ahmad, Email: ahmad@example.com
```

**Notes:**

- **Classes are imported the same way as functions.**
- **Must use `new` keyword** to instantiate.

---

## ⚡️ **3. Default Export for Constructor/Classes**

### 🔹 **Default Export (Constructor)**

```javascript
// utils.js
export default function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

**Import:**

```javascript
import Person from "./utils.js";
const ahmad = new Person("Ahmad", 25);
console.log(ahmad.name); // Ahmad
```

---

### 🔹 **Default Export (Class)**

```javascript
// user.js
export default class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  getDetails() {
    return `Username: ${this.username}, Email: ${this.email}`;
  }
}
```

**Import:**

```javascript
import User from "./user.js";

const user1 = new User("ahmad", "ahmad@example.com");
console.log(user1.getDetails()); // Username: ahmad, Email: ahmad@example.com
```

---

## 🌟 **4. Mixed Exports (Class + Helper Functions)**

```javascript
// utils.js
export class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  getDetails() {
    return `Username: ${this.username}, Email: ${this.email}`;
  }
}

export function greet(user) {
  console.log(`Hello, ${user.username}!`);
}

export default function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

**Import:**

```javascript
import Person, { User, greet } from "./utils.js";

const user = new User("ahmad", "ahmad@example.com");
greet(user); // Hello, ahmad!

const person = new Person("John", 30);
console.log(person.name); // John
```

---

## 🔄 **5. Re-export Classes/Constructor Functions**

If you want to **re-export** constructors or classes from another module:

```javascript
// index.js
export { User } from "./user.js";
export { Person } from "./utils.js";
```

**Import:**

```javascript
import { User, Person } from "./index.js";

const user = new User("Ahmad", "ahmad@example.com");
const person = new Person("John", 30);

console.log(user.getDetails()); // Username: Ahmad, Email: ahmad@example.com
console.log(person.name); // John
```

---

## 🚀 **6. Dynamic Import (with Constructor/Classes)**

```javascript
// app.js
import("./user.js").then((module) => {
  const User = module.User;
  const user = new User("Ahmad", "ahmad@example.com");
  console.log(user.getDetails());
});
```

**Why use this?**

- For **lazy loading** classes/functions when needed.

---

## 🔍 **Summary:**

| **Export Type**      | **Syntax**                         | **Import Syntax**                 |
| -------------------- | ---------------------------------- | --------------------------------- |
| **Named Function**   | `export function Person() {}`      | `import { Person } from './file'` |
| **Default Function** | `export default function Person()` | `import Person from './file'`     |
| **Named Class**      | `export class User {}`             | `import { User } from './file'`   |
| **Default Class**    | `export default class User`        | `import User from './file'`       |
| **Mixed Exports**    | `export class X; export default Y` | `import Y, { X } from './file'`   |
| **Re-export**        | `export * from './file'`           | `import { X } from './file'`      |

---

**Now you can handle constructors and classes like a pro!** 😊
