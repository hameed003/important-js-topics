# Object And Different Built-in Object Methods:

The **Object** data structure in JavaScript is one of the most fundamental and versatile data types. Objects are used to store collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects, functions, arrays, etc. Objects are the building blocks of JavaScript and are used extensively for organizing and manipulating data.

---

## **Key Features of Objects**

1. **Key-Value Pairs**: Objects store data as key-value pairs.
2. **Dynamic**: Properties can be added, modified, or deleted at runtime.
3. **Reference Type**: Objects are reference types, meaning they are passed by reference, not by value.
4. **Prototype-Based Inheritance**: Objects can inherit properties and methods from other objects via the prototype chain.
5. **Built-In Methods**: JavaScript provides many built-in methods to work with objects.

---

## **Creating an Object**

You can create an object using the object literal syntax or the `Object` constructor.

### **1. Object Literal Syntax**

```javascript
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
```

### **2. Object Constructor**

```javascript
const person = new Object();
person.name = "Alice";
person.age = 25;
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
```

---

## **Accessing Object Properties**

You can access object properties using dot notation or bracket notation.

### **Dot Notation**

```javascript
console.log(person.name); // Alice
```

### **Bracket Notation**

```javascript
console.log(person["name"]); // Alice
```

---

## **Object Methods**

JavaScript provides a wide range of methods to work with objects. Below is a detailed explanation of the most commonly used object methods with examples.

---

### **1. `Object.keys()`**

Returns an array of the object's own enumerable property names.

#### **Syntax**

```javascript
Object.keys(obj);
```

#### **Example**

```javascript
const person = { name: "Alice", age: 25 };
const keys = Object.keys(person);
console.log(keys); // ["name", "age"]
```

---

### **2. `Object.values()`**

Returns an array of the object's own enumerable property values.

#### **Syntax**

```javascript
Object.values(obj);
```

#### **Example**

```javascript
const person = { name: "Alice", age: 25 };
const values = Object.values(person);
console.log(values); // ["Alice", 25]
```

---

### **3. `Object.entries()`**

Returns an array of the object's own enumerable property key-value pairs as arrays.

✅ Looping Objects : Object Keys ( Object property Name ), Values ( Object property Value ), And Entries ( Entire Object)

#### **Syntax**

```javascript
Object.entries(obj);
```

#### **Example 1**

```javascript
const person = { name: "Alice", age: 25 };
const entries = Object.entries(person);
console.log(entries); // [["name", "Alice"], ["age", 25]]
```

```js
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },

  // [weekdays[2]]: {
  //   open: 12,
  //   close: 22,
  // },

  fri: {
    open: 11,
    close: 23,
  },

  // [`day-${4+2}`]: {
  //   open: 11,
  //   close: 23,
  // },

  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
```

```js
// Looping Object Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days : `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// Looping Object Property VALUES
const values = Object.values(openingHours);
console.log(values);

