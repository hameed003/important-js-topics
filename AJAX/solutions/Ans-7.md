To create a **frontend** for the **industry-level CRUD operation** without using AJAX, we'll use **HTML forms** and rely on **server-side rendering** to handle all interactions. Each form submission will trigger a full page reload, and the server will render the updated HTML.

Below is the complete **frontend** code integrated with the **backend** (Node.js + Express) from the previous example.

---

## **1. Backend Code (Node.js + Express)**

### **Install Dependencies**
If you haven't already, initialize a Node.js project and install the required dependencies:
```bash
npm init -y
npm install express body-parser
```

### **Backend Code**
Create a file named `server.js`:

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory "database" for users
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Home route - Display all users
app.get("/", (req, res) => {
  let userList = users
    .map(
      (user) => `
    <li>
      ${user.name} (${user.email})
      <a href="/edit/${user.id}">Edit</a>
      <form action="/delete/${user.id}" method="POST" style="display:inline;">
        <button type="submit">Delete</button>
      </form>
    </li>
  `
    )
    .join("");
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User List</title>
    </head>
    <body>
      <h1>User List</h1>
      <ul>${userList}</ul>
      <a href="/add">Add User</a>
    </body>
    </html>
  `);
});

// Add User Form
app.get("/add", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Add User</title>
    </head>
    <body>
      <h1>Add User</h1>
      <form action="/add" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <button type="submit">Submit</button>
      </form>
      <a href="/">Back to User List</a>
    </body>
    </html>
  `);
});

// Handle Add User Form Submission
app.post("/add", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.redirect("/");
});

// Edit User Form
app.get("/edit/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Edit User</title>
    </head>
    <body>
      <h1>Edit User</h1>
      <form action="/edit/${user.id}" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="${user.name}" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value="${user.email}" required><br>
        <button type="submit">Update</button>
      </form>
      <a href="/">Back to User List</a>
    </body>
    </html>
  `);
});

// Handle Edit User Form Submission
app.post("/edit/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).send("User not found");
  }
  user.name = name;
  user.email = email;
  res.redirect("/");
});

// Handle Delete User
app.post("/delete/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

---

## **2. Frontend (HTML Forms)**

The frontend is entirely handled by the server. Each route renders an HTML page with forms for interacting with the backend.

### **Routes**
1. **`GET /`**: Displays the list of users with options to edit or delete.
2. **`GET /add`**: Displays a form to add a new user.
3. **`POST /add`**: Handles the form submission to add a new user.
4. **`GET /edit/:id`**: Displays a form to edit an existing user.
5. **`POST /edit/:id`**: Handles the form submission to update an existing user.
6. **`POST /delete/:id`**: Handles the deletion of a user.

---

## **3. How It Works**

### **Step 1: Start the Server**
Run the server:
```bash
node server.js
```

Visit `http://localhost:3000` in your browser.

---

### **Step 2: View User List**
- The home route (`GET /`) displays a list of users.
- Each user has an **Edit** link and a **Delete** button.

---

### **Step 3: Add a User**
- Click the **Add User** link to navigate to the add user form (`GET /add`).
- Fill out the form and submit it.
- The form submission sends a `POST` request to `/add`, which adds the user to the list and redirects back to the home page.

---

### **Step 4: Edit a User**
- Click the **Edit** link next to a user to navigate to the edit form (`GET /edit/:id`).
- Update the user's details and submit the form.
- The form submission sends a `POST` request to `/edit/:id`, which updates the user and redirects back to the home page.

---

### **Step 5: Delete a User**
- Click the **Delete** button next to a user.
- The form submission sends a `POST` request to `/delete/:id`, which removes the user and redirects back to the home page.

---

## **4. Example Output**

### **Home Page (`GET /`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User List</title>
</head>
<body>
  <h1>User List</h1>
  <ul>
    <li>
      Alice (alice@example.com)
      <a href="/edit/1">Edit</a>
      <form action="/delete/1" method="POST" style="display:inline;">
        <button type="submit">Delete</button>
      </form>
    </li>
    <li>
      Bob (bob@example.com)
      <a href="/edit/2">Edit</a>
      <form action="/delete/2" method="POST" style="display:inline;">
        <button type="submit">Delete</button>
      </form>
    </li>
  </ul>
  <a href="/add">Add User</a>
</body>
</html>
```

### **Add User Form (`GET /add`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add User</title>
</head>
<body>
  <h1>Add User</h1>
  <form action="/add" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>
    <button type="submit">Submit</button>
  </form>
  <a href="/">Back to User List</a>
</body>
</html>
```

### **Edit User Form (`GET /edit/:id`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Edit User</title>
</head>
<body>
  <h1>Edit User</h1>
  <form action="/edit/1" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value="Alice" required><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value="alice@example.com" required><br>
    <button type="submit">Update</button>
  </form>
  <a href="/">Back to User List</a>
</body>
</html>
```

---

## **5. Key Features**
- **Full Page Reloads**: Each form submission triggers a full page reload, as there is no AJAX.
- **Server-Side Rendering**: The server generates and serves HTML pages dynamically.
- **Simple and Traditional**: This approach is straightforward and does not require JavaScript on the client side.

---

## **6. Limitations**
- **Full Page Reloads**: Every interaction requires a full page reload, which can be slow and disruptive.
- **No Dynamic Updates**: The page must be reloaded to reflect changes.
- **Limited Interactivity**: Without JavaScript, the user experience is less interactive.

---

## **Summary**
This example demonstrates a traditional, non-AJAX approach to building a CRUD application. While it works, it is less efficient and user-friendly compared to modern AJAX-based applications. However, it is a good starting point for understanding how web applications worked before the widespread adoption of AJAX.