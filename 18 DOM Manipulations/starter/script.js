'use strict';
//✅✅NOTE1
// getElementById Vs getElementsByClassName Vs querySelector Vs querySelectorAll
//✅getElementById:   👉"Selction Criteria": Selects elements based on their unique ID attribute.   👉"Return Value": Returns a single element (the first matching element) or null if no match is found.     👉"Usage": Ideal for selecting a single element when you know it has a unique ID.   👉"Example": const element = document.getElementById("myId");

//✅getElementsByClassName:   👉"Selction Criteria": Selects elements based on their class names.   👉"Return Value": Returns a live HTMLCollection (a list-like object) of all matching elements. which is an array-like collection of elements. You typically need to access elements by index (e.g., [0]) or loop through them.    👉"Usage": Useful when you want to select multiple elements with the same class and perform operations on all of them.  The collection is live, meaning it updates automatically if new elements with the matching class name are added or removed from the DOM.  👉"Example": const elements = document.getElementsByClassName("myClass");

//✅querySelector:    👉"Selection Criteria": Selects elements using CSS-like selectors, which can include IDs, class names, tag names, attributes, and complex combinations.    👉"Return Value": Returns the first matching element or null if no match is found. It doesn't return a live collection, so you can work directly with the selected element.    👉"Usage": Highly versatile for selecting elements using various criteria, especially when you want to select elements based on complex conditions.    👉"Example": const element = document.querySelector("#myId .myClass");

//✅querySelectorAll:    👉"Selection Criteria" : You pass a CSS selector as a string to querySelectorAll, and it returns all elements that match the selector within the context you specify (typically the entire document, but it can also be a specific element).    👉"Return Value": It returns a non-live NodeList object,which is a static collection of elements that match the specified CSS selector. The NodeList does not automatically update if the DOM changes after the initial selection.    👉"Usage": Since it returns a NodeList, you can access elements using numerical indices like an array (e.g., nodeList[0]) and iterate through them. It offers greater flexibility in selecting elements using various CSS selectors.
// 👉"Example of querySelectorAll":
/*

   const elements = document.querySelectorAll('.my-class');
   elements.forEach(element => {
   element.style.color = 'blue';
});

*/

//✅✅NOTE2
// ✅1: we can not use 'forEach()' method on 'Live HTML Collection' Obtained by using getElementsByClassName(), if we want to use forEach() on that then we have to first convert it into an array using 'Array.from() method', however we can use 'for-loop' on 'Live HTMLCollection'.
// ✅2: we can use forEach() method on 'Non Live NodeList' Obtained by using 'querySelectorAll()' since they return the 'nodeList' as a collection of an array.
// ✅3: we can also use for-loop on 'querySelectorAll()'.

//* ///////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); //? here btnOpenModel is 'node list' and its a 'node list' because its the result of querySelectorAll() all right? now remember that a 'node list' is not an array but still it does have the forEach() method , so it doesn't have most of the methods that arrays have but forEach() is one of the method that a node list has as well.
const btnScrollTo = document.querySelector('.btn--scroll-to');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//* ///////////////////////////////////////
//*✅ Modal window
//const openModal = function () {
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//for (let i = 0; i < btnsOpenModal.length; i++)
//btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); //? here btnOpenModel is 'node list' and its a 'node list' because its the result of querySelectorAll() all right? now remember that a 'node list' is not an array but still it does have the forEach() method , so it doesn't have most of the methods that arrays have but forEach() is one of the method that a node list has as well.

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//* ///////////////////////////////////////////////////////
//*✅✅ Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, scrollY);

  console.log(
    'Height/Width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //*✅Scrolling  ( not workin in any browser except 'firfox )
  //window.scrollTo(s1coords.left + window.pageXOffset, window.pageYOffset + s1coords.top);
  // window.scrollTo({
  // left: s1coords.left + window.pageXOffset,
  // top: s1coords.top + window.pageYOffset,
  // left: s1coords.left + window.scrollX,
  // top: s1coords.top + window.scrollY,
  // behavior: 'smooth'
  // });
  //the above code is kind of old school ways of scrolling an element

  //* Modern way of scrolling an element
  section1.scrollIntoView({ behavior: 'smooth' }); //? ( not working in any browser except 'firfox )
});

