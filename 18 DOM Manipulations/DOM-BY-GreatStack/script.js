//* JavaScript DOM Full Course - GreatStack
//* ---------------------------------------
//! 1: What is DOM
//? Document object model ( DOM ) is an appliction programming interface ( API ) for manipulating HTML documents.
//? The DOM provides function that allow you to add, remove and modify parts of the document effectively.
//? The DOM represents an HTML document as a tree of nodes.

//! 2: What is nodes and type of nodes
//? <!DOCTYPE html> - Document type node
//? <html></html>, <head></head>, <title></title>,  <body></body> - Element type node
//? <!-- Comment --> - Comment type node
//? JavaScript DOM - Text type node
//? Every node has relationships to other nodes in the DOM tree, and it is same as described in the traditional family tree.
/*
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Comment -->
    <div> //? here <div> tag is the parent node of the below <p> tags and all the <p> tags are the child nodes of the <div> tag.
    <p>JavaScript DOM</p> //? first child OR the previous sibling of the second <p>
    <p>JavaScript DOM</p> //? next sibling of the first <p> OR the previous sibling of the third <p>
    <p>JavaScript DOM</p> //? next sibling of the second <p> OR the previous sibling of the fourth <p>
    <p>JavaScript DOM</p> //? last child OR  next sibling of the third <p>
    </div>
  </body>
</html>
*/
//? in the above HTML code;
//? the <body> is the child node of the <html> node and the <html> node is the parent node of <body> node.
//? the <body> node is the sibling of the <head> node because they share the same immediate parent which is <html> element

//* /////////////////////////////////////////////////////////////
//! 3: Selecting elements using DOM
//* 1. getElementById()
//? the getElementById() method returns an element object that represents an HTML element.
//? the getElementById() is only available on the document object.
let msg1 = document.getElementById("message");
// console.log(msg1);
//? if there is multiple elements with the same id then it will select/return only first element, because the id of element is unique with the HTML document.
//? if there is no element with the id name 'message' in the web page then it will return null.

//* 2. getElementByName()
//? Every element in a HTML document may have a 'name' atribute, multiple HTML elements can share the same value of the 'name' atribute.
let element = document.getElementsByName("language");
// console.log(element);
//? getElementByName() returns list of node

//* 3. getElementByTagName()
//? The getElementByTagName() method accepts a tag name and returns a live collection of elements.
let headings = document.getElementsByTagName("h4");
// console.log(headings)

//? using 'for of' loop
for (heading of headings) {
  // heading.style.color = 'red'
}

//* 4. getElementByClassName()
//? getElementByClassName() method returns an array-like objects of the child elements with a specified class name.
let msg2 = document.getElementsByClassName("message");
// console.log(msg2);

//? using 'for of' loop
for (msg of msg2) {
  // msg.style.color = 'red'
}

//? getElementByClassName() method is available on the document element or any other element also.
let cont = document.getElementById("container");
let msg3 = cont.getElementsByClassName("message");
// console.log(msg3);

//* 5. querySelector() and querySelectorAll()
//? The querySelector() method allows you to select the first element that matches one or more CSS selectors.

//? we can add all the CSS selector in the querySelector() and querySelectorAll() method like: div, h1, p and any class or id.
let msg4 = document.querySelector(".message");
// console.log(msg4);

let msg5 = document.querySelectorAll(".message");
// console.log(msg5);
msg5.forEach((msg) => {
  // msg.style.color = 'red'
})

let msg6 = cont.querySelectorAll(".message");
// console.log(msg6);


//* /////////////////////////////////////////////////////////////
//! 4: Traversing elements
//* 1. selecting parent element
let txt = document.querySelector(".text");
//console.log(txt.parentNode);

//* 2. selecting child element
//? Blank space in javaScript is considered as a text node Eg: '#text'.
let parent1 = document.querySelector(".title1");
// console.log(parent1.firstChild); // Output: #text ( '#text' means blank space )
// console.log(parent1.firstElementChild);
// console.log(parent1.lastElementChild);
// console.log(parent1.childNodes);

//* 3. selecting sibling elements
let second = document.querySelector(".second");

//? Selecting previous Ssibling of element
// console.log(second.previousElementSibling);

//? Selecting next sibling of element
// console.log(second.nextElementSibling);

