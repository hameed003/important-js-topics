# String And Different Built-in String Methods:

The **String** data type in JavaScript is used to represent textual data. Strings are immutable, meaning once a string is created, it cannot be changed. However, you can create new strings based on operations performed on the original string. JavaScript provides a wide range of methods to manipulate and work with strings.

---

## **Key Features of Strings**

1. **Immutable**: Once created, strings cannot be modified.
2. **Indexed**: Each character in a string has a numeric index, starting from `0`.
3. **Iterable**: Strings can be iterated over using loops or methods like `forEach`.
4. **Built-In Methods**: JavaScript provides many built-in methods to manipulate strings.

---

## **Creating a String**

You can create a string using string literals or the `String` constructor.

### **1. String Literal**

```javascript
const str = "Hello, World!";
```

### **2. String Constructor**

```javascript
const str = new String("Hello, World!");
```

---

## **Accessing Characters in a String**

You can access characters in a string using their index.

### **Example**

```javascript
const str = "Hello";
console.log(str[0]); // H
console.log(str[1]); // e
```

---

## **String Methods**

JavaScript provides a wide range of methods to manipulate strings. Below is a detailed explanation of the most commonly used string methods with examples.

---

### **1. `charAt()`**

Returns the character at the specified index.

#### **Syntax**

```javascript
string.charAt(index);
```

#### **Example**

```javascript
const str = "Hello";
console.log(str.charAt(1)); // e
```

---

### **2. `charCodeAt()`**

Returns the Unicode value of the character at the specified index.

#### **Syntax**

```javascript
string.charCodeAt(index);
```

#### **Example**

```javascript
const str = "Hello";
console.log(str.charCodeAt(1)); // 101
```

---

### **3. `concat()`**

Combines two or more strings and returns a new string.

#### **Syntax**

```javascript
string.concat(string1, string2, ..., stringN);
```

#### **Example**

```javascript
const str1 = "Hello";
const str2 = "World";
const result = str1.concat(" ", str2);
console.log(result); // Hello World
```

---

### **4. `includes()`**

Checks if a string contains the specified substring and returns `true` or `false`.

#### **Syntax**

```javascript
string.includes(substring);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false
```

---

### **5. `indexOf()`**

Returns the index of the first occurrence of the specified substring, or `-1` if not found.

#### **Syntax**

```javascript
string.indexOf(substring);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.indexOf("World")); // 7
console.log(str.indexOf("world")); // -1
```

---

### **6. `lastIndexOf()`**

Returns the index of the last occurrence of the specified substring, or `-1` if not found.

#### **Syntax**

```javascript
string.lastIndexOf(substring);
```

#### **Example**

```javascript
const str = "Hello, World! Hello!";
console.log(str.lastIndexOf("Hello")); // 14
```

---

### **7. `slice()`**

Extracts a section of a string and returns it as a new string.

#### **Syntax**

```javascript
string.slice(startIndex, endIndex);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.slice(7, 12)); // World
```

---

### **8. `substring()`**

Extracts a section of a string and returns it as a new string. Similar to `slice()`, but does not support negative indices.

#### **Syntax**

```javascript
string.substring(startIndex, endIndex);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.substring(7, 12)); // World
```

---

### **9. `substr()`**

Extracts a section of a string starting from a specified index and returns a specified number of characters.

#### **Syntax**

```javascript
string.substr(startIndex, length);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.substr(7, 5)); // World
```

---

### **10. `split()`**

Splits a string into an array of substrings based on a specified separator.

#### **Syntax**

```javascript
string.split(separator);
```

#### **Example**

```javascript
const str = "Hello, World!";
const arr = str.split(" ");
console.log(arr); // ["Hello,", "World!"]
```

---

### **11. `toLowerCase()`**

Converts a string to lowercase.

#### **Syntax**

```javascript
string.toLowerCase();
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.toLowerCase()); // hello, world!
```

---

### **12. `toUpperCase()`**

Converts a string to uppercase.

#### **Syntax**

```javascript
string.toUpperCase();
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.toUpperCase()); // HELLO, WORLD!
```

---

### **13. `trim()`**

Removes whitespace from both ends of a string.

#### **Syntax**

```javascript
string.trim();
```

#### **Example**

```javascript
const str = "   Hello, World!   ";
console.log(str.trim()); // Hello, World!
```

---

### **14. `trimStart()`**

