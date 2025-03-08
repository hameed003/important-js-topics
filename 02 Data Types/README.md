In JavaScript, data types define the kind of data that can be stored and manipulated in a program. JavaScript is a **dynamically typed** language, meaning variables can hold values of any type, and their types can change during runtime.

---

### **Two Categories of Data Types in JavaScript**

1. **Primitive Data Types**: Immutable (cannot be changed) and stored directly in memory.
2. **Non-Primitive Data Types**: Mutable (can be changed) and stored as references.

---

### **1. Primitive Data Types**

#### **a. Number**

Represents both integer and floating-point numbers.

```javascript
let age = 25; // Integer
let price = 99.99; // Floating-point
console.log(typeof age); // Output: number
```

#### **b. String**

Represents textual data enclosed in single (`'`), double (`"`), or backticks (`` ` ``).

```javascript
let name = "John";
let message = "Hello, World!";
let template = `Hello, ${name}!`; // Template literal
console.log(typeof name); // Output: string
```

#### **c. Boolean**

Represents a logical value: `true` or `false`.

```javascript
let isLogged = true;
let isAdmin = false;
console.log(typeof isLogged); // Output: boolean
```

#### **d. Undefined**

Represents a variable that has been declared but not assigned a value.

```javascript
let x;
console.log(x); // Output: undefined
console.log(typeof x); // Output: undefined
```

#### **e. Null**

Represents an intentional absence of any value.

```javascript
let y = null;
console.log(y); // Output: null
console.log(typeof y); // Output: object (historical bug)
```

#### **f. BigInt**

Represents integers larger than the `Number` type can handle.

```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: bigint
```

#### **g. Symbol**

Represents a unique and immutable value, often used as object property keys.

```javascript
let id = Symbol("id");
console.log(typeof id); // Output: symbol
```

---

### **2. Non-Primitive Data Types**

#### **a. Object**

Represents a collection of key-value pairs.

```javascript
let person = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};
console.log(typeof person); // Output: object
```

#### **b. Array**

Represents an ordered list of values.

```javascript
let colors = ["red", "green", "blue"];
console.log(typeof colors); // Output: object
```

#### **c. Function**

Represents a reusable block of code.

```javascript
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // Output: function
```

---

### **Type Checking with `typeof`**

The `typeof` operator is used to determine the type of a value.

```javascript
console.log(typeof 42); // Output: number
console.log(typeof "Hello"); // Output: string
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object (bug)
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object
console.log(typeof function () {}); // Output: function
```

---

### **Type Coercion**

JavaScript automatically converts types in certain situations.

```javascript
let num = "5" + 2; // Output: "52" (string concatenation)
let sum = "5" - 2; // Output: 3 (number subtraction)
console.log(num, sum);
```

---

### **Examples of Data Types in Action**

#### Example 1: Primitive vs Non-Primitive

```javascript
let a = 10; // Primitive (number)
let b = a; // Copy of value
b = 20;
console.log(a); // Output: 10 (unchanged)

let obj1 = { name: "John" }; // Non-Primitive (object)
let obj2 = obj1; // Reference to the same object
obj2.name = "Alice";
console.log(obj1.name); // Output: Alice (changed)
```

#### Example 2: Using `typeof`

```javascript
let value;
console.log(typeof value); // Output: undefined

value = 42;
console.log(typeof value); // Output: number

value = "Hello";
console.log(typeof value); // Output: string

value = true;
console.log(typeof value); // Output: boolean

value = null;
console.log(typeof value); // Output: object (bug)
```

#### Example 3: Type Coercion

```javascript
let num1 = "10";
let num2 = 5;
console.log(num1 + num2); // Output: "105" (string concatenation)
console.log(num1 - num2); // Output: 5 (number subtraction)
```

---

### **Summary Table of Data Types**

| Type      | Example                     | `typeof` Output |
| --------- | --------------------------- | --------------- |
| Number    | `let x = 10;`               | `number`        |
| String    | `let y = "Hello";`          | `string`        |
| Boolean   | `let z = true;`             | `boolean`       |
| Undefined | `let a;`                    | `undefined`     |
| Null      | `let b = null;`             | `object`        |
| BigInt    | `let c = 123n;`             | `bigint`        |
| Symbol    | `let d = Symbol("id");`     | `symbol`        |
| Object    | `let e = { name: "John" };` | `object`        |
| Array     | `let f = [1, 2, 3];`        | `object`        |
| Function  | `function g() {}`           | `function`      |

---

### **Key Takeaways**

1. **Primitive Types**: Immutable, stored by value.
2. **Non-Primitive Types**: Mutable, stored by reference.
3. **`typeof` Operator**: Used to check the type of a value.
4. **Type Coercion**: JavaScript automatically converts types in certain contexts.

Understanding data types is crucial for writing efficient and bug-free JavaScript code!
