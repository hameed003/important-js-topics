The behavior you're observing is due to the way **arrow functions** handle the `this` keyword in JavaScript. Let's break it down step by step.

---

## **Why `this` Refers to the Global Scope**

### **1. Arrow Functions and `this`**

Arrow functions do not have their own `this` binding. Instead, they inherit the `this` value from the **surrounding lexical scope** (the scope in which the arrow function is defined).

In your example:

```javascript
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // `this` refers to the global object
  },
};

obj.greet(); // Output: undefined
```

- The `greet` function is an **arrow function**.
- Arrow functions do not have their own `this`. Instead, they use the `this` value of the **enclosing lexical scope**.
- In this case, the enclosing lexical scope is the **global scope** (or the module scope in Node.js), not the `obj` object.

---

### **2. Surrounding Lexical Scope**

The **surrounding lexical scope** of the `greet` function is the **global scope** because the arrow function is defined directly inside the `obj` object, which is at the top level of the script.

Here’s a breakdown:

- The `obj` object is defined in the **global scope**.
- The `greet` arrow function is defined inside the `obj` object.
- Since arrow functions do not have their own `this`, they inherit `this` from the **global scope**.

---

### **3. Global Scope `this`**

- In a **browser**, the global scope `this` refers to the `window` object.
- In **Node.js**, the global scope `this` refers to an empty object (`{}`) in module scope or the `global` object in non-module scope.

In your example:

- `this.name` inside the `greet` function refers to `window.name` (in a browser) or `global.name` (in Node.js).
- Since `name` is not defined in the global scope, `this.name` is `undefined`.

---

## **How to Fix It**

If you want `this` to refer to the `obj` object, you should use a **regular function** instead of an arrow function. Regular functions have their own `this` binding, which is determined by how the function is called.

### **Using a Regular Function**

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name); // `this` refers to `obj`
  },
};

obj.greet(); // Output: "Alice"
```

### **Explanation**

- The `greet` function is a **regular function**.
- When `obj.greet()` is called, `this` refers to the `obj` object.
- Therefore, `this.name` correctly refers to `obj.name`.

---

## **Why Arrow Functions Are Useful**

Arrow functions are useful in scenarios where you want to preserve the `this` value of the enclosing scope. For example:

### **Example: Arrow Function in a Method**

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log(this.name); // `this` refers to `obj`
    }, 1000);
  },
};

obj.greet(); // Output after 1 second: "Alice"
```

### **Explanation**

- The `setTimeout` callback is an **arrow function**.
- It inherits `this` from the `greet` method, which refers to the `obj` object.
- Therefore, `this.name` correctly refers to `obj.name`.

---

## **Summary**

- Arrow functions do not have their own `this` binding. They inherit `this` from the **enclosing lexical scope**.
- In your example, the enclosing lexical scope is the **global scope**, so `this` refers to the global object (`window` in browsers, `global` in Node.js).
- To make `this` refer to the `obj` object, use a **regular function** instead of an arrow function.
- Arrow functions are useful when you want to preserve the `this` value of the enclosing scope, such as in callbacks or nested functions.