//* /////////////////////////////////////////////////////
//*✅✅Page Navigation ( Through forEach() menthod )
// document.querySelectorAll('.nav__link').forEach(function (el) {
//? Now, as you see, this works just fine, but the problem is that it's not really efficient. so we are adding here the exact same 'callBack function, so the 'eventHandler here' we are adding it once to each of these the three elements. so the exact same function is now attached to these three elements and that's kind of unnecessary, i mean ofcourse it would be fine for only three elements, but what if we had 1000, or like 10,000 elements? if we would attach an event handler to 10,1000 elements like this, so like we did here with forEach() function, then we would effectively be creating 10,000 copies of the same function here and that would then certainly impact the performance. and its really just not a clean solution in that case. and so, the better solution without a doubt, is to use 'Event Delegation'. so in 'Event Delegation' we use the fact that events bubble up. and we do that by putting the 'eventListener()' on a common parent of all the elements that we are interested in.

//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(this.href); //? this will give the real or live 'href' link from the web page
//     const id = this.getAttribute('href'); //? this will give the lockal 'href' link which is in the actual codebase of the HTML file.
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//*✅✅Page Navigation ( Through Event Delegation )
// In Event Delegation we basically need two steps:
// 1: Add eventListener to common parent element
// 2: Determine which element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  // Matching Stretegy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//* //////////////////////////////////////////////////
//*✅✅Tabbed Component
//tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));  // this is an old school way
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //console.log(clicked);

  // Gaurd Class
  if (!clicked) return;

  // Removing active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate Content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//* /////////////////////////////////////////////////
//*✅✅Menu fade animation