//* /////////////////////////////////////////////////////////////
//! 5: Manipulating HTML elements
//* 1. creatElement()
//? To create an HTML element, we use the createElement() method. The document.createElement() accepts an HTML tag name and returns a new 'Node' with the Element type.
const container2 = document.getElementById("container2");
let div = document.createElement("div");
div.innerHTML = "<p>Welcome to GreatStack</p>";
div.id = "title3";
div.className = "text";
container2.appendChild(div);
// console.log(div);

//* 2. appendChild()
//? we use appendChild() method to add a 'Node' to the 'end' of list of 'child nodes' of a specified 'parent node'.
//? The appendChild() can be used to move an existing 'child node' to the new position within the document.
let menu1 = document.getElementById("menu1");
let list = document.createElement("li");
list.innerHTML = "Contact";
menu1.appendChild(list);
//console.log(menu1);

//* 3. innerText, textContent
//? To get the 'text content' of a node and its descendants, we can use textContent property.
let menu2 = document.getElementById("menu2");
//console.log(menu2.innerText); //? innerText returns only the visible text contained in a node.
//console.log(menu2.textContent); //? while textContent returns the full text. For example, on the following HTML <span>Hello <span style="display: none;">World</span></span>, innerText will return 'Hello', while textContent will return 'Hello World'.

//? we can also use the 'textContent' to insert the text, so we can read and add the text using the textContent on the web page.
// menu2.textContent = "Hello";

//* 4. innerHTML
//? innerHTML is used to add text as well as HTML code with tag on the web page.
// menu2.innerHTML = "Hello";
// menu2.innerHTML = "<h1>Hello</h1>";
// menu2.textContent = "<h1>Hello</h1>"; // OUTPUT: <h1>Hello</h1> it will print as it is.

//* 5. after()
//? we can use the after() method to insert one or more nodes after the element.
//? Syntax.
// Element.after(node1, node2) Eg: menu2.after(heading1, heading2)
const menu3 = document.getElementById("menu3");
const heading1 = document.createElement("h3");
const heading2 = document.createElement("h3");
heading1.innerHTML = "heading 1";
heading2.innerHTML = "heading 2";
menu3.after(heading1, heading2, "heading 3");

//* 6. append()
//? The append() method is similar to appendChild() but it can accept multiple nodes as well as it can accept string also. The 'new node' will be added at the 'end' of the list of the child of parent node.
//? Syntax:
// parentNode.append(newNodes);
const menu4 = document.getElementById("menu4");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
para1.innerHTML = "Para 2";
para2.innerHTML = "Para 3";
menu4.append(para1, para2, "Para 4");

//* 7. prepend()
//? The prepend() method add the 'new node' as the first child of the parent node.
//? Syntax:
// parentNode.prepend(newNodes)
const menu5 = document.getElementById("menu5");
const para5 = document.createElement("p");
const para6 = document.createElement("p");
para5.innerHTML = "Para 5";
para6.innerHTML = "Para 6";
menu5.prepend(para5, para6, "Para 7");

//* 8. insertAdjacentHTML()
//? Syntax:
// element.insertAdjacentHTML(positionName, html);
const menu6 = document.getElementById("menu6");
const para9 = document.createElement("p");
const para10 = document.createElement("p");
const para11 = document.createElement("p");
const para12 = document.createElement("p");
para9.innerHTML = "Para 9";
para10.innerHTML = "Para 10";
para11.innerHTML = "Para 11";
para12.innerHTML = "Para 12";
menu6.insertAdjacentElement("beforebegin", para9);
menu6.insertAdjacentElement("afterbegin", para10);
menu6.insertAdjacentElement("beforeend", para11);
menu6.insertAdjacentElement("afterend", para12);

//* 9. replaceChild()
//? The replaceChild() method is used to replace a child element with a new child element.
//? Syntax:
// parentNode.replaceChild(newChild, oldChild)
const menu7 = document.getElementById("menu7");
const para13 = document.getElementById("para13");
const para14 = document.getElementById("para14");
const para15 = document.createElement("p");
para15.innerHTML = "Para 15";
menu7.replaceChild(para15, para14);

