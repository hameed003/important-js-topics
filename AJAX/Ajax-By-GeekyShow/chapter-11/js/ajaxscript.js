"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

//# Making POST request to the server.

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();

  //* Handling multiple post data
  xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);

  //* Setting the Content-Type to json.
  xhr.setRequestHeader("Content-Type", "application/json");

  //* converts 'JSON Data' into javaScript Object .
  xhr.responseType = "json";

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log("Problem Occured");
    }
  };
  myData = '{ name: "Hameed", salary: "500", age: "24" }';
  xhr.send(myData);
}
