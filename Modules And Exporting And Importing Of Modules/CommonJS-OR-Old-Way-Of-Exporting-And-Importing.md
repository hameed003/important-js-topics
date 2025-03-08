Yes! In **CommonJS**, there are multiple ways to export modules beyond `module.exports` and `exports`. Let me walk you through all possible patterns:

---

## 🚀 **1. Exporting with `module.exports` (Most Common)**

### **a. Export a Single Function or Object**

```javascript
// utils.js
module.exports = function greet(name) {
  console.log(`Hello, ${name}!`);
};
```

**Import & Use:**

```javascript
const greet = require("./utils");

greet("Ahmad"); // Hello, Ahmad!
```

**Use Cases:**

- Single function or single object.

- Replaces the entire `module.exports`.

---

### **b. Export an Object with Multiple Properties**

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

## 🔀 **2. Exporting with `exports` (Shorthand)**

### **a. Add Properties to `exports`**

```javascript
// utils.js
exports.greet = (name) => console.log(`Hello, ${name}!`);
exports.sum = (a, b) => a + b;
```

**Import & Use:**

```javascript
const utils = require("./utils");
utils.greet("Ahmad"); // Hello, Ahmad!
console.log(utils.sum(5, 3)); // 8
```

**How it Works:**

- `exports` is a reference to `module.exports`.

- **⚠️ Pitfall:** If you assign `exports` directly (like `exports = {}`), it breaks the link.

### **b. Incorrect Usage (Mistake)**

```javascript
// Incorrect usage
exports = { greet: (name) => console.log(`Hello, ${name}!`) };
```

This won't work as expected because it breaks the reference to `module.exports`.

---

## ⚡ **3. Exporting Instances (Singleton Pattern)**

Common for classes and objects that need shared state.

```javascript
// counter.js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
    return this.count;
  }
}

module.exports = new Counter();
```

**Import & Use:**

```javascript
const counter = require("./counter");
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
```

**Key Insight:**

- The same instance is shared across all `require` calls.

---

## 🧩 **4. Exporting a Constructor/Prototype**

```javascript
// User.js
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello, ${this.name}!`);
};

module.exports = User;
```

**Import & Instantiate:**

```javascript
const User = require("./User");
const user1 = new User("Ahmad");
user1.greet(); // Hello, Ahmad!
```

**Use Case:**

- When you want consumers to create multiple instances.

---

# Doubt

we are using `new` keyword here while exporting `module.exports = new Counter();` but why we are not using `new` keyword here while exporting `module.exports = User;`

# Solution:

The difference comes from whether you want to export an **instance** of a class or the **class definition** itself.

### 🧠 **1. `module.exports = new Counter();`**

- Here, you're **exporting an instance** of the `Counter` class.
- **`new`** is used because you're calling the constructor immediately and exporting **a single shared instance**.
- **Every file that imports this module will share the same instance**.

#### 🛠️ **Example:**

```javascript
// counter.js
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  getCount() {
    return this.count;
  }
}

module.exports = new Counter(); // exporting an instance
```

**Import and Usage:**

```javascript
// app.js
const counter1 = require("./counter");
const counter2 = require("./counter");

counter1.increment();
console.log(counter1.getCount()); // 1
console.log(counter2.getCount()); // 1 (same instance)
```

**Why?**

- **Singleton pattern**: Every `require('./counter')` returns the same object, **not a new instance**.
- Useful when you want to maintain shared state (like caches, config objects, or counters).

---

### 🛠️ **2. `module.exports = User;`**

- Here, you're exporting the **class definition** itself, **not an instance**.
- You don't use `new` because you're giving the importer the **flexibility** to create instances as needed.
- **Each import can create independent instances**.

#### 🛠️ **Example:**

```javascript
// user.js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

module.exports = User; // exporting the class itself
```

**Import and Usage:**

```javascript
// app.js
const User = require("./user");

const user1 = new User("Ahmad");
const user2 = new User("John");