Removes whitespace from the start of a string.

#### **Syntax**

```javascript
string.trimStart();
```

#### **Example**

```javascript
const str = "   Hello, World!   ";
console.log(str.trimStart()); // "Hello, World!   "
```

---

### **15. `trimEnd()`**

Removes whitespace from the end of a string.

#### **Syntax**

```javascript
string.trimEnd();
```

#### **Example**

```javascript
const str = "   Hello, World!   ";
console.log(str.trimEnd()); // "   Hello, World!"
```

---

### **16. `startsWith()`**

Checks if a string starts with the specified substring and returns `true` or `false`.

#### **Syntax**

```javascript
string.startsWith(substring);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("World")); // false
```

---

### **17. `endsWith()`**

Checks if a string ends with the specified substring and returns `true` or `false`.

#### **Syntax**

```javascript
string.endsWith(substring);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.endsWith("World!")); // true
console.log(str.endsWith("Hello")); // false
```

---

### **18. `repeat()`**

Returns a new string with the specified number of copies of the original string.

#### **Syntax**

```javascript
string.repeat(count);
```

#### **Example**

```javascript
const str = "Hello";
console.log(str.repeat(3)); // HelloHelloHello
```

---

### **19. `replace()`**

Replaces a specified substring with another substring and returns a new string.

#### **Syntax**

```javascript
string.replace(searchValue, replaceValue);
```

#### **Example**

```javascript
const str = "Hello, World!";
const newStr = str.replace("World", "JavaScript");
console.log(newStr); // Hello, JavaScript!
```

---

### **20. `replaceAll()`**

Replaces all occurrences of a specified substring with another substring and returns a new string.

#### **Syntax**

```javascript
string.replaceAll(searchValue, replaceValue);
```

#### **Example**

```javascript
const str = "Hello, World! World!";
const newStr = str.replaceAll("World", "JavaScript");
console.log(newStr); // Hello, JavaScript! JavaScript!
```

---

### **21. `padStart()`**

Pads the start of a string with a specified character until it reaches the specified length.

#### **Syntax**

```javascript
string.padStart(targetLength, padString);
```

#### **Example**

```javascript
const str = "Hello";
console.log(str.padStart(10, "*")); // *****Hello
```

---

### **22. `padEnd()`**

Pads the end of a string with a specified character until it reaches the specified length.

#### **Syntax**

```javascript
string.padEnd(targetLength, padString);
```

#### **Example**

```javascript
const str = "Hello";
console.log(str.padEnd(10, "*")); // Hello*****
```

---

### **23. `match()`**

Searches a string for a match against a regular expression and returns the matches as an array.

#### **Syntax**

```javascript
string.match(regexp);
```

#### **Example**

```javascript
const str = "Hello, World!";
const matches = str.match(/o/g);
console.log(matches); // ["o", "o"]
```

---

### **24. `search()`**

Searches a string for a match against a regular expression and returns the index of the first match.

#### **Syntax**

```javascript
string.search(regexp);
```

#### **Example**

```javascript
const str = "Hello, World!";
console.log(str.search(/World/)); // 7
```

---

### **25. `localeCompare()`**

Compares two strings in the current locale and returns a number indicating whether the string comes before, after, or is equal to the given string.

#### **Syntax**

```javascript
string.localeCompare(compareString);
```

#### **Example**

```javascript
const str1 = "apple";
const str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (str1 comes before str2)
```

---

### **26. `normalize()`**

Returns the Unicode Normalization Form of the string.

#### **Syntax**

```javascript
string.normalize(form);
```

#### **Example**

```javascript
const str = "café";
console.log(str.normalize("NFC")); // café
```

---

### **27. `codePointAt()`**

Returns the Unicode code point value of the character at the specified index.

#### **Syntax**

```javascript
string.codePointAt(index);
```

#### **Example**

```javascript
const str = "Hello";
console.log(str.codePointAt(1)); // 101
```

---

### **28. `fromCodePoint()`**

Returns a string created from the specified sequence of Unicode code points.

#### **Syntax**

```javascript
String.fromCodePoint(codePoint1, codePoint2, ..., codePointN);
```

#### **Example**

```javascript
const str = String.fromCodePoint(65, 66, 67);
console.log(str); // ABC
```

---

### **29. `raw()`**

Returns a raw string from a template literal, ignoring escape sequences.