// looping Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const entry of entries) {
  console.log(entry);
}
```

[Key, value] destructuring NOTE: we can do object destructuring inside an array destructuring like we did below

```js
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
```

---

### **4. `Object.assign()`**

Copies the values of all enumerable properties from one or more source objects to a target object.

#### **Syntax**

```javascript
Object.assign(target, ...sources);
```

#### **Example**

```javascript
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 3, c: 4 }
```

---

### **5. `Object.create()`**

Creates a new object with the specified prototype object and properties.

#### **Syntax**

```javascript
Object.create(proto, propertiesObject);
```

#### **Example**

```javascript
const proto = {
  greet: function () {
    console.log("Hello");
  },
};
const obj = Object.create(proto);
obj.greet(); // Hello
```

---

### **6. `Object.defineProperty()`**

Defines a new property directly on an object or modifies an existing property.

#### **Syntax**

```javascript
Object.defineProperty(obj, prop, descriptor);
```

#### **Example**

```javascript
const obj = {};
Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false, // Cannot be changed
});
console.log(obj.name); // Alice
obj.name = "Bob"; // Fails silently in non-strict mode
console.log(obj.name); // Alice
```

---

### **7. `Object.defineProperties()`**

Defines new or modifies existing properties directly on an object.

#### **Syntax**

```javascript
Object.defineProperties(obj, props);
```

#### **Example**

```javascript
const obj = {};
Object.defineProperties(obj, {
  name: { value: "Alice", writable: false },
  age: { value: 25, writable: true },
});
console.log(obj.name); // Alice
console.log(obj.age); // 25
```

---

### **8. `Object.getOwnPropertyDescriptor()`**

Returns a property descriptor for a specific property on an object.

#### **Syntax**

```javascript
Object.getOwnPropertyDescriptor(obj, prop);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
// { value: "Alice", writable: true, enumerable: true, configurable: true }
```

---

### **9. `Object.getOwnPropertyNames()`**

Returns an array of all properties (including non-enumerable properties) found directly on an object.

#### **Syntax**

```javascript
Object.getOwnPropertyNames(obj);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
Object.defineProperty(obj, "age", { value: 25, enumerable: false });
const properties = Object.getOwnPropertyNames(obj);
console.log(properties); // ["name", "age"]
```

---

### **10. `Object.getPrototypeOf()`**

Returns the prototype of the specified object.

#### **Syntax**

```javascript
Object.getPrototypeOf(obj);
```

#### **Example**

```javascript
const proto = {
  greet: function () {
    console.log("Hello");
  },
};
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // true
```

---

### **11. `Object.setPrototypeOf()`**

Sets the prototype of a specified object to another object or `null`.

#### **Syntax**

```javascript
Object.setPrototypeOf(obj, prototype);
```

#### **Example**

```javascript
const proto = {
  greet: function () {
    console.log("Hello");
  },
};
const obj = {};
Object.setPrototypeOf(obj, proto);
obj.greet(); // Hello
```

---

### **12. `Object.freeze()`**

Freezes an object, preventing new properties from being added, existing properties from being removed, and existing properties from being modified.

#### **Syntax**

```javascript
Object.freeze(obj);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob"; // Fails silently in non-strict mode
console.log(obj.name); // Alice
```

---

### **13. `Object.seal()`**

Seals an object, preventing new properties from being added and existing properties from being removed, but allows modification of existing properties.

#### **Syntax**

```javascript
Object.seal(obj);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
Object.seal(obj);
obj.name = "Bob"; // Allowed
obj.age = 25; // Fails silently in non-strict mode
console.log(obj); // { name: "Bob" }
```

---

### **14. `Object.isFrozen()`**

Checks if an object is frozen.

#### **Syntax**

```javascript
Object.isFrozen(obj);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
```

---

### **15. `Object.isSealed()`**

Checks if an object is sealed.

#### **Syntax**

```javascript
Object.isSealed(obj);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
Object.seal(obj);
console.log(Object.isSealed(obj)); // true
```

---

### **16. `Object.isExtensible()`**

Checks if an object is extensible (i.e., new properties can be added).

#### **Syntax**

```javascript
Object.isExtensible(obj);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
```

---

### **17. `Object.preventExtensions()`**

Prevents new properties from being added to an object.

#### **Syntax**

```javascript
Object.preventExtensions(obj);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
Object.preventExtensions(obj);
obj.age = 25; // Fails silently in non-strict mode
console.log(obj); // { name: "Alice" }
```

---

### **18. `Object.hasOwnProperty()`**

Checks if an object has a specific property as its own property (not inherited).

#### **Syntax**

```javascript
obj.hasOwnProperty(prop);
```

#### **Example**

```javascript
const obj = { name: "Alice" };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("toString")); // false (inherited)
```

---

### **19. `Object.is()`**

Compares two values for equality (similar to `===` but treats `NaN` and `-0` differently).

#### **Syntax**

```javascript
Object.is(value1, value2);
```

#### **Example**

```javascript
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
```

---

### **20. `Object.fromEntries()`**

Transforms a list of key-value pairs into an object.

#### **Syntax**

```javascript
Object.fromEntries(iterable);
```

#### **Example**

```javascript
const entries = [
  ["name", "Alice"],
  ["age", 25],
];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: "Alice", age: 25 }
```

---

# Few More Additional `Object` Methods

## **1. `Object.getOwnPropertySymbols()`**

Returns an array of all symbol properties found directly on an object.

### **Syntax**

```javascript
Object.getOwnPropertySymbols(obj);
```

### **Example**

```javascript
const obj = {};
const sym = Symbol("description");
obj[sym] = "value";

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(description)]
```

---

## **2. `Object.getOwnPropertyDescriptors()`**

Returns all property descriptors for the object's own properties.

### **Syntax**

```javascript
Object.getOwnPropertyDescriptors(obj);
```

### **Example**

```javascript
const obj = { name: "Alice" };
Object.defineProperty(obj, "age", { value: 25, enumerable: false });

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// {
//   name: { value: "Alice", writable: true, enumerable: true, configurable: true },
//   age: { value: 25, writable: false, enumerable: false, configurable: false }
// }
```

---

## **3. `Object.isPrototypeOf()`**

Checks if an object exists in another object's prototype chain.

### **Syntax**

```javascript
prototypeObj.isPrototypeOf(obj);
```

### **Example**

```javascript
const proto = {};
const obj = Object.create(proto);

