Yes, in **CommonJS** (Node.js), there are several ways to export a module. Let's explore all the valid ways to export modules using CommonJS syntax, along with examples.

---

### **1. Exporting as an Object**

You can export multiple values as properties of an object using `module.exports`.

#### Example:

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
```

**Import**:

```javascript
const math = require("./math.js");
console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2
```

---

### **2. Exporting a Single Value (Default Export)**

You can export a single value (function, object, or primitive) by assigning it directly to `module.exports`.

#### Example:

```javascript
// math.js
const add = (a, b) => a + b;

module.exports = add;
```

**Import**:

```javascript
const add = require("./math.js");
console.log(add(2, 3)); // 5
```

---

### **3. Adding Properties to `exports`**

You can add properties to the `exports` object, which is a reference to `module.exports`.

#### Example:

```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

**Import**:

```javascript
const math = require("./math.js");
console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2
```

---

### **4. Mixing `module.exports` and `exports`**

You can mix `module.exports` and `exports` to add properties incrementally.

#### Example:

```javascript
// math.js
module.exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

**Import**:

```javascript
const math = require("./math.js");
console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2
```

---

### **5. Exporting a Class**

You can export a class using `module.exports`.

#### Example:

```javascript
// math.js
class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
}

module.exports = Calculator;
```

**Import**:

```javascript
const Calculator = require("./math.js");
const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
```

---

### **6. Exporting a Function with Properties**

You can export a function and attach additional properties to it.

#### Example:

```javascript
// math.js
function add(a, b) {
  return a + b;
}

add.subtract = (a, b) => a - b;

module.exports = add;
```

**Import**:

```javascript
const math = require("./math.js");
console.log(math(2, 3)); // 5 (calls the add function)
console.log(math.subtract(5, 3)); // 2
```

---

### **7. Exporting an Immediately Invoked Function Expression (IIFE)**

You can export the result of an IIFE.

#### Example:

```javascript
// math.js
module.exports = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  return { add, subtract };
})();
```

**Import**:

```javascript
const math = require("./math.js");
console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2
```

---

### **8. Exporting a Dynamic Object**

You can dynamically create and export an object.

#### Example:

```javascript
// math.js
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

module.exports = operations;
```

**Import**:

```javascript
const math = require("./math.js");
console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2
```

---

### **9. Exporting a Singleton Object**

You can export a singleton object that is instantiated only once.

#### Example:

```javascript
// math.js
class Calculator {
  constructor() {
    if (!Calculator.instance) {
      Calculator.instance = this;
    }
    return Calculator.instance;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

module.exports = new Calculator();
```

**Import**:

```javascript
const calc = require("./math.js");
console.log(calc.add(2, 3)); // 5
```

---

### **10. Exporting a Configuration Object**

You can export a configuration object with predefined values.

#### Example:

```javascript
// config.js
module.exports = {
  port: 3000,
  db: {
    host: "localhost",
    user: "root",
    password: "password",
  },
};
```

**Import**:

```javascript
const config = require("./config.js");
console.log(config.port); // 3000
```

---

### **Summary of CommonJS Export Methods**

| Method                                | Example                                     | Use Case                            |
| ------------------------------------- | ------------------------------------------- | ----------------------------------- |
| **Export as an object**               | `module.exports = { add, subtract };`       | Named exports                       |
| **Export a single value**             | `module.exports = add;`                     | Default export                      |
| **Add properties to `exports`**       | `exports.add = add;`                        | Named exports (shorthand)           |
| **Export a class**                    | `module.exports = Calculator;`              | Exporting a class                   |
| **Export a function with properties** | `module.exports = add; add.subtract = ...;` | Function with additional properties |
| **Export an IIFE**                    | `module.exports = (() => { ... })();`       | Dynamic exports                     |
| **Export a dynamic object**           | `module.exports = operations;`              | Dynamically created object          |
| **Export a singleton**                | `module.exports = new Calculator();`        | Singleton pattern                   |
| **Export a configuration**            | `module.exports = { port: 3000 };`          | Configuration object                |

---

### **Key Points**

- Use `module.exports` to replace the entire exported object or export a single value.
- Use `exports` to add properties to the exported object incrementally.
- Avoid reassigning `exports` directly (e.g., `exports = { ... }`), as it breaks the reference to `module.exports`.

By understanding these methods, you can choose the best approach for exporting modules in your Node.js applications!