user1.greet(); // Hello, Ahmad!
user2.greet(); // Hello, John!
```

**Why?**

- Each `new User()` creates a fresh, separate object.
- **More flexible** than exporting an instance if you need multiple independent objects.

---

### ⚔️ **Key Differences**

| **Aspect**              | **`module.exports = new Counter();`** | **`module.exports = User;`**         |
| ----------------------- | ------------------------------------- | ------------------------------------ |
| **What is exported?**   | An **instance** (object)              | A **class** (constructor)            |
| **When is `new` used?** | **Immediately** during export         | Later, when importing                |
| **Instance sharing**    | **Yes** (shared across imports)       | **No** (new instance every time)     |
| **Flexibility**         | Less (only one instance)              | More (can create multiple instances) |

---

### 🎯 **When to Use What?**

- ✅ **Use `new Counter()`** when you need a **singleton** or **shared state** (like caches, counters, or services).
- ✅ **Use `User`** when you want to give the consumer **control** over instance creation, especially when you need **multiple objects**.

---

**In short:**

- **`module.exports = new Counter();`** → Shared instance (singleton).
- **`module.exports = User;`** → Class definition for flexible instance creation.

---

## 🔄 **5. Exporting with Dynamic Properties**

You can dynamically add properties to `module.exports`.

```javascript
// dynamicUtils.js
const utils = {};
utils.greet = (name) => `Hello, ${name}!`;
utils.sum = (a, b) => a + b;

module.exports = utils;
```

**Import & Use:**

```javascript
const utils = require("./dynamicUtils");
console.log(utils.greet("Ahmad")); // Hello, Ahmad!
console.log(utils.sum(5, 7)); // 12
```

**Use Case:**

- When properties are determined at runtime.

---

## 🛠️ **6. Exporting Immediately Invoked Function (IIFE)**

This allows immediate execution and export.

```javascript
// utils.js
module.exports = (function () {
  const secret = "Hidden Message";
  return {
    getSecret: () => secret,
  };
})();
```

**Import & Use:**

```javascript
const utils = require("./utils");
console.log(utils.getSecret()); // Hidden Message
```

**Use Case:**

- Encapsulation with closures.

---

## 🎯 **7. Exporting with `Object.defineProperty` (Advanced)**

```javascript
// utils.js
Object.defineProperty(exports, "greet", {
  value: (name) => console.log(`Hello, ${name}!`),
  enumerable: true,
});
```

**Import & Use:**

```javascript
const utils = require("./utils");
utils.greet("Ahmad"); // Hello, Ahmad!
```

**Use Case:**

- When you need more control over property descriptors.

---

## 🌟 **8. Exporting Functions Immediately After Declaration**

```javascript
// utils.js
module.exports.greet = (name) => console.log(`Hello, ${name}!`);
module.exports.sum = (a, b) => a + b;
```

**Import & Use:**

```javascript
const { greet, sum } = require("./utils");
greet("Ahmad"); // Hello, Ahmad!
console.log(sum(5, 3)); // 8
```

**Equivalent to:**

```javascript
exports.greet = (name) => console.log(`Hello, ${name}!`);
exports.sum = (a, b) => a + b;
```

---

## 🧠 **Key Differences:**

| **Approach**            | **Flexibility** | **Safety** | **Notes**                                    |
| ----------------------- | --------------- | ---------- | -------------------------------------------- |
| `module.exports`        | ✅ High         | ✅ High    | Standard and safest approach.                |
| `exports.property`      | ✅ Medium       | ⚠️ Low     | Breaks if `exports` is reassigned.           |
| Singleton Pattern       | ✅ High         | ✅ High    | Shared state across all imports.             |
| Constructor/Prototype   | ✅ High         | ✅ High    | Good for OOP-based modules.                  |
| Dynamic Properties      | ✅ High         | ✅ High    | Useful for runtime-generated properties.     |
| IIFE                    | ⚠️ Low          | ✅ High    | Encapsulates private state.                  |
| `Object.defineProperty` | ⚠️ Low          | ⚠️ Low     | Rarely needed unless special configs needed. |

---

## 🎓 **Best Practices**

1. **Use `module.exports` when exporting objects or functions.**

2. **Use `exports` only for adding properties, not reassigning it entirely.**

3. **Prefer named exports when exporting multiple utilities.**

4. **Singletons are great for shared resources like database connections.**

---

Would you like practical examples for any specific export pattern? 😊

## 🛠️ **Default Export**

In **CommonJS**, there isn't a `default export` like in **ES Modules** (which use `export default`). However, **you can achieve similar behavior** by assigning a single function, object, or class to `module.exports`.

Let me explain how to mimic **default exports** in CommonJS.

---

## 🌟 **1. Simulating Default Export with `module.exports`**

In CommonJS, **whatever you assign to `module.exports` becomes the "default export"** when you import it.

### **Example:**

```javascript
// utils.js
module.exports = function greet(name) {
  console.log(`Hello, ${name}!`);
};
```

**Import & Use:**

```javascript
// app.js
const greet = require("./utils");
greet("Ahmad"); // Hello, Ahmad!
```

**Explanation:**

- Since we assigned a single function to `module.exports`, it acts like a default export.

- This approach is **clean and intuitive** for single-utility modules.

---

## 🌟 **2. Exporting an Object as a Default**

You can also assign an object to `module.exports`, which behaves like a default export containing multiple methods.

### **Example:**

```javascript
// utils.js
module.exports = {
  greet: (name) => console.log(`Hello, ${name}!`),
  sum: (a, b) => a + b,
};
```

**Import & Use:**

```javascript
// app.js
const utils = require("./utils");