//* 10. cloneNode()
//? Syntax:
// let newNodeName = originalNode.cloneNode();
const menu8 = document.getElementById("menu8");
let menu6Copy1 = menu8.cloneNode(); //? if we pass the 'true' in the cloneNode(true) method then it will also clone its child element as well.
/// console.log(menu6Copy1);
let menu6Copy2 = menu8.cloneNode(true);
// console.log(menu6Copy2);

//* 11. removeChild()
//? Syntax:
// parentNode.removeChild(childNode)
const menu9 = document.getElementById("menu9");
const para16 = document.getElementById("para16");
const para17 = document.getElementById("para17");
menu9.removeChild(para16);
menu9.removeChild(menu9.lastElementChild);

//* 12. insertBefore()
//? We can use insertBefore() method to insert a new node before an existing node as a child node of a parent node.
//? Syntax
// parentNode.insertBefore(newNode, existingNode)
const menu10 = document.getElementById("menu10");
const para20 = document.getElementById("para20");
const para19 = document.createElement("p");
para19.innerHTML = "Para 19";
const para21 = document.createElement("p");
para21.innerHTML = "Para 21";
menu10.insertBefore(para19, menu10.firstElementChild);
menu10.insertBefore(para21, menu10.lastElementChild);

//# /////////////////////////////////////////////////////////////
//! 6: Attribute methods
//* 1. know all the atributes present in an element
//? Syntax:
// element.attributes
const inputBox1 = document.getElementById("inputBox-1");
// console.log(inputBox1.attributes);

//* 2. getAttribute()
//? The get getAttribute() method is used to read the value of an atribute.
//? Syntax:
// element.getAttribute("attributeName")
const inputBox2 = document.getElementById("inputBox-2");
// console.log(inputBox2.getAttribute("name"));

//* 3. setAttribute()
//? The setAttribute() method is used to create an attribute and its value in an element. It accept two arguments, attributeName and attributValue.
//? Syntax:
// element.setAttribute("attributeName", attributeValue)
const inputBox3 = document.getElementById("inputBox-3");
inputBox3.setAttribute("name", "username-3");
inputBox3.setAttribute("class", "inputbox");
// console.log(inputBox3);

//* 4. hasAttribute()
//? The hasAttribute() tells whether a particular attribute is present in an element or not. It returns a boolean value.
//? Syntax:
// element.hasAttribute("attributeName")
const inputBox4 = document.getElementById("inputBox-4");
// console.log(inputBox4.hasAttribute("id")); // OUTPUT: true
// console.log(inputBox4.hasAttribute("class")); // OUTPUT: false

//* 5. removeAttribute()
//? Syntax:
// element.removeAttribute("attributeName")
const inputBox5 = document.getElementById("inputBox-5");
inputBox5.removeAttribute("placeholder");
// console.log(inputBox5);

//* /////////////////////////////////////////////////////////////
//! 7: Custom Atribute in html and js
//* 1. data in html and dataset in js
//? Eg: data-rollNumber-1 , data-empId-201
//? Accessing it using js : console.log(dataset.rollNumber) & console.log(dataset.empId)

const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');

// Accessing all the atributes present in element:
// console.log(article1.attributes)

// Accessing only custom data atributes present in element:
// console.log(article1.dataset)
// console.log(article1.dataset.articleLang)
// console.log(article1.dataset.articleNumber)
// console.log(article1.dataset.publishYear)
if (+article1.dataset.articleNumber === 1) {
  article1.style.color = 'orange'
}

// console.log(article2.dataset)
// console.log(article2.dataset.articleLang)
// console.log(article2.dataset.articleNumber)
// console.log(article2.dataset.publishYear)
if (+article2.dataset.articleNumber === 2) {
  article2.style.color = 'blue'
}

//* /////////////////////////////////////////////////////////////
//! 8: Global Atribute in html 
//? In HTML, global attributes are attributes that can be applied to any HTML element. They provide a way to set common properties for elements in a standardized manner.

//* /////////////////////////////////////////////////////////////
//! 9: Manipulating Element's Style
//* 1. style property & cssText
//? The 'style property' and 'cssText' is used to get or set the inline Style or CSS of an element.
const inputBox6 = document.getElementById("inputBox-6");

//? Getting inline CSS and its value
// console.log(inputBox6.style);
// console.log(inputBox6.style.backgroundColor);

//? Setting inline CSS and its value
inputBox6.style.padding = "10px";

