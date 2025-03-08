Let’s dive deeper into the first approach: **creating users manually using object literals**, including real-world use cases, code examples, and its pros and cons.

---

### **Approach 1: Object Literals (Manual Creation)**

You explicitly define each user as a standalone object with properties and methods.

#### **When to Use This**

- For a **small, fixed set of users** (e.g., demo data, testing).
- When users **don’t share methods or structure** (no need for reusability).
- Quick prototyping or temporary solutions.

---

### **Example: Static User List for a Small App**

Imagine a local library app with a fixed list of **librarians** who manage the system. Since there are only a few librarians, you create them manually:

```javascript
// Define users as object literals
const librarian1 = {
  id: 1,
  name: "Alice",
  role: "Senior Librarian",
  permissions: ["manage-books", "issue-card"],
  greet() {
    console.log(`Hello! I'm ${this.name}, your ${this.role}.`);
  },
};

const librarian2 = {
  id: 2,
  name: "Bob",
  role: "Assistant Librarian",
  permissions: ["issue-card"],
  greet() {
    console.log(`Hi, I'm ${this.name}. How can I help?`);
  },
};

// Use the objects
librarian1.greet(); // "Hello! I'm Alice, your Senior Librarian."
librarian2.greet(); // "Hi, I'm Bob. How can I help?"
```

---

### **Real-World Scenarios**

1. **Demo/Testing Data**:

   - Hardcoding a few test users for a prototype.
   - Example: A mock login screen with test accounts like `testUser: "password123"`.

2. **Configuration Objects**:

   - Users with specific roles in a small system (e.g., admin accounts for a blog).

3. **Static Content**:
   - A "Meet the Team" page with fixed team member profiles.

---

### **Pros & Cons**

| **Pros**                         | **Cons**                                                        |
| -------------------------------- | --------------------------------------------------------------- |
| ✅ Simple and intuitive.         | ❌ **Not scalable** (imagine 1000 users!).                      |
| ✅ No setup or boilerplate code. | ❌ **Repetitive code** (e.g., rewriting `greet` for each user). |
| ✅ Easy to read for small cases. | ❌ **No shared structure** (errors if properties differ).       |
|                                  | ❌ **No inheritance** (methods are duplicated).                 |

---

### **When It Breaks**

Imagine the library expands to 50 branches with 100 librarians. Using object literals would:

- Require manually writing 100 objects.
- Make it hard to enforce consistency (e.g., a missing `id` property in some users).
- Waste memory (each `greet` method is a separate function).

---

### **Comparison to Other Approaches**

For larger systems, you’d use **classes** or **factory functions** to enforce structure and reuse logic. For example:

```javascript
// Factory function approach (better for scaling)
function createLibrarian(id, name, role, permissions) {
  return {
    id,
    name,
    role,
    permissions,
    greet() {
      console.log(`Hi, I'm ${this.name}, your ${this.role}.`);
    },
  };
}

const librarian3 = createLibrarian(3, "Charlie", "Archivist", [
  "manage-records",
]);
```

---

### **Final Takeaway**

**Use object literals when**:

- You have a **handful of users**.
- You need a **quick, one-off solution**.
- Structure and scalability are **not priorities**.

**Avoid when**:

- You need to create **many users**.
- Users **share logic/structure** (use classes/factories).
- You want to **enforce consistency**.