utils.greet("Ahmad"); // Hello, Ahmad!

console.log(utils.sum(5, 3)); // 8
```

**How it's Similar to Default Exports:**

- The entire object is the "default" export.

- This pattern is common for utility libraries like `lodash`.

---

## 🌟 **3. Dynamic Default Export with a Class**

### **Example:**

```javascript
// User.js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

module.exports = User;
```

**Import & Use:**

```javascript
// app.js
const User = require("./User");

const user = new User("Ahmad");
user.greet(); // Hello, Ahmad!
```

**Why It Feels Like Default Export:**

- Similar to how `export default class User` would work in ES Modules.

---

## 🚨 **Important Distinction: `module.exports` vs `exports`**

### ❌ Incorrect Default Export:

```javascript
// utils.js
exports = function greet(name) {
  console.log(`Hello, ${name}!`);
};
```

**Import:**

```javascript
const greet = require("./utils");

greet("Ahmad"); // ❌ Error: greet is not a function
```

**Explanation:**

- **`exports` is just a reference to `module.exports`.**

- When you assign `exports` directly, you break the link with `module.exports`.

---

## 🔀 **4. Mixing Named and Default-like Exports**

You can have a "default-like" export along with named exports.

### **Example:**

```javascript
// utils.js
const greet = (name) => console.log(`Hello, ${name}!`);

const sum = (a, b) => a + b;

// Assign default-like export
module.exports = greet;
// Add named exports
module.exports.sum = sum;
```

**Import & Use:**

```javascript
const utils = require("./utils");

utils("Ahmad"); // Calls default-like export → Hello, Ahmad!

console.log(utils.sum(5, 3)); // Named export → 8
```

**How This Works:**

- `module.exports` is initially a function.

- **But functions in JavaScript are objects**—so we can add properties to them like `.sum`.

---

## 🚀 **Key Takeaways**

- **Default export in CommonJS** = `module.exports = <value>`

- **Don't assign directly to `exports`** if you want a default export.

- **You can mimic ES6-like behavior** with a combination of functions and properties.

---

### 🤔 **Still confused?**

Think of **CommonJS `module.exports`** as the equivalent of **ES Modules' `export default`**.