//? There is one more method to set the inline css and that is cssText.
//inputBox6.style.cssText = "width:200px";
// console.log(inputBox6);

//? when we use cssText it overrides all the existing inline css of an element, to avoid this we use concatination or '+' operator.
// inputBox6.style.cssText += "width:300px";
// console.log(inputBox6);

//? using cssText we can add multiple css property at the same time
// inputBox6.style.cssText += "width:300px; height:50px";
// console.log(inputBox6);

//* 2. getComputedStyle()
//? The getComputedStyle() method is used to get or read an internal and external style or CSS.

//? Computed style in CSS refers to the final values of all CSS properties after all styles have been applied and resolved. This includes styles from various sources such as:

//? 1: Author styles (styles defined in CSS files linked to the webpage)
//? 2: User styles (styles defined by the user in their browser settings)
//? 3: User-agent styles (default styles provided by the browser)

//? The computed style represents the actual values that are used to render an element on the page. These values are calculated by the browser after it has processed all the applicable CSS rules and applied the CSS cascade and inheritance principles.

//? Syntax:
// window.getComputedStyle(element, pseudoElement)
const inputBox7 = document.getElementById("inputBox-7");

// Reading an internal css property and its value
// console.log(window.getComputedStyle(inputBox7));
// console.log(window.getComputedStyle(inputBox7).fontSize);
// console.log(window.getComputedStyle(inputBox7).backgroundColor);
// console.log(window.getComputedStyle(inputBox7).width);

//* 3. className property
//? The  'className property' is used to read and add className of an element.
//? it returns the list of classes seperated by space.

//? Syntax:
// element.className
const inputBox8 = document.getElementById("inputBox-8");

//? Reading className of the element using className property.
// console.log(inputBox8.className);

//? Adding new className to an element using className property.
// inputBox8.className = "test3"; // It will remove the existing className of the element.
// console.log(inputBox8);

//? If we Add new className it will remove the existing className of the element, to avoid this we use concatination or '+' operator.
inputBox8.className += " test3";
// console.log(inputBox8);

//* 4. classList property
//? it returns the collection of css classes.
// element.classList
const inputBox9 = document.getElementById("inputBox-9");

//? Reading classList of an element.
// console.log(inputBox9.classList)

//? Adding new class to an element using classList prpperty.
inputBox9.classList.add('test3')

//? Adding multiple new classes to an element using classList prpperty.
inputBox9.classList.add('test4', 'test5', 'test6')
// console.log(inputBox9)

//? Removing a class from an element using classList prpperty.
inputBox9.classList.remove('test3')

//? Removing multiple classes from an element using classList prpperty.
inputBox9.classList.remove('test4', 'test5', 'test6')
// console.log(inputBox9)

//? Replace a class of an element using classList prpperty.
inputBox9.classList.replace('test2', 'newClass')
// console.log(inputBox9)

//? Check whether a class is present or not in a particular element.
const isClassPeresent = inputBox9.classList.contains('test1')
//? it returns a boolean value.
// console.log(isClassPeresent)

//? Toggle a class of an element.
inputBox9.classList.toggle('test1')
//? if the 'test1' class is peresent then 'toggle' will remove it and if 'test1' is absent then 'toggle' will add it.
// console.log(inputBox9)

//* /////////////////////////////////////////////////////////////
//! 10: JavaScript Events
//* 1. What is event
//? 1: an event is an action that occurs in the web browser, when we click on the 'web page' that is a 'click event', when we move cursor over the 'web page' that is a 'mousemove event' and when the 'web page' loads that is a 'load event', like that we have multiple type of events in javaScript.

//* 2. Event Handler in HTML Attributes:
//? 1: Event handlers defined directly within HTML attributes are specified within the HTML tag using attributes like onclick, onmouseover, etc.
//? 2: You define the event handler directly within the HTML element.

//? Example:
// <!-- <button type="button" id="btn"  onclick=" console.log('Button Clicked')">Click Here</button> -->

//* 3. DOM Level 0 event handlers:
//? 1: DOM Level 0 Event Handlers are assigned directly to the DOM element's event properties using JavaScript.

//? 2: You assign the event handler using JavaScript, typically after the element has been selected.

//? Example:
const btn = document.getElementById('btn');
// btn.onclick = () => {
//   console.log('Button Clicked From Function')
// }

