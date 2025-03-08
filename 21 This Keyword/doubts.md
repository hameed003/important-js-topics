**Q1:**

```js
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // `this` refers to the global object
  },
};

obj.greet(); // Output: undefined (in browsers, `this` is `window`).
```

since here the surrounding scope of `greet() function` is `obj` object so why `this` here refers to global scope. [Ans-1]()

---