#### **Syntax**

```javascript
String.raw(template, ...substitutions);
```

#### **Example**

```javascript
const str = String.raw`Hello\nWorld!`;
console.log(str); // Hello\nWorld!
```

---

### **30. `toLocaleLowerCase()`**

Converts a string to lowercase according to the host's current locale.

#### **Syntax**

```javascript
string.toLocaleLowerCase();
```

#### **Example**

```javascript
const str = "HELLO, WORLD!";
console.log(str.toLocaleLowerCase()); // hello, world!
```

---

### **31. `toLocaleUpperCase()`**

Converts a string to uppercase according to the host's current locale.

#### **Syntax**

```javascript
string.toLocaleUpperCase();
```

#### **Example**

```javascript
const str = "hello, world!";
console.log(str.toLocaleUpperCase()); // HELLO, WORLD!
```

---

# Few More Additional `String` Methods

## **32. `anchor()`**

Creates an HTML anchor element (`<a>`) with the string as the `name` attribute.

### **Syntax**

```javascript
string.anchor(name);
```

### **Example**

```javascript
const str = "Hello";
const anchorStr = str.anchor("greeting");
console.log(anchorStr); // <a name="greeting">Hello</a>
```

---

## **33. `big()`**

Wraps the string in a `<big>` HTML tag (deprecated in HTML5).

### **Syntax**

```javascript
string.big();
```

### **Example**

```javascript
const str = "Hello";
const bigStr = str.big();
console.log(bigStr); // <big>Hello</big>
```

---

## **34. `blink()`**

Wraps the string in a `<blink>` HTML tag (deprecated in HTML5).

### **Syntax**

```javascript
string.blink();
```

### **Example**

```javascript
const str = "Hello";
const blinkStr = str.blink();
console.log(blinkStr); // <blink>Hello</blink>
```

---

## **35. `bold()`**

Wraps the string in a `<b>` HTML tag.

### **Syntax**

```javascript
string.bold();
```

### **Example**

```javascript
const str = "Hello";
const boldStr = str.bold();
console.log(boldStr); // <b>Hello</b>
```

---

## **36. `fixed()`**

Wraps the string in a `<tt>` HTML tag (deprecated in HTML5).

### **Syntax**

```javascript
string.fixed();
```

### **Example**

```javascript
const str = "Hello";
const fixedStr = str.fixed();
console.log(fixedStr); // <tt>Hello</tt>
```

---

## **37. `fontcolor()`**

Wraps the string in a `<font>` HTML tag with the specified color (deprecated in HTML5).

### **Syntax**

```javascript
string.fontcolor(color);
```

### **Example**

```javascript
const str = "Hello";
const fontColorStr = str.fontcolor("red");
console.log(fontColorStr); // <font color="red">Hello</font>
```

---

## **38. `fontsize()`**

Wraps the string in a `<font>` HTML tag with the specified size (deprecated in HTML5).

### **Syntax**

```javascript
string.fontsize(size);
```

### **Example**

```javascript
const str = "Hello";
const fontSizeStr = str.fontsize(5);
console.log(fontSizeStr); // <font size="5">Hello</font>
```

---

## **39. `italics()`**

Wraps the string in an `<i>` HTML tag.

### **Syntax**

```javascript
string.italics();
```

### **Example**

```javascript
const str = "Hello";
const italicsStr = str.italics();
console.log(italicsStr); // <i>Hello</i>
```

---

## **40. `link()`**

Creates an HTML hyperlink (`<a>`) with the string as the link text and the specified URL.

### **Syntax**

```javascript
string.link(url);
```

### **Example**

```javascript
const str = "Google";
const linkStr = str.link("https://www.google.com");
console.log(linkStr); // <a href="https://www.google.com">Google</a>
```

---

## **41. `small()`**

Wraps the string in a `<small>` HTML tag.

### **Syntax**

```javascript
string.small();
```

### **Example**

```javascript
const str = "Hello";
const smallStr = str.small();
console.log(smallStr); // <small>Hello</small>
```

---

## **42. `strike()`**

Wraps the string in a `<strike>` HTML tag (deprecated in HTML5).

### **Syntax**

```javascript
string.strike();
```

### **Example**

```javascript
const str = "Hello";
const strikeStr = str.strike();
console.log(strikeStr); // <strike>Hello</strike>
```

---

## **43. `sub()`**