//? remove an 'Event Handler' from an event.
// console.log(btn.onclick = null);

//* 4: Modern Alternative: Event Listeners (DOM Level 2)
//? 1: For more advanced event handling, modern JavaScript (DOM Level 2) uses addEventListener, which overcomes many limitations of the previous two methods:

//? 2: Allows multiple event handlers for the same event type on the same element.

//? 3: Provides better control over event handling (e.g., capturing vs. bubbling phase).

//? Example:
// btn.addEventListener('click', function () {
//   alert('Button Clicked');
// })

// btn.addEventListener('click', function () {
//   console.log('Button Clicked');
// })

//* 5. Event Objects:
//? 2: when an event occurs, the 'web browser' passes an Event Object to the 'Event Handler'.
// btn.addEventListener('click', function (event) {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
//   console.log(this)
// //? in an 'Event Handler' the value of 'event.target' and 'this keyword' are same.
//   console.log(this.id)
// })


//* 6. addEventListner():
//? it recieves 3 arguments.

//? Syntax
// element.addEventListener('event', function, useCapture)
//? by default the 'useCapture' is false, it is related to 'Event Bubbling; and 'Event Capturing'.

//? adding an 'anonamous function' to an event.
// btn.addEventListener('click', function (event) {
//   console.log(event.type)
//   console.log('Button Clicked!')
// })

//? adding an 'external named function' to an event.
const displayMsg = function () {
  console.log('Button Clicked From an external named function')
}
btn.addEventListener('click', displayMsg);

//* 7. removeEventListener():
//? to use removeEventListener() we should always use 'external named function' in addEventListener(), it will not work with an 'anonamous function'.
btn.removeEventListener('click', displayMsg);

//* 8. Different Types of Event:
//? 1: mousemove event:
// 'event fires' repeatedly when we move the 'mouse cursor' around the element.

//? 2: mousedown event:
// 'event fires' when we press the 'mouse button' on the element.

//? 3: mouseup event:
// 'event fires' when we release the 'mouse button' on the element.

//? 4: mouseover event:
// 'event fires' when the cursor move from outside to inside the boudries of the element.

//? 5: mouseout event:
// 'event fires' when the cursor is over an element and then moves to another element.

//? 6: keydown event:
// 'event fires' when we press a key on the keyboard and fires repeatedly while we are holding down the key.

//? keyup event:
// 'event fires' when we release a key on the keyboard.

//? keypress event:
// 'event fires' when we press a character on keyboard like a,b,c... it fires repeateadly while we hold down the key on the keyboard.

//? scroll event:
// 'event fires' when we scroll a document or an element, the scroll events fire.

//* /////////////////////////////////////////////////////////////
//! 11: matches(), closest(), contains() methods
//* 1. matches()
//? element.matches( CSS-Selector-Name): it is used to check if an element matches the given CSS selector

//* closest()
//? element.closest( CSS-Selector-Name ): it is used to look for the nearest ancestor that matches the given CSS-Selector, The element itself is also checked.

//* contains()
//? elementA.contains( elementB ): returns true if elementB is inside elementA ( a descendant of elementA ) or when elementA == elementB.

//* /////////////////////////////////////////////////////////////
//! 12: Event Propagation
//* 1. Event bubbling
//* 2. Event capturing
//* 3. Event delegation
//* 4. Stop event propagation

//* /////////////////////////////////////////////////////////////
//! 13: Event delegation

//! 14: Yahoo Baba Tutorial
//* 1: pageYOffset & pageXOffset - 92 ( video number )
//* 2: offsetTop & offsetLeft - 93
//* 3: scrollTop & scrollLeft - 94
//* 4: scrollWidth & scrollHeight - 95
//* 5: offsetWidth & offsetHeight - 96
//* 6: clientWidth & clientHeight - 97
//* 7: ClientX & ClientY - 98
//* 8: pageX & pageY - 99
//* 9: screenX & screenY - 100
//* 10: offsetX & offset - 101
//* 11: CtrlKey, AltKey, ShiftKey & MetaKey - 102
//* 12: JavaScript Key Property - 104
//* 13: JavaScript Clipboard Events : onCut, onCopy & onPaste - 105
//* 14: JavaScript ononline & onoffline - 106
//* 15: clientX vs pageX vs screenX vs offsetX