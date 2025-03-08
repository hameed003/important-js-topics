### **Constructor Functions in JavaScript**

A **constructor function** in JavaScript is a special type of function used to create and initialize objects. It serves as a blueprint for creating multiple objects of the same type. Constructor functions are a key part of JavaScript's object-oriented programming (OOP) capabilities.

---

### **1. What is a Constructor Function?**

- A constructor function is a regular function that is used with the `new` keyword to create objects.

- By convention, constructor function names start with a capital letter (e.g., `Person`, `Car`).

- Inside the constructor function, the `this` keyword refers to the newly created object.

---

### **2. Syntax of a Constructor Function**

```javascript
function ConstructorName(param1, param2, ...) {
  this.property1 = param1;
  this.property2 = param2;
  // Add methods or properties here
}

// Create an object using the constructor
let obj = new ConstructorName(value1, value2, ...);
```

---

### **3. How Constructor Functions Work**

1. When you call a constructor function with the `new` keyword:

   - A new empty object is created: `{ }`

   - The `this` keyword inside the constructor is set to refer the new object. which means `this` = `{ }` ( newly created object )

   - The properties and methods defined inside the constructor are added to the new object. OR the newly created object `{ }` is linked to the constructor's `prototype`.

   - The constructor function returns the new object automatically (unless you explicitly return something else).

2. The newly created object inherits properties and methods from the constructor's `prototype`.

---

### **4. Example of a Constructor Function**

#### Example 1: Basic Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create an object using the constructor
let person1 = new Person("Alice", 25);
console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 25
```

#### Example 2: Adding Methods to the Constructor

**`Wrong way of adding a method to the Constructor`**

If we add a method inside the constructor function like `greet` method below then this `method` will be created for every instance or object of the `Person` constructor. which is not good for performance.

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this!
  // this.greet = function () {
  // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  // };
};
```

**`Right way of adding a method to the Constructor`**

You can add methods to the constructor's `prototype` to share them across all instances.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

let person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
```

---

### **5. The `new` Keyword**

The `new` keyword is used to create an instance of an object from a constructor function. It performs the following steps:

1. Creates a new empty object.

2. Sets the `this` keyword to point to the new object.

3. Executes the constructor function, adding properties and methods to the new object.

4. Returns the new object (unless another object is explicitly returned).

#### Example: Using `new`

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

let car1 = new Car("Toyota", "Camry");
console.log(car1.make); // Output: Toyota
console.log(car1.model); // Output: Camry
```

---

### **6. Adding Methods to the Prototype**

Methods added to the constructor's `prototype` are shared across all instances, saving memory.

#### Example: Prototype Methods

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add a method to the prototype
Car.prototype.drive = function () {
  console.log(`Driving the ${this.make} ${this.model}.`);
};

let car1 = new Car("Toyota", "Camry");
car1.drive(); // Output: Driving the Toyota Camry.
```

---

### **7. Inheritance Using Constructor Functions**

You can create a new constructor that inherits from an existing one using `Object.create()` and `call()`.

#### Example: Inheritance

```javascript
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function () {
  console.log(`Starting the ${this.type}.`);
};

function Car(make, model) {
  Vehicle.call(this, "Car"); // Call the parent constructor
  this.make = make;
  this.model = model;
}

// Set up the prototype chain
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // Fix the constructor reference

// Add a method to the Car prototype
Car.prototype.drive = function () {
  console.log(`Driving the ${this.make} ${this.model}.`);
};

let car1 = new Car("Honda", "Civic");
car1.start(); // Output: Starting the Car.
car1.drive(); // Output: Driving the Honda Civic.
```

---

### **8. Key Concepts**

#### **`this` Keyword**

- Refers to the newly created object inside the constructor function.

#### **`prototype` Property**

- Used to define shared properties and methods for all instances of the constructor.

#### **`new` Keyword**

- Creates an instance of an object from a constructor function.

#### **`Object.create()`**

- Creates a new object with a specified prototype.

#### **`constructor` Property**

- Points back to the constructor function that created the object.

---

### **9. Practical Examples**

#### Example 1: Creating Multiple Objects

```javascript
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.display = function () {
  console.log(`"${this.title}" by ${this.author}`);
};

let book1 = new Book("1984", "George Orwell");
let book2 = new Book("To Kill a Mockingbird", "Harper Lee");

book1.display(); // Output: "1984" by George Orwell
book2.display(); // Output: "To Kill a Mockingbird" by Harper Lee
```

#### Example 2: Inheritance

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};

let dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy makes a sound.
dog1.bark(); // Output: Buddy barks!
```

---

### **10. Summary**

| Concept            | Description                      | Example                                           |
| ------------------ | -------------------------------- | ------------------------------------------------- |
| **Constructor**    | Function used to create objects  | `function Person() {}`                            |
| **`new` Keyword**  | Creates an instance of an object | `let obj = new Person();`                         |
| **`this` Keyword** | Refers to the new object         | `this.name = name;`                               |
| **`prototype`**    | Shared properties/methods        | `Person.prototype.greet = ...`                    |
| **Inheritance**    | Inherit from another constructor | `Dog.prototype = Object.create(Animal.prototype)` |

**Example**:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

let person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice.
```

By mastering constructor functions, you can create reusable and organized code in JavaScript!
