//# Event Propagation in JavaScript
//* //////////////////////////////////////

let myDiv = document.getElementById("mydiv");
let button = document.getElementById("btn");

const buttoClicked = (event) => {
  console.log("Button Clicked...");
  // event.stopPropagation();
};
const divClicked = () => {
  console.log("Div Clicked...");
};
const bodyClicked = () => {
  console.log("Body Clicked...");
};

//# Event Propagation:
//? 1: Event Bubbling:
// in Event Bubbling the propagation goes from child to parent.

//? 1: Event Capturing:
// in Event Capturing the propagation goes from parent to child.

//* Event Bubbling:
button.addEventListener("click", buttoClicked);
myDiv.addEventListener("click", divClicked);
document.body.addEventListener("click", bodyClicked);

//* NOTE:
//  1:Bydefault the elements are in 'Event Bubbling' mode.

// 2: if we want to use 'Event Capturing' we have to pass the third argument as 'true' in the addEventListener() method.

// 3: in 'Event Bubbling'  mode the third argument is set to 'false' by the browser it self.

//* Event Capturing:
// button.addEventListener("click", buttoClicked, true);
// myDiv.addEventListener("click", divClicked, true);
// document.body.addEventListener("click", bodyClicked, true);
