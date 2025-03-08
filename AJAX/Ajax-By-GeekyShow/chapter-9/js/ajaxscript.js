"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

//# Rendering / Displaying 'API Data' on web page

const dataContainer = document.getElementById("data");
const userId = document.getElementById("user-id");
const id = document.getElementById("id");
const title = document.getElementById("title");
const body = document.getElementById("body");

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();

  //* Handling Single post data
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  //* converts 'JSON Data' into javaScript Object .
  xhr.responseType = "json";

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);

      //# Rendering / Displaying 'API Data' on web page
      userId.innerText = `UserID - ${xhr.response.userId}`;
      id.innerText = `Id - ${xhr.response.id}`;
      title.innerText = `Title - ${xhr.response.title}`;
      body.innerText = `Body - ${xhr.response.body}`;
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
