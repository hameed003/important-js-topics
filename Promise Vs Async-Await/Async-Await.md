### **Async/Await in JavaScript**

`async` and `await` are syntactic sugar built on top of **Promises** that make asynchronous code look and behave more like synchronous code. They provide a cleaner and more readable way to handle asynchronous operations compared to traditional Promise chaining.

---

### **1. What is `async/await`?**

- **`async`**: A keyword used to declare an asynchronous function. It automatically returns a Promise.
- **`await`**: A keyword used to pause the execution of an `async` function until a Promise is resolved or rejected.

---

### **2. Why Use `async/await`?**

- **Readability**: Makes asynchronous code look like synchronous code.
- **Error Handling**: Simplifies error handling using `try/catch`.
- **Debugging**: Easier to debug compared to nested `.then()` chains.
- **Sequential Code**: Allows writing sequential asynchronous code without nesting.

---

### **3. How `async/await` Works**

1. An `async` function always returns a Promise. If the function returns a value, the Promise is resolved with that value. If the function throws an error, the Promise is rejected.
2. The `await` keyword pauses the execution of the `async` function until the Promise is resolved or rejected.

---

### **4. Example of `async/await`**

#### **Basic Example**

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
  });
}

async function getData() {
  const result = await fetchData(); // Pause until the Promise resolves
  console.log(result); // Output: Data fetched!
}

getData();
```

---

### **5. Error Handling with `try/catch`**

You can handle errors in `async/await` using `try/catch`.

#### **Example: Error Handling**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Error: Data not found!"), 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error); // Output: Error: Data not found!
  }
}

getData();
```

---

### **6. Chaining with `async/await`**

You can chain multiple asynchronous operations sequentially using `await`.

#### **Example: Chaining**

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
  });
}

async function getUserAndPosts() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  console.log(user); // Output: { id: 1, name: "Alice" }
  console.log(posts); // Output: ["Post 1", "Post 2"]
}

getUserAndPosts();
```

---

### **7. Parallel Execution with `Promise.all()`**

You can run multiple asynchronous operations in parallel using `Promise.all()`.

#### **Example: Parallel Execution**

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
  });
}

async function getUserAndPosts() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  console.log(user); // Output: { id: 1, name: "Alice" }
  console.log(posts); // Output: ["Post 1", "Post 2"]
}

getUserAndPosts();
```

---

### **8. Real-World Use Cases**

#### **Example 1: Fetching Data from an API**

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

#### **Example 2: Sequential API Calls**

```javascript
async function fetchUserAndPosts() {
  try {
    const userResponse = await fetch("https://api.example.com/user/1");
    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://api.example.com/posts?userId=${user.id}`
    );
    const posts = await postsResponse.json();

    console.log(user);
    console.log(posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserAndPosts();
```

---

### **9. Advanced Use Cases**

#### **Example 1: Using `async/await` with `forEach`**

`forEach` does not work well with `await`. Use `for...of` instead.

```javascript
async function processArray(array) {
  for (const item of array) {
    await processItem(item); // Process each item sequentially
  }
}

async function processItem(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processed:", item);
      resolve();
    }, 1000);
  });
}

processArray([1, 2, 3]);
// Output:
// Processed: 1
// Processed: 2
// Processed: 3
```

#### **Example 2: Using `async/await` with `map`**

Use `Promise.all()` to handle `async/await` with `map`.

```javascript
async function processArray(array) {
  const results = await Promise.all(
    array.map(async (item) => {
      const result = await processItem(item);
      return result;
    })
  );
  console.log(results);
}

async function processItem(item) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Processed: ${item}`), 1000);
  });
}

processArray([1, 2, 3]);
// Output: ["Processed: 1", "Processed: 2", "Processed: 3"]
```

---

### **10. Summary**

| Feature                | Description                               | Example                                                             |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------------- |
| **`async`**            | Declares an asynchronous function         | `async function foo() { ... }`                                      |
| **`await`**            | Pauses execution until a Promise resolves | `const result = await promise;`                                     |
| **Error Handling**     | Use `try/catch` for error handling        | `try { ... } catch (error) { ... }`                                 |
| **Chaining**           | Sequential asynchronous operations        | `const result1 = await task1(); const result2 = await task2();`     |
| **Parallel Execution** | Use `Promise.all()` for parallel tasks    | `const [result1, result2] = await Promise.all([task1(), task2()]);` |

**Example**:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
```

By mastering `async/await`, you can write cleaner, more readable, and maintainable asynchronous JavaScript code!
