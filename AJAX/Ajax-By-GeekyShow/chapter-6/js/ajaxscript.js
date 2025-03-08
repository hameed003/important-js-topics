"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

//* Rendering / Displaying 'JSON Data' on web page

const dataContainer = document.getElementById("data");
const nm = document.getElementById("name-id");
const roll = document.getElementById("roll-id");

/*
function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);

  //* converts 'JSON Data' into javaScript Object .
  xhr.responseType = "json";

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      const data = xhr.response;

      nm.innerText = data[0].name;
      roll.innerText = data[0].roll;
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
 */

//#------------------------------------------------------
//* Convert 'JSON data into javaScript Object using JSON.parse() method.

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);

  //* converts 'JSON Data' into javaScript Object .
  // xhr.responseType = "json";

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      const data = JSON.parse(xhr.response);
      console.log(data);

      nm.innerText = data[0].name;
      roll.innerText = data[0].roll;
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