// const handleHover = function (e, opacity) {
const handleHover = function (e) {
  //console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      // console.log(el);
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {   //? here 'mouseover event' is actually similar to 'mouseenter event' with the big difference that 'mouseenter' does not bubble, okay? but here, we need the event to actually bubble so that it can even each the 'navigation element' and so therefore we use 'mouseover', all right? and there are also kind of opposite events of 'mouseover' and 'mouseenter'. And we use these to basically 'undo' what we do on 'hover' so the opposite of 'mouseenter' is 'mouseleave', and the opposite of 'mouseover' is 'mouseout'.
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//* /////////////////////////////////////////////////
//*✅✅Sticky navigation
//* Method 1: Using 'Scroll Evenet'
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {  // the 'scroll event' is not really efficient because it is fired all the time when scrolling happens and usually it should be avoided.
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//* Method 2: Using Interscetion Observer API
// const obsCallback = function (enteries, observer) {
//? this Callback function here will get called each time that the 'observed element' so our 'target element' here 'section1' is intersecting the 'root element' ( the entire viewport in this case ) at the 'threshold' that we defined, okay?, And this function will get called with two arguments, and that's the 'enteries' and the 'observer object' itself
//   //console.log(observer);
//   enteries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null, //? the 'root' here is the element that the target is intersecting, so here the 'section1' is target element and 'root' element' (view port here because 'root' is set to 'null')  will be the element that we want our target element to intersect, so we can also select any elemet in the root but as an alternative we took null here, and so we will be able to observe our target element intersecting the entire viewport.
// threshold: 0.1, //? 0.1 here is equivalent to 10% (threshold here is the percentage of intersection at which the observer callBack will be called,)
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (enteries) {
  const [entry] = enteries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //rootMargin: '-90px',
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//* /////////////////////////////////////////////
//*✅✅ Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSections = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//* //////////////////////////////////////////
//*✅✅ lazy Loding Image
const imageTargets = document.querySelectorAll('img[data-src]');

const lazyImage = function (enteries, observer) {
  //console.log(enteries);
  //const [entry, entry2, entry3] = enteries;
  //const entry = enteries[0];
  // const [entry, entry2, entry3] = enteries;
  // console.log('image-1', entry);
  // console.log('image-2', entry2);
  // console.log('image-3', entry3);

  const [entry] = enteries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(lazyImage, {
  root: null,
  threshold: 0.2,
});

imageTargets.forEach(function (img) {
  imageObserver.observe(img);
});

//* ///////////////////////////////////////////
//*✅✅ Slider
// Main Function
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  //const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  let curSlide = 0;
  let maxSlide = slides.length;

  // Functions
  const creatDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}" data-name="hameed"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${-100 * (i - slide)}%)`;
      // curSlide = 1: -100%, 0%, 100%, 200%
    });
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    creatDots();
    activateDot(0);
  };
  init();

  // Event Handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') prevSlide();
    e.key === 'ArrowLeft' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const name = e.target.dataset.name;
      // console.log(name);
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//* ////////////////////////////////////////////////////
//* ///////////////////////////////////////////////////
//*✅✅Selecting elements
// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// document.getElementById('section--1');
// const allButton = document.getElementsByTagName('button');
// console.log(allButton);

// document.getElementsByClassName('btn');

//* //////////////////////////////////////////
//*✅✅Creating and inserting elements
// .insertAdjacentHTMl
//const message = document.createElement('div');
//message.classList.add('cookie-message')
//message.textContent = 'We use cookied for improved functionality and analtyics';
//message.innerHTML = 'We use cookied for improved functionality and analtyics. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message)  //? so prepend() basically adds the element as the first childe of 'header element' we can also add it as last child. so i.e append().
//header.append(message);  //? so now we can see its appended as last child of the 'header element', now what we see here is that the element was actually only inserted once even if we prepend() and append() it at the same time, now that's because the element here so 'message' is now indeed a live element living in the DOM and so therefore it can not be at multiple places at the same time, its just like a person that also can not be at two places simultaneously right? so what happend here is that we first prepended() the element and then we appended() it and what this append() did here was to basically move the element from being the 'first child' to being the 'last child' all right? so basicalyy it moved the element and didn't really insert it because it was already inserted by prepend() method,
//? so what this mean is that we can use the prepend() and append() method not only to insert elements but also to move them and again that is because a DOM element is unique so it can always only exist at one place at a time, but now what if we actually wanted to insert multiple copies of the same element well, in that case we actually would have to first copy the fist element.

//header.append(message.cloneNode(true));

//header.before(message); //? as the name says this will insert the 'message' before the 'header element' so as a sibling, so first the 'cookie meassage' and then the 'header element' but they are siblings.
//header.after(message); //? and this one will insert the 'message' after the 'header element', so they are also a sibling. so we have the whole 'header element' and then the 'cookie message'

//? so that is how we create and insert element programmetically.

//* ///////////////////////////////////////////
//*✅✅removing or deleting elements
//document.querySelector('.btn--close-cookie').addEventListener('click', function(){
//message.remove(); //? here we do not need to run document.querySelector() again to select the 'meassage' because we already have it in memory so we alrady have it stored in a variable there is no need to run  document.querySelector() again. ofcourse we could do it and it would work as well so we could select the element with the class of 'cookie-message' but again that's not necessary because we already have it stored in memory.
//? this remove() method here is actually very recent before this method existed all we could do was to 'remove child element' and so back then we had to select the parent element first and then remove the child element from there, so that would look lik below;
// message.parentElement.removeChild(message); //? this way of moving up and down in the DOM tree like selcting the parent element is called DOM traversing.
//})
//console.log(message.parentNode);

//* ////////////////////////////////////////////////
//*✅✅CSS inline Styles
//message.style.backgroundColor = '#37383d';
//message.style.width = '120%';  //? thses are called inline style

// console.log(message.style.height); //? and we get nothing in the output that's because using the 'style property' like here only works for 'inline styles' that we sets ourselves and also by using the 'style property' like we did above. so its going to work for example for 'backgroundColor'
// console.log(message.style.backgroundColor); //? here we will actually get backgroundColor in output and again because it is an 'inline style' so style that we set manually ourselves but we can not get a style that is 'hidden inside of a class' or may be that doesn't even exist, we can still get the styles that are in the style sheet or the styles that are applied by browser by default by the below method.

//*✅✅Computed CSS Style
// console.log(getComputedStyle(message)); //? now here we get a huge object as an  output and so this object contains all of the properties with all of the values and in practice we simply take a certain property like color, height etc like below;
// console.log(getComputedStyle(message).color); // OUTPUT: rgb(187, 187, 187)
// console.log(getComputedStyle(message).height); //? OUTPUT: 50px ,  so this a computed style which means that it is real style as it apears on the page live and even if we do not declear it in our CSS style sheet for example the 'height property' here we didn't defined ourselves but the browser ofcourse needed to calculate the height to display it and so we can then get access to that value as we get 50px here. and we can also change or modify its value like below;

//message.style.height = getComputedStyle(message).height + 40 + 'px'; //? the height will not increase here because ( now here we are going to run into a problem because as you see this '50px' value here itself comes in pixels, so here 'height' is already a string, so here we are trying to add a number to string which ofcourse is not going to work because it has the 'px' here already , but we already studied a nice function which can essentially take the number out of the string so basically parse the number from there like below; )

//message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; //? here it will only take the number part i.e 50 from '50px' or the 'computed height' and then add 30 to it and then add 'px'to it.

//* ///////////////////////////////////////////////
//* ✅✅CSS custom property or CSS Variable ( the css property which is defined inside a :root variable )  ' :root here is equivalent to document '. they are called custom properties but again they are more like vaiables
//? the idea of css variables is ofcourse very similer to the idea of variables in javaScript, so this way we can change a value in many places all over our css files by simply changing the value in the :root.
//document.documentElement.style.setProperty('--color-primary', 'orangered')

//* ////////////////////////////////////////////////////
//* ✅✅Atributes ( src, href, id, classs, alt and many more all these are 'atributes' in HTML)
//? in javascript we can ofcourse access and change these different atributes
//const logo = document.querySelector('.nav__logo');
//console.log(logo.alt);
//logo.alt = 'Beutiful minimalist logo';

//*✅✅Non-Standard Atribute
//console.log(logo.designer);
//console.log(logo.getAttribute('designer'));

//logo.setAttribute('Company', 'Bankist');
//console.log(logo.src); //? this will give the real or live 'image source' from the web page
//console.log(logo.getAttribute('src')); //? this will give the lockal source of the image or where actually the image is located relative to the HTML file in local machine.
// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//*✅✅Data Atributes
//console.log(logo.dataset.versionNumber);  //? so here we use 'camelCase' for 'versionNumber' while we use dash in the HTML file for 'version-number', so just like property names in CSS we need to transform this here into 'camelCase'. so that's important to keep in mind.

//*✅✅Classes
// logo.classList.add('c', 'j'); //? we can add multiple classes at the same time.
// logo.classList.remove('c', 'j'); //? we can remove multiple classes at the same time
// logo.classList.toggle('c');
// logo.classList.contains('c'); //? it is really called 'contains' and not 'includes' like it is called in arrays.

//? don't use this ( because this will overwrite all the existing classes and also it allows us to only put one class on any element, all right? so again, only one class and it will override whatever is already there )
//console.log(logo.className);
//logo.className = 'hameed';

//* //////////////////////////////////////////////////////////////////
//* ✅✅ Types of Event and Eventhandlers
// const alertH1 = function(e){
// alert('addEventlistner: Great You are reading the heading :D');

//? ✅removing an eventlistener ( but ofcourse it doesn't have to be in here only we can use it any where in the program or if we want to use it after a certain amount of time has passed we can use it )
// h1.removeEventListener('mouseenter', alertH1); //? this will remove the addEventListener() event, so that means we can run the 'event' only once.
// }
//*✅modern way of listening to an event using 'addEventListener()'
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

//*✅this is another pattern of removing the eventListener.
// setTimeout(() =>{
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000)

