# Array And Different Built-in Array Methods:

The **Array** data structure in JavaScript is one of the most commonly used data types. It is an ordered collection of values, where each value is called an **element**, and each element has a numeric position in the array, known as its **index**. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size, and they can store values of any data type, including numbers, strings, objects, and even other arrays.

---

## **Key Features of Arrays**

1. **Ordered Collection**: Elements are stored in a specific order and can be accessed using their index.
2. **Zero-Based Indexing**: The first element is at index `0`, the second at index `1`, and so on.
3. **Dynamic Size**: Arrays can grow or shrink in size dynamically.
4. **Heterogeneous Elements**: Arrays can store elements of different data types.
5. **Built-In Methods**: JavaScript provides many built-in methods to manipulate arrays.

---

## **Creating an Array**

You can create an array using the array literal syntax or the `Array` constructor.

### **1. Array Literal Syntax**

```javascript
const fruits = ["apple", "banana", "cherry"];
```

### **2. Array Constructor**

```javascript
const numbers = new Array(1, 2, 3, 4, 5);
```

---

## **Accessing Array Elements**

You can access array elements using their index.

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
```

---

## **Array Methods**

JavaScript provides a wide range of methods to manipulate arrays. Below is a detailed explanation of the most commonly used array methods with examples.

---

### **1. `push()`**

Adds one or more elements to the end of an array and returns the new length of the array.

#### **Syntax**

```javascript
array.push(element1, element2, ..., elementN);
```

#### **Example**

```javascript
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]
```

---

### **2. `pop()`**

Removes the last element from an array and returns that element.

#### **Syntax**

```javascript
array.pop();
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const lastFruit = fruits.pop();
console.log(lastFruit); // cherry
console.log(fruits); // ["apple", "banana"]
```

---

### **3. `shift()`**

Removes the first element from an array and returns that element.

#### **Syntax**

```javascript
array.shift();
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits.shift();
console.log(firstFruit); // apple
console.log(fruits); // ["banana", "cherry"]
```

---

### **4. `unshift()`**

Adds one or more elements to the beginning of an array and returns the new length of the array.

#### **Syntax**

```javascript
array.unshift(element1, element2, ..., elementN);
```

#### **Example**

```javascript
const fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits); // ["apple", "banana", "cherry"]
```

---

### **5. `concat()`**

Combines two or more arrays and returns a new array.

#### **Syntax**

```javascript
array1.concat(array2, array3, ..., arrayN);
```

#### **Example**

```javascript
const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "orange"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["apple", "banana", "cherry", "orange"]
```

---

### **6. `slice()`**

Returns a shallow copy of a portion of an array into a new array.

#### **Syntax**

```javascript
array.slice(startIndex, endIndex);
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry", "orange"];
const someFruits = fruits.slice(1, 3);
console.log(someFruits); // ["banana", "cherry"]
```

---

### **7. `splice()`**

Adds or removes elements from an array at a specified index.

#### **Syntax**

```javascript
array.splice(startIndex, deleteCount, item1, item2, ..., itemN);
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "orange"); // Removes 1 element at index 1 and adds "orange"
console.log(fruits); // ["apple", "orange", "cherry"]
```

---

### **8. `indexOf()`**

Returns the first index at which a given element can be found in the array, or `-1` if it is not present.

#### **Syntax**

```javascript
array.indexOf(element);
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("orange")); // -1
```

---

### **9. `includes()`**

Checks if an array includes a certain element and returns `true` or `false`.

#### **Syntax**

```javascript
array.includes(element);
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false
```

---

### **10. `join()`**

Joins all elements of an array into a string, separated by a specified separator.

#### **Syntax**

```javascript
array.join(separator);
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const result = fruits.join(", ");
console.log(result); // "apple, banana, cherry"
```

---

### **11. `reverse()`**

Reverses the order of elements in an array.

#### **Syntax**

```javascript
array.reverse();
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); // ["cherry", "banana", "apple"]
```

---

### **12. `sort()`**

Sorts the elements of an array in place and returns the sorted array.

#### **Syntax**

```javascript
array.sort(compareFunction);
```

#### **Example**

```javascript
const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4]
```

---

### **13. `forEach()`**

Executes a provided function once for each array element.

#### **Syntax**

```javascript
array.forEach(callback(currentValue, index, array));
```

#### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));
// Output:
// apple
// banana
// cherry
```

