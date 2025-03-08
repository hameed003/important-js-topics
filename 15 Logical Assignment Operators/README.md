### **Logical Operators in JavaScript: `||`, `&&`, and `??`**

JavaScript provides three logical operators for evaluating expressions and making decisions based on the truthiness or falsiness of values:

1. **Logical OR (`||`)**
2. **Logical AND (`&&`)**
3. **Nullish Coalescing (`??`)**

Each operator has a specific use case and behavior. Let's explore them in detail with examples.

---

### **1. Logical OR (`||`) Operator**

The **logical OR (`||`)** operator returns the first **truthy** operand it encounters. If all operands are **falsy**, it returns the last operand.

#### **Syntax**:

```javascript
leftOperand || rightOperand;
```

- If `leftOperand` is truthy, it returns `leftOperand`.
- If `leftOperand` is falsy, it returns `rightOperand`.

---

#### **Truthy and Falsy Values**

- **Falsy Values**: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
- **Truthy Values**: Everything else (e.g., `true`, `1`, `"hello"`, `[]`, `{}`).

---

#### **Example 1: Basic Usage**

```javascript
const result1 = "Hello" || "World";
console.log(result1); // Output: Hello (first truthy value)

const result2 = "" || "World";
console.log(result2); // Output: World (first falsy value, so return second operand)

const result3 = null || undefined || "Default";
console.log(result3); // Output: Default (all falsy, so return last operand)
```

---

#### **Example 2: Providing Default Values**

The `||` operator is often used to provide default values.

```javascript
const user = {
  name: "",
  age: 0,
};

const name = user.name || "Guest";
const age = user.age || 18;

console.log(name); // Output: Guest (empty string is falsy)
console.log(age); // Output: 18 (0 is falsy)
```

---

### **2. Logical AND (`&&`) Operator**

The **logical AND (`&&`)** operator returns the first **falsy** operand it encounters. If all operands are truthy, it returns the last operand.

#### **Syntax**:

```javascript
leftOperand && rightOperand;
```

- If `leftOperand` is falsy, it returns `leftOperand`.
- If `leftOperand` is truthy, it returns `rightOperand`.

---

#### **Example 1: Basic Usage**

```javascript
const result1 = "Hello" && "World";
console.log(result1); // Output: World (both truthy, so return last operand)

const result2 = "" && "World";
console.log(result2); // Output: "" (first falsy value)

const result3 = null && undefined && "Default";
console.log(result3); // Output: null (first falsy value)
```

---

#### **Example 2: Conditional Execution**

The `&&` operator is often used for conditional execution.

```javascript
const user = {
  name: "Alice",
  isAdmin: true,
};

user.isAdmin && console.log("Welcome, Admin!"); // Output: Welcome, Admin!

const guest = {
  name: "Bob",
  isAdmin: false,
};

guest.isAdmin && console.log("Welcome, Admin!"); // No output (first operand is falsy)
```

---

### **3. Nullish Coalescing (`??`) Operator**

The **nullish coalescing (`??`)** operator returns the right-hand side operand only if the left-hand side operand is `null` or `undefined`. Otherwise, it returns the left-hand side operand.

#### **Syntax**:

```javascript
leftOperand ?? rightOperand;
```

- If `leftOperand` is `null` or `undefined`, it returns `rightOperand`.
- If `leftOperand` is any other value (including falsy values like `0`, `false`, or `""`), it returns `leftOperand`.

---

#### **Example 1: Basic Usage**

```javascript
const result1 = null ?? "Default";
console.log(result1); // Output: Default (left operand is null)

const result2 = undefined ?? "Default";
console.log(result2); // Output: Default (left operand is undefined)

const result3 = 0 ?? "Default";
console.log(result3); // Output: 0 (left operand is not null or undefined)
```

---

#### **Example 2: Combining with Optional Chaining**

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

### **4. Key Differences Between `||`, `&&`, and `??`**

| Operator                      | Returns                                        | Example                           |
| ----------------------------- | ---------------------------------------------- | --------------------------------- |
| **Logical OR (`\|\|`)**       | First truthy operand or last falsy             | `"" \|\| "World"` → `"World"`     |
| **Logical AND (`&&`)**        | First falsy operand or last truthy             | `"Hello" && "World"` → `"World"`  |
| **Nullish Coalescing (`??`)** | Right operand if left is `null` or `undefined` | `null ?? "Default"` → `"Default"` |

---

### **5. Practical Use Cases**

#### **Use Case 1: Providing Default Values**

- Use `||` to provide default values for falsy values.
- Use `??` to provide default values only for `null` or `undefined`.

```javascript
const user = {
  name: "",
  age: 0,
};

const name1 = user.name || "Guest"; // Output: Guest (empty string is falsy)
const name2 = user.name ?? "Guest"; // Output: "" (empty string is not null or undefined)

const age1 = user.age || 18; // Output: 18 (0 is falsy)
const age2 = user.age ?? 18; // Output: 0 (0 is not null or undefined)
```

---

#### **Use Case 2: Conditional Rendering**

Use `&&` for conditional rendering in frameworks like React.

```javascript
function WelcomeMessage({ user }) {
  return <div>{user.isLoggedIn && <h1>Welcome, {user.name}!</h1>}</div>;
}

const user = {
  name: "Alice",
  isLoggedIn: true,
};

// Renders: <h1>Welcome, Alice!</h1>
```

---

#### **Use Case 3: Safe Property Access**

Use `??` with optional chaining to safely access nested properties.

```javascript
const user = {
  name: "Alice",
  address: null,
};

const city = user.address?.city ?? "Unknown";
console.log(city); // Output: Unknown
```

---

### **6. Summary**

| Operator                      | Description                                                    | Example                                           |
| ----------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| **Logical OR ( `\|\|` )**     | Returns the first truthy operand                               | `"Hello" \|\| "World"` → `"Hello"`                |
| **Logical AND ( `&&` )**      | Returns the first falsy operand                                | `"" && "World"` → `""`                            |
| **Nullish Coalescing (`??`)** | Returns the right operand if the left is `null` or `undefined` | `null ?? "Default"` → `"Default"`                 |
| **Default Values**            | Use `\|\|` for falsy values, `??` for `null`/`undefined`       | `const name = user.name \|\| "Guest";`            |
| **Conditional Execution**     | Use `&&` for conditional execution                             | `user.isAdmin && console.log("Welcome, Admin!");` |

**Example**:

```javascript
const user = {
  name: "Alice",
  isAdmin: true,
};

const name = user.name || "Guest";
console.log(name); // Output: Alice

user.isAdmin && console.log("Welcome, Admin!"); // Output: Welcome, Admin!

const city = user.address?.city ?? "Unknown";
console.log(city); // Output: Unknown
```

By understanding the logical OR (`||`), logical AND (`&&`), and nullish coalescing (`??`) operators, you can write more concise and efficient JavaScript code!
