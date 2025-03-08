Yes, in JavaScript, besides **strings**, there are other data types and constructs that are **immutable**. Immutability means that once a value is created, it cannot be changed. Instead, any operation that appears to modify the value creates a **new value**, leaving the original value unchanged.

Below is a detailed explanation of other immutable entities in JavaScript, along with examples.

---

## **1. Numbers**

Numbers in JavaScript are immutable. Once a number is created, it cannot be changed. Any operation on a number creates a new number.

### **Example**

```javascript
let num = 5;
let newNum = num + 2; // Creates a new number
console.log(num); // 5 (unchanged)
console.log(newNum); // 7 (new number)
```

---

## **2. Booleans**

Booleans (`true` and `false`) are also immutable. Once a boolean value is created, it cannot be changed.

### **Example**

```javascript
let isTrue = true;
let isFalse = !isTrue; // Creates a new boolean
console.log(isTrue); // true (unchanged)
console.log(isFalse); // false (new boolean)
```

---

## **3. `null` and `undefined`**

The values `null` and `undefined` are immutable. They represent the absence of a value and cannot be changed.

### **Example**

```javascript
let value = null;
value = undefined; // Reassigning, but not modifying the original value
console.log(value); // undefined
```

---

## **4. Symbols**

Symbols are unique and immutable primitive values. Once a symbol is created, it cannot be changed.

### **Example**

```javascript
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false (each symbol is unique)
```

---

## **5. Objects and Arrays (Partially Immutable)**

While objects and arrays are **mutable** by default (their properties or elements can be changed), you can make them **immutable** using certain techniques.

### **a. Using `Object.freeze()`**

The `Object.freeze()` method makes an object immutable by preventing new properties from being added, existing properties from being removed, and existing properties from being modified.

#### **Example**

```javascript
const obj = { name: "Alice", age: 25 };
Object.freeze(obj);

obj.age = 30; // Attempt to modify (fails silently in non-strict mode)
console.log(obj); // { name: "Alice", age: 25 } (unchanged)
```

### **b. Using `const` with Objects**

The `const` keyword prevents reassignment of a variable, but it does not make the object itself immutable.

#### **Example**

```javascript
const obj = { name: "Alice", age: 25 };
obj.age = 30; // Allowed (object is mutable)
console.log(obj); // { name: "Alice", age: 30 }

obj = {}; // Error: Assignment to constant variable
```

### **c. Immutable Libraries**

Libraries like **Immutable.js** or **Immer** can be used to create immutable objects and arrays.

#### **Example with Immer**

```javascript
import produce from "immer";

const state = { name: "Alice", age: 25 };
const newState = produce(state, (draft) => {
  draft.age = 30; // Modifies the draft, not the original state
});

console.log(state); // { name: "Alice", age: 25 } (unchanged)
console.log(newState); // { name: "Alice", age: 30 } (new object)
```

---

## **6. Tuples (In Some Libraries)**

In JavaScript, there is no native tuple type, but libraries like **Immutable.js** provide immutable tuples.

### **Example with Immutable.js**

```javascript
import { Tuple } from "immutable";

const tuple = Tuple(1, 2, 3);
const newTuple = tuple.push(4); // Creates a new tuple
console.log(tuple); // Tuple [1, 2, 3] (unchanged)
console.log(newTuple); // Tuple [1, 2, 3, 4] (new tuple)
```

---

## **7. Immutable Data Structures**

Immutable data structures, such as those provided by libraries like **Immutable.js**, ensure that all operations on the data structure return a new instance instead of modifying the original.

### **Example with Immutable.js List**

```javascript
import { List } from "immutable";

const list = List([1, 2, 3]);
const newList = list.push(4); // Creates a new list
console.log(list.toJS()); // [1, 2, 3] (unchanged)
console.log(newList.toJS()); // [1, 2, 3, 4] (new list)
```

---

## **8. Functions**

Functions in JavaScript are immutable. Once a function is defined, its code cannot be changed. However, you can reassign a variable that holds a function.

### **Example**

```javascript
function greet() {
  console.log("Hello");
}

greet = function () {
  console.log("Hi");
}; // Reassigning the variable, not modifying the function
greet(); // Hi
```

---

## **9. Promises**

Promises are immutable once they are created. You cannot change the state of a promise (pending, fulfilled, or rejected) after it is created.

### **Example**

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

promise.then((result) => console.log(result)); // Done (cannot change the result)
```

---

## **Summary of Immutable Entities in JavaScript**

| Entity          | Immutable? | Explanation                                                                 |
| --------------- | ---------- | --------------------------------------------------------------------------- |
| **Numbers**     | Yes        | Once created, numbers cannot be changed.                                    |
| **Booleans**    | Yes        | `true` and `false` are immutable.                                           |
| **Strings**     | Yes        | Strings are immutable sequences of characters.                              |
| **Symbols**     | Yes        | Symbols are unique and immutable.                                           |
| **`null`**      | Yes        | Represents the absence of a value and is immutable.                         |
| **`undefined`** | Yes        | Represents an uninitialized value and is immutable.                         |
| **Objects**     | No         | Objects are mutable by default, but can be made immutable using techniques. |
| **Arrays**      | No         | Arrays are mutable by default, but can be made immutable using techniques.  |
| **Functions**   | Yes        | Functions are immutable once defined.                                       |
| **Promises**    | Yes        | Promises are immutable once created.                                        |

---

## **Key Takeaways**

- Immutable entities in JavaScript include **numbers**, **booleans**, **strings**, **symbols**, **`null`**, **`undefined`**, **functions**, and **promises**.
- Objects and arrays are **mutable** by default but can be made immutable using techniques like `Object.freeze()` or libraries like **Immutable.js**.
- Immutability ensures **predictability**, **thread safety**, and **optimization** in JavaScript.

Understanding immutability is crucial for writing efficient and bug-free JavaScript code.