---

### **14. `map()`**

Creates a new array with the results of calling a provided function on every element in the array.

#### **Syntax**

```javascript
array.map(callback(currentValue, index, array));
```

#### **Example**

```javascript
const numbers = [1, 2, 3];
const squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9]
```

---

### **15. `filter()`**

Creates a new array with all elements that pass the test implemented by the provided function.

#### **Syntax**

```javascript
array.filter(callback(currentValue, index, array));
```

#### **Example**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
```

---

### **16. `reduce()`**

Executes a reducer function on each element of the array, resulting in a single output value.

#### **Syntax**

```javascript
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

#### **Example**

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

---

### **17. `find()`**

Returns the first element in the array that satisfies the provided testing function.

#### **Syntax**

```javascript
array.find(callback(currentValue, index, array));
```

#### **Example**

```javascript
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find((num) => num > 3);
console.log(found); // 4
```

---

### **18. `findIndex()`**

Returns the index of the first element in the array that satisfies the provided testing function.

#### **Syntax**

```javascript
array.findIndex(callback(currentValue, index, array));
```

#### **Example**

```javascript
const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex((num) => num > 3);
console.log(index); // 3
```

---

### **19. `every()`**

Tests whether all elements in the array pass the provided function.

#### **Syntax**

```javascript
array.every(callback(currentValue, index, array));
```

#### **Example**

```javascript
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true
```

---

### **20. `some()`**

Tests whether at least one element in the array passes the provided function.

#### **Syntax**

```javascript
array.some(callback(currentValue, index, array));
```

#### **Example**

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true
```

---

## **21. `flat()`**

Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

### **Syntax**

```javascript
array.flat(depth);
```

### **Example**

```javascript
const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(2); // Flatten up to depth 2
console.log(flatArray); // [1, 2, 3, [4]]
```

---

## **22. `flatMap()`**

First maps each element using a mapping function, then flattens the result into a new array. It is equivalent to `map()` followed by `flat()` of depth 1.

### **Syntax**

```javascript
array.flatMap(callback(currentValue, index, array));
```

### **Example**

```javascript
const numbers = [1, 2, 3];
const doubledAndFlattened = numbers.flatMap((num) => [num, num * 2]);
console.log(doubledAndFlattened); // [1, 2, 2, 4, 3, 6]
```

---

## **23. `fill()`**

Fills all the elements of an array from a start index to an end index with a static value.

### **Syntax**

```javascript
array.fill(value, startIndex, endIndex);
```

### **Example**

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 4); // Fill with 0 from index 1 to 3
console.log(numbers); // [1, 0, 0, 0, 5]
```

---

# Few More Additional `Array` Methods

## **24. `copyWithin()`**

Copies a sequence of elements within the array to the target position.

### **Syntax**

```javascript
array.copyWithin(targetIndex, startIndex, endIndex);
```

### **Example**

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3); // Copy elements from index 3 to the end to index 0
console.log(numbers); // [4, 5, 3, 4, 5]
```

---

## **25. `entries()`**

Returns a new **Array Iterator** object that contains the key/value pairs for each index in the array.

### **Syntax**

```javascript
array.entries();
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const iterator = fruits.entries();

for (const [index, value] of iterator) {
  console.log(index, value);
}
// Output:
// 0 'apple'
// 1 'banana'
// 2 'cherry'
```

---

## **26. `keys()`**

Returns a new **Array Iterator** object that contains the keys (indices) for each index in the array.

### **Syntax**

```javascript
array.keys();
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const iterator = fruits.keys();

for (const key of iterator) {
  console.log(key);
}
// Output:
// 0
// 1
// 2
```

---

## **27. `values()`**

Returns a new **Array Iterator** object that contains the values for each index in the array.

### **Syntax**

```javascript
array.values();
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const iterator = fruits.values();

