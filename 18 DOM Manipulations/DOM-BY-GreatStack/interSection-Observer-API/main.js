//# Intersection Observer:
//* Intersection Observer Study Link: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin ( MDN )

const box = document.getElementById("box");
const container = document.getElementById("container");

//* Creating the callBack function:
//? this callBack function eccepts an 'array of entries', these entries describe details about the intersection.
const callbackFunction = (entries) => {
  //  console.log(entries);
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting === true) {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "black";
  }
};

//* Creating Observer:
//? This callBack function will run whenever an intersection will occur.
//? This expect a callBack function and an intersectionObserver constructor
const observer = new IntersectionObserver(callbackFunction, {
  threshold: 0, //? tells the ratio at which the element will intersect the root element. ( the default root is always the view port, if no root element is defined explicitly  )
  // threshold: [0.2, 0.4, 0.6], //? we can also pass multiple threshold in the form of an array if we want to call the 'observer function' at different threshold.
  root: container, //? here we are changing the root element from the 'view port' to the 'container element', but generally we use browser's 'view port' as the root.
  rootMargin: "400px 0px -600px 0px", //? root marging expand or shrink the root element( view port ) means the 'observer function' will be called before the element actually come in the view port and we can reverse it by giving rootMarging in negative.

  //*NOTE:
  // to understand how 'rootMargin' works, see the 'rootBounds' property of the 'IntersectionObserverEntry' or 'entry' object.
});

//* Calling the 'observer':
//? to make the observer work we have to call it.
observer.observe(box);
// observer.unobserve(box) //? stop observing the intersection of the element box.

//*-------------------------------------------------
//? Supose we have multiple observer, observing multiple elements, so we can disconnect them at once.
// observer.observe(box);
// observer.observe(box2);
// observer.observe(box3);
// observer.disconnect(); //? it will stop observing all the elements at once.