console.log(proto.isPrototypeOf(obj)); // true
```

---

## **4. `Object.prototype.toString()`**

Returns a string representation of the object. This method is often overridden to provide custom string representations.

### **Syntax**

```javascript
obj.toString();
```

### **Example**

```javascript
const obj = { name: "Alice" };
console.log(obj.toString()); // [object Object]

// Overriding toString()
obj.toString = function () {
  return `Person: ${this.name}`;
};
console.log(obj.toString()); // Person: Alice
```

---

## **5. `Object.prototype.valueOf()`**

Returns the primitive value of the object. This method is often overridden to provide custom primitive values.

### **Syntax**

```javascript
obj.valueOf();
```

### **Example**

```javascript
const obj = { value: 42 };
console.log(obj.valueOf()); // { value: 42 }

// Overriding valueOf()
obj.valueOf = function () {
  return this.value;
};
console.log(obj.valueOf()); // 42
```

---

## **6. `Object.prototype.hasOwnProperty()`**

Checks if an object has a specific property as its own property (not inherited).

### **Syntax**

```javascript
obj.hasOwnProperty(prop);
```

### **Example**

```javascript
const obj = { name: "Alice" };
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("toString")); // false (inherited)
```

---

## **7. `Object.prototype.propertyIsEnumerable()`**

Checks if a specific property is enumerable.

### **Syntax**

```javascript
obj.propertyIsEnumerable(prop);
```

### **Example**

```javascript
const obj = { name: "Alice" };
Object.defineProperty(obj, "age", { value: 25, enumerable: false });

console.log(obj.propertyIsEnumerable("name")); // true
console.log(obj.propertyIsEnumerable("age")); // false
```

---

## **8. `Object.prototype.toLocaleString()`**

Returns a localized string representation of the object. This method is often overridden to provide custom localized representations.

### **Syntax**

```javascript
obj.toLocaleString();
```

### **Example**

```javascript
const obj = { name: "Alice" };
console.log(obj.toLocaleString()); // [object Object]

// Overriding toLocaleString()
obj.toLocaleString = function () {
  return `Person: ${this.name}`;
};
console.log(obj.toLocaleString()); // Person: Alice
```

---

## **9. `Object.prototype.__proto__`**

The `__proto__` property is a legacy way to access or set the prototype of an object. It is deprecated in favor of `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.

### **Syntax**

```javascript
obj.__proto__;
```

### **Example**

```javascript
const proto = {
  greet: function () {
    console.log("Hello");
  },
};
const obj = {};
obj.__proto__ = proto;

obj.greet(); // Hello
```

---

## **10. `Object.prototype.constructor`**

Returns a reference to the constructor function that created the object.

### **Syntax**

```javascript
obj.constructor;
```

### **Example**

```javascript
const obj = new Object();
console.log(obj.constructor); // [Function: Object]

function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.constructor); // [Function: Person]
```

---

## **11. `Object.groupBy()` (Experimental)**

Groups the elements of an iterable (e.g., an array) based on a callback function. This method is experimental and may not be supported in all environments.

### **Syntax**

```javascript
Object.groupBy(iterable, callback);
```

### **Example**

```javascript
const arr = [1, 2, 3, 4, 5];
const grouped = Object.groupBy(arr, (num) => (num % 2 === 0 ? "even" : "odd"));

console.log(grouped);
// { odd: [1, 3, 5], even: [2, 4] }
```

---

## **12. `Object.hasOwn()`**

Checks if an object has a specific property as its own property (not inherited). This is a modern alternative to `Object.prototype.hasOwnProperty()`.

### **Syntax**

```javascript
Object.hasOwn(obj, prop);
```

### **Example**

```javascript
const obj = { name: "Alice" };
console.log(Object.hasOwn(obj, "name")); // true
console.log(Object.hasOwn(obj, "toString")); // false (inherited)
```

---

## **Summary**

- Objects in JavaScript are collections of key-value pairs.
- They are dynamic, meaning properties can be added, modified, or deleted at runtime.
- JavaScript provides a wide range of built-in methods to work with objects, such as `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`, `Object.freeze()`, etc.
- Objects are reference types, meaning they are passed by reference, not by value.

- Some of the less commonly used methods include `Object.getOwnPropertySymbols()`, `Object.getOwnPropertyDescriptors()`, `Object.prototype.toString()`, `Object.prototype.valueOf()`, and `Object.prototype.propertyIsEnumerable()`.
- Experimental methods like `Object.groupBy()` provide advanced functionality but may not be widely supported yet.
- Understanding these methods and properties is crucial for advanced object manipulation and debugging in JavaScript.

Understanding objects and their methods is crucial for effective JavaScript programming, as they are the foundation of many data structures and patterns in the language.
