**Q1:** why immediate function calling works fine in CommonJS way of importing a function `require('./greet')('Ahmad');` // `OUTPUT:` Hello, Ahmad!'

but why this is not working for ES6 or Modern way of imporitng a module `import './greet.js('Ahmad')';` // `OUTPUT:` ES6 ❌ Invalid Syntax [Ans-1]()

---

**Q2:** is there any other of exporting a module using common.js ? [Ans-2]()

---

**Q3:**

```js
module.exports = { add, subtract };
module.exports = add;
exports.add = add;
exports.subtract = subtract;
```

why we are node using module keyword in last 2 while in first two we are using? [Ans-3]()

---

**Q4:**

```js
let a = 10;
exports.a = a;
module.exports.a = a;
module.exports = { a };
```

what is the difference between all of them ? [Ans-4]()

---
