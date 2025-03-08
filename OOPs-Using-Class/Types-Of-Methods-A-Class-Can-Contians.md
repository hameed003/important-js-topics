In JavaScript, a class can contain various types of methods/functions, each serving a distinct purpose. Let's break them down:

---

## 🛠️ **1️⃣ Constructor Method**

The **`constructor()`** is a special method that runs when an object is created from a class. It initializes properties and sets up the initial state.

### 📖 **Example:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Ahmad", 22);
console.log(person1); // Output: Person { name: 'Ahmad', age: 22 }
```

### 🧠 **Key Points:**

- Only one `constructor()` per class.
- Automatically invoked during object creation.
- **Cannot be called manually** like a regular method.

**Use Case:** Setting default values or performing setup logic when creating instances.

---

## ⚙️ **2️⃣ Instance Methods (Regular Methods)**

These methods are defined inside the class but outside the `constructor`. They can be called from object instances.

### 📖 **Example:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person2 = new Person("Sara", 25);
person2.greet(); // Output: Hello, my name is Sara.
```

### 🧠 **Key Points:**

- Must be called with an object instance (e.g., `person2.greet()`).
- Can access **instance properties** using `this`.

**Use Case:** Behavior specific to an object, like `greet()` for a person.

---

## 🚀 **3️⃣ Static Methods**

Static methods are defined with the **`static`** keyword. They belong to the class, **not the instance**. They are called directly on the class itself.

### 📖 **Example:**

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 7)); // Output: 12
```

### 🧠 **Key Points:**

- Can't access instance properties (no `this` for instance).
- Called via `ClassName.methodName()`.

**Use Case:** Utility methods like mathematical calculations, logging, etc.

---

## 🧩 **4️⃣ Getter Methods (`get`)**

Getter methods allow you to **access properties** as if they were regular properties, but behind the scenes, a method is executed.

### 📖 **Example:**

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new Person("Ahmad", "Khan");
console.log(person3.fullName); // Output: Ahmad Khan
```

### 🧠 **Key Points:**

- **No parentheses** needed while accessing (`person3.fullName`).
- Often used for **computed properties**.

**Use Case:** Creating **read-only** properties or dynamically computed values.

---

## ⚙️ **5️⃣ Setter Methods (`set`)**

Setter methods are paired with getters to **modify properties** like a regular property assignment.

### 📖 **Example:**

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 2) {
      this._name = newName;
    } else {
      console.log("Name is too short!");
    }
  }
}

const person4 = new Person("Ahmad");
console.log(person4.name); // Ahmad
person4.name = "Al"; // Name is too short!
person4.name = "Ali"; // Updates successfully
console.log(person4.name); // Ali
```

### 🧠 **Key Points:**

- Used to **validate or transform** property values.
- Must accept exactly **one parameter**.

**Use Case:** Input validation before setting a value.

---

## 🔁 **6️⃣ Asynchronous Methods (`async`)**

JavaScript classes can have **`async` methods** to handle asynchronous operations with `await`.

### 📖 **Example:**

```javascript
class DataFetcher {
  async fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
}

const fetcher = new DataFetcher();
fetcher.fetchData("https://jsonplaceholder.typicode.com/posts/1");
```

### 🧠 **Key Points:**

- Must return a **Promise**.
- Allows **cleaner async code** compared to `.then()` chains.

**Use Case:** Fetching data from an API, performing async tasks.

---

## 📜 **7️⃣ Private Methods (ES2022)**

Private methods are defined with **`#`** and are only accessible **inside the class**.

### 📖 **Example:**

```javascript
class BankAccount {
  #pin;

  constructor(owner, balance, pin) {
    this.owner = owner;
    this.balance = balance;
    this.#pin = pin;
  }

  #validatePin(inputPin) {
    return inputPin === this.#pin;
  }

  getBalance(inputPin) {
    if (this.#validatePin(inputPin)) {
      return `Balance: ₹${this.balance}`;
    } else {
      return "Invalid PIN!";
    }
  }
}

const account = new BankAccount("Ahmad", 10000, 1234);
console.log(account.getBalance(1234)); // Balance: ₹10000
console.log(account.getBalance(1111)); // Invalid PIN
// console.log(account.#validatePin(1234)); // SyntaxError: Private field
```

### 🧠 **Key Points:**

- Not accessible outside the class.
- Helps **encapsulate logic** and improve security.

**Use Case:** Hiding sensitive data like PIN validation logic.

---

## 📜 **8 Generator Methods**

- **Purpose**: Generate iterable sequences with `yield`.
- **Defined with**: `*` syntax.
- **Example**:

  ```javascript
  class Range {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }

    *[Symbol.iterator]() {
      for (let i = this.start; i <= this.end; i++) {
        yield i;
      }
    }
  }

  const range = new Range(1, 3);
  console.log([...range]); // [1, 2, 3]
  ```

## 📜 9. **Symbol-Named Methods**

- **Purpose**: Define methods with unique identifiers (e.g., for iteration).
- **Defined with**: `[Symbol.someSymbol]() { ... }`.
- **Example**:
  ```javascript
  class CustomCollection {
    [Symbol.iterator]() {
      // Custom iteration logic
    }
  }
  ```

---

## 📜 10. **Overridden Methods**

- **Purpose**: Redefine methods inherited from a parent class.
- **Example**:

  ```javascript
  class Animal {
    speak() {
      return "Generic sound";
    }
  }

  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }

  const dog = new Dog();
  console.log(dog.speak()); // "Woof!"
  ```

---

## 📜11. **Static Initialization Blocks (ES2022+)**

- **Purpose**: Initialize static properties once during class evaluation.
- **Defined with**: `static { ... }`.
- **Example**:
  ```javascript
  class Config {
    static apiUrl;
    static {
      this.apiUrl = process.env.API_URL || "https://default.url";
    }
  }
  ```

---

## 📜 12. **Decorator Methods (Proposal Stage)**

- **Purpose**: Annotate/modify classes/methods (experimental).
- **Example** (using Babel/TypeScript):

  ```javascript
  class MyClass {
    @logMethod
    myMethod() { ... }
  }

  function logMethod(target, name, descriptor) {
    // Log method calls
  }
  ```

---

## 📋 **Summary Table**

| **Method Type**  | **Keyword**      | **Access**            | **Purpose**                                 | **Example Call**          |
| ---------------- | ---------------- | --------------------- | ------------------------------------------- | ------------------------- |
| Constructor      | `constructor`    | Instance              | Initialize object properties                | `new ClassName()`         |
| Instance Methods | `functionName()` | Instance              | Object-specific behavior                    | `obj.method()`            |
| Static Methods   | `static`         | Class                 | Class-level behavior (no instance required) | `ClassName.method()`      |
| Getter           | `get`            | Instance              | Compute a property on the fly               | `obj.property`            |
| Setter           | `set`            | Instance              | Validate/set a property                     | `obj.property = value`    |
| Async Methods    | `async`          | Instance              | Handle asynchronous tasks                   | `await obj.asyncMethod()` |
| Private Methods  | `#`              | Instance (class-only) | Internal logic inaccessible from outside    | `obj.publicMethod()`      |

---

### 🧠 **Real-World Analogy:**

Think of a **bank account class**:

- **Constructor**: Open the account with initial details.
- **Instance method**: Check balance or deposit money.
- **Static method**: A universal interest rate calculator.
- **Getters/Setters**: Access and modify the balance safely.
- **Async methods**: Fetch interest rates from a server.
- **Private methods**: Validate the PIN internally.

Would you like some **practice tasks** to solidify your understanding? 😊