//? ✅this is a old way of listening to an event, so, it used to be done like this in the old days. but now we always use 'addEventListener()'.
//? there are two ways why 'addEventListener()' is better and the first one is that it allows us to add multiple evetListeners to the same event. and if we try to add multiple event through this method then the second event will simply override the first one.
//? and the second one is that we can actually remove an event handler in case we don't need it anymore.
// h1.onmouseenter = function(e){
//   alert('addEventlistner: Great You are reading the heading :D');
// };

/* 
//* ///////////////////////////////////////////////////////
//* Event Propagation ( Event Bubbling And Event Capturing )
//? the 'event bubbling' always works from 'bottom to top' i.e from child to parents where as 'event capturing' woks exactly opposite to that of 'event bubbling' and i.e from 'top to bottom' or from 'parents to child'.

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); //? the 'e.target' means where the 'click event' or any other event actually happened or initiated or started  and the 'e.currentTarget' means where the 'eventHandler function' is actually attchached'
  console.log(e); // event Object
  console.log(e.currentTarget === this); //? the value of the e.currentTarget is same as the 'this keyword' in an eventHandler function

  //? Stop propagation ( stopping 'event bubbling' and 'event capturing' )
  //? in practice its not a good idea to stop the propagation we just learnt it for information purpose.
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget); //? the 'e.target' means where the 'click event' or any other event actually happened or initiated or started  and the 'e.currentTarget' means where the 'eventHandler function' is actually attchached'
  console.log(e);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    //? the default behaviour of an eventHadler function is the 'event bubbling' and if we want to change it to 'event capturing' we have to pass a 3rd parameter in adevenListener('click', functionName, true) i.e 'true' and by default it is set to 'false', however 'event capturing' is not that useful as 'event bubbling' is, 'event bubbling' is very usefull in 'event delegation' .
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget); //? the 'e.target' means where the 'click event' or any other event actually happened or initiated or started  and the 'e.currentTarget' means where the 'eventHandler function' is actually attchached'
  },
  true
); //? 'true' here enables the 'event capturing' phase but is not that useful now a days, it only exist for the historical reasons.
 */

