### **Nullish Coalescing Operator (`??`) in JavaScript**

The **nullish coalescing operator** (`??`) is a logical operator introduced in **ES2020** that provides a way to handle `null` or `undefined` values. It returns the right-hand side operand when the left-hand side operand is `null` or `undefined`; otherwise, it returns the left-hand side operand.

---

### **1. What is the Nullish Coalescing Operator?**

- The `??` operator is used to provide a default value for `null` or `undefined`.
- It is particularly useful when you want to distinguish between `null`/`undefined` and other falsy values like `0`, `false`, or `""`.

---

### **2. Syntax**

```javascript
leftOperand ?? rightOperand;
```

- If `leftOperand` is `null` or `undefined`, the result is `rightOperand`.
- If `leftOperand` is any other value (including falsy values like `0`, `false`, or `""`), the result is `leftOperand`.

---

### **3. Why Use the Nullish Coalescing Operator?**

- **Handling `null`/`undefined`**: Provides a clean way to handle `null` or `undefined` values.
- **Avoiding Falsy Pitfalls**: Unlike the logical OR (`||`) operator, `??` does not consider falsy values like `0`, `false`, or `""` as fallbacks.
- **Readability**: Makes code more readable and concise when dealing with default values.

---

### **4. Examples of Nullish Coalescing**

#### **Example 1: Basic Usage**

```javascript
const value = null;
const result = value ?? "Default Value";
console.log(result); // Output: Default Value
```

---

#### **Example 2: Distinguishing Falsy Values**

The `??` operator only considers `null` or `undefined` as fallback triggers, not other falsy values.

```javascript
const value1 = 0;
const value2 = "";
const value3 = false;
const value4 = null;
const value5 = undefined;

console.log(value1 ?? "Default"); // Output: 0
console.log(value2 ?? "Default"); // Output: ""
console.log(value3 ?? "Default"); // Output: false
console.log(value4 ?? "Default"); // Output: Default
console.log(value5 ?? "Default"); // Output: Default
```

---

#### **Example 3: Combining with Optional Chaining**

The `??` operator is often used with **optional chaining** (`?.`) to safely access nested properties and provide a default value.

```javascript
const user = {
  name: "Alice",
  address: null,
};

const city = user.address?.city ?? "Unknown";
console.log(city); // Output: Unknown
```

---

#### **Example 4: Default Function Parameters**

The `??` operator can be used to provide default values for function parameters.

```javascript
function greet(name) {
  const displayName = name ?? "Guest";
  console.log(`Hello, ${displayName}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet(null); // Output: Hello, Guest!
greet(undefined); // Output: Hello, Guest!
```

---

#### **Example 5: Avoiding Falsy Pitfalls with `||`**

The `||` operator considers all falsy values (`0`, `""`, `false`, `null`, `undefined`) as fallback triggers, which can lead to unintended behavior.

```javascript
const value1 = 0;
const value2 = "";

console.log(value1 || "Default"); // Output: Default (unintended)
console.log(value2 || "Default"); // Output: Default (unintended)

console.log(value1 ?? "Default"); // Output: 0 (intended)
console.log(value2 ?? "Default"); // Output: "" (intended)
```

---

### **5. Practical Use Cases**

#### **Use Case 1: API Responses**

When working with API responses, the `??` operator can provide default values for missing or `null`/`undefined` data.

```javascript
const response = {
  data: {
    user: {
      name: "Alice",
      email: null,
    },
  },
};

const email = response.data.user.email ?? "No email provided";
console.log(email); // Output: No email provided
```

---

#### **Use Case 2: Configuration Objects**

The `??` operator can be used to provide default values in configuration objects.

```javascript
const config = {
  theme: null,
  fontSize: 14,
};

const theme = config.theme ?? "light";
console.log(theme); // Output: light
```

---

#### **Use Case 3: DOM Manipulation**

The `??` operator can safely handle `null` or `undefined` values when accessing DOM elements.

```javascript
const element = document.querySelector(".non-existent-element");

const text = element?.textContent ?? "Element not found";
console.log(text); // Output: Element not found
```

---

### **6. Key Takeaways**

| Feature                | Description                                                                        | Example                                  |
| ---------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------- |
| **Nullish Coalescing** | Returns the right-hand side operand if the left-hand side is `null` or `undefined` | `value ?? "Default"`                     |
| **Falsy Values**       | Does not consider `0`, `""`, or `false` as fallback triggers                       | `0 ?? "Default"` → `0`                   |
| **Optional Chaining**  | Often used with `?.` to safely access nested properties                            | `user.address?.city ?? "Unknown"`        |
| **Default Parameters** | Provides default values for function parameters                                    | `function greet(name = "Guest") { ... }` |

**Example**:

```javascript
const value = null;
const result = value ?? "Default Value";
console.log(result); // Output: Default Value
```

By using the nullish coalescing operator, you can write cleaner and more predictable JavaScript code, especially when dealing with `null` or `undefined` values!