Wraps the string in a `<sub>` HTML tag.

### **Syntax**

```javascript
string.sub();
```

### **Example**

```javascript
const str = "Hello";
const subStr = str.sub();
console.log(subStr); // <sub>Hello</sub>
```

---

## **44. `sup()`**

Wraps the string in a `<sup>` HTML tag.

### **Syntax**

```javascript
string.sup();
```

### **Example**

```javascript
const str = "Hello";
const supStr = str.sup();
console.log(supStr); // <sup>Hello</sup>
```

---

## **45. `toString()`**

Returns the string itself. This method is inherited from the `Object` prototype.

### **Syntax**

```javascript
string.toString();
```

### **Example**

```javascript
const str = "Hello";
console.log(str.toString()); // Hello
```

---

## **46. `valueOf()`**

Returns the primitive value of the string. This method is inherited from the `Object` prototype.

### **Syntax**

```javascript
string.valueOf();
```

### **Example**

```javascript
const str = "Hello";
console.log(str.valueOf()); // Hello
```

---

## **47. `matchAll()`**

Returns an iterator of all results matching a string against a regular expression, including capturing groups.

### **Syntax**

```javascript
string.matchAll(regexp);
```

### **Example**

```javascript
const str = "Hello, World! Hello!";
const regexp = /Hello/g;
const matches = [...str.matchAll(regexp)];
console.log(matches); // [['Hello'], ['Hello']]
```

---

## **48. `normalize()`**

Returns the Unicode Normalization Form of the string.

### **Syntax**

```javascript
string.normalize(form);
```

### **Example**

```javascript
const str = "café";
console.log(str.normalize("NFC")); // café
```

---

## **49. `codePointAt()`**

Returns the Unicode code point value of the character at the specified index.

### **Syntax**

```javascript
string.codePointAt(index);
```

### **Example**

```javascript
const str = "Hello";
console.log(str.codePointAt(1)); // 101
```

---

## **50. `fromCodePoint()`**

Returns a string created from the specified sequence of Unicode code points.

### **Syntax**

```javascript
String.fromCodePoint(codePoint1, codePoint2, ..., codePointN);
```

### **Example**

```javascript
const str = String.fromCodePoint(65, 66, 67);
console.log(str); // ABC
```

---

## **51. `raw()`**

Returns a raw string from a template literal, ignoring escape sequences.

### **Syntax**

```javascript
String.raw(template, ...substitutions);
```

### **Example**

```javascript
const str = String.raw`Hello\nWorld!`;
console.log(str); // Hello\nWorld!
```

---

## **52. `toLocaleLowerCase()`**

Converts a string to lowercase according to the host's current locale.

### **Syntax**

```javascript
string.toLocaleLowerCase();
```

### **Example**

```javascript
const str = "HELLO, WORLD!";
console.log(str.toLocaleLowerCase()); // hello, world!
```

---

## **53. `toLocaleUpperCase()`**

Converts a string to uppercase according to the host's current locale.

### **Syntax**

```javascript
string.toLocaleUpperCase();
```

### **Example**

```javascript
const str = "hello, world!";
console.log(str.toLocaleUpperCase()); // HELLO, WORLD!
```

---

## **Summary**

- Strings are immutable sequences of characters.
- JavaScript provides a wide range of built-in methods for string manipulation, such as `charAt()`, `concat()`, `slice()`, `replace()`, `trim()`, etc.
- Methods like `toLowerCase()`, `toUpperCase()`, `trimStart()`, and `trimEnd()` are useful for formatting strings.
- Methods like `split()`, `match()`, and `search()` are useful for searching and splitting strings.
- Methods like `padStart()`, `padEnd()`, and `repeat()` are useful for padding and repeating strings.

- Methods like `anchor()`, `big()`, `blink()`, `bold()`, `fixed()`, `fontcolor()`, `fontsize()`, `italics()`, `link()`, `small()`, `strike()`, `sub()`, and `sup()` are used for HTML formatting (though many are deprecated in HTML5).
- Methods like `toString()`, `valueOf()`, `matchAll()`, `normalize()`, `codePointAt()`, `fromCodePoint()`, `raw()`, `toLocaleLowerCase()`, and `toLocaleUpperCase()` are useful for advanced string manipulation and Unicode handling.

These methods make strings one of the most powerful and flexible data types in JavaScript.