// const feature =document.querySelector('.features__icon');
// console.log(feature.parentNode);
// console.log(feature.childNodes);

// const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs.length);
// console.log(paragraphs[0].firstChild.nodeValue);
// console.log(paragraphs[0].nodeName);
// console.log(paragraphs[0].tagName)'

//* ///////////////////////////////////////////
//*✅✅Dom Traversing
// const h1 = document.querySelector('h1');

//* ✅Going downwards: parent to child
// console.log(h1.querySelectorAll('.highlight')); //? so this here indeed selects all the elements with the 'highlight' class that are 'children of h1 element'. and that would work no matter how deep these child elements would be inside of the 'h1 element'. okay? and that's very important to notice. All right, now, in this case these two elements here are 'direct children' of the 'h1 element' but as i said, it would go down as deep as necessary in the DOM tree okay? and also if there were other 'highlight' elements on the page, so elements with this class, they would not get selected, because they would not be 'children of h1 elements'. so these are two things to remember about querySelectorAll.
// console.log(h1.childNodes);
// console.log(h1.children); // this will only works for direct child
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

//* ✅Going Upwards: child to parent
// console.log(h1.parentNode);
// console.log(h1.parentElement); //? most of the time we actually need a parent element which is not a direct parent. or in other words, we might need to find a parent element no matter how far away it is in DOM tree. and for that we have the 'closet() method'.

// h1.closest('.header').style.background = 'var(--gradient-secondary)'; //? So lets say on the page, we had multiple 'headers', so multiple elements with a class of 'header', but for some reason we only wanted to find the one that is the parent element of 'h1'. And so the 'closest() method' recieves a query string just like querySelector and querySelectorAll.
//? so it slected the 'closest header' to our 'h1' element, so the 'closest parent element' that has the class 'header' and then its simply applied all style to that element. so this is a very important one and we are going to use it all the time specially for 'Event Delegation'.

// h1.closest('h1').style.background = 'var(--gradient-primary)'; //? now if the 'selctor' here actually matches the element on which we are calling 'closest()' then that's actually the element that's gonna be returned. so here if we are looking for the 'closest h1' then that's gonna be exactly the 'h1 element itself'. so we can think of 'closest()' here as basically being the opposite of querySelector. so both receive a query string as an input but 'querySelctor' finds children no matter how deep in the DOM tree, while the 'closest() method' finds parents and also no matter how far up in the DOM tree.

//* ✅Going Sideways: Siblings
//?for some reasons in javascript we can only access direct siblings so basically only the previous and the next one.
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children); //? now if we really need all the siblings and not just the previous and the next one, then we can use the trick of 'moving up' to the 'parent element' and then read all the 'children' from there.
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

//* //////////////////////////////////////////////
//*✅✅Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  // console.log('HTML Parsed And DOM Tree Build', e);
});

window.addEventListener('load', function (e) {
  // console.log('Page Fully Loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