for (const value of iterator) {
  console.log(value);
}
// Output:
// apple
// banana
// cherry
```

---

## **28. `toString()`**

Returns a string representing the array and its elements.

### **Syntax**

```javascript
array.toString();
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.toString()); // "apple,banana,cherry"
```

---

## **29. `toLocaleString()`**

Returns a string representing the elements of the array. The elements are converted to strings using their `toLocaleString` methods.

### **Syntax**

```javascript
array.toLocaleString();
```

### **Example**

```javascript
const numbers = [1000, 2000, 3000];
console.log(numbers.toLocaleString()); // "1,000, 2,000, 3,000" (locale-specific)
```

---

## **30. `reduceRight()`**

Applies a function against an accumulator and each value of the array (from right to left) to reduce it to a single value.

### **Syntax**

```javascript
array.reduceRight(
  callback(accumulator, currentValue, index, array),
  initialValue
);
```

### **Example**

```javascript
const numbers = [1, 2, 3, 4];
const result = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(result); // 10
```

---

## **31. `from()`**

Creates a new, shallow-copied array from an array-like or iterable object.

### **Syntax**

```javascript
Array.from(arrayLike, mapFunction, thisArg);
```

### **Example**

```javascript
const arrayLike = "hello";
const newArray = Array.from(arrayLike);
console.log(newArray); // ['h', 'e', 'l', 'l', 'o']
```

---

## **32. `isArray()`**

Checks if the passed value is an array.

### **Syntax**

```javascript
Array.isArray(value);
```

### **Example**

```javascript
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
```

---

## **33. `of()`**

Creates a new array with a variable number of arguments, regardless of the number or type of the arguments.

### **Syntax**

```javascript
Array.of(element1, element2, ..., elementN);
```

### **Example**

```javascript
const newArray = Array.of(1, 2, 3);
console.log(newArray); // [1, 2, 3]
```

---

## **34. `at()`**

Returns the element at a specified index in the array. It allows negative indexing.

### **Syntax**

```javascript
array.at(index);
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.at(1)); // banana
console.log(fruits.at(-1)); // cherry
```

---

## **35. `with()`**

Creates a new array with the element at the specified index replaced with the given value. This method does not modify the original array.

### **Syntax**

```javascript
array.with(index, value);
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const newFruits = fruits.with(1, "orange");
console.log(newFruits); // ["apple", "orange", "cherry"]
console.log(fruits); // ["apple", "banana", "cherry"] (original array unchanged)
```

---

## **36. `toReversed()`**

Creates a new array with the elements in reverse order. This method does not modify the original array.

### **Syntax**

```javascript
array.toReversed();
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const reversedFruits = fruits.toReversed();
console.log(reversedFruits); // ["cherry", "banana", "apple"]
console.log(fruits); // ["apple", "banana", "cherry"] (original array unchanged)
```

---

## **37. `toSorted()`**

Creates a new array with the elements sorted. This method does not modify the original array.

### **Syntax**

```javascript
array.toSorted(compareFunction);
```

### **Example**

```javascript
const numbers = [3, 1, 4, 2];
const sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4]
console.log(numbers); // [3, 1, 4, 2] (original array unchanged)
```

---

## **38. `toSpliced()`**

Creates a new array with some elements removed and/or replaced at a given index. This method does not modify the original array.

### **Syntax**

```javascript
array.toSpliced(startIndex, deleteCount, item1, item2, ..., itemN);
```

### **Example**

```javascript
const fruits = ["apple", "banana", "cherry"];
const splicedFruits = fruits.toSpliced(1, 1, "orange");
console.log(splicedFruits); // ["apple", "orange", "cherry"]
console.log(fruits); // ["apple", "banana", "cherry"] (original array unchanged)
```

---

## **Summary**

- Arrays are ordered collections of values with zero-based indexing.
- They are dynamic and can store elements of any data type.
- JavaScript provides a wide range of built-in methods to manipulate arrays, such as `push`, `pop`, `map`, `filter`, `reduce`, etc.

- Methods like `flat()`, `flatMap()`, `fill()`, and `copyWithin()` are useful for advanced array manipulation.
- Iterator methods like `entries()`, `keys()`, and `values()` allow you to work with array indices and values.
- Methods like `toString()`, `toLocaleString()`, and `isArray()` are useful for converting and checking arrays.
- Newer methods like `at()`, `with()`, `toReversed()`, `toSorted()`, and `toSpliced()` provide immutable alternatives to traditional array methods.

Arrays are one of the most versatile and widely used data structures in JavaScript, and mastering their methods is essential for effective programming.
