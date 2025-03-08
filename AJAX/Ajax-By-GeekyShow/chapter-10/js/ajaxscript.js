"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

//# Rendering / Displaying 'API Data' on web page

const table = document.getElementById("table");

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();

  //* Handling multiple post data
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  //* converts 'JSON Data' into javaScript Object .
  xhr.responseType = "json";

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
      const x = xhr.response;
      for (i = 0; i < x.length; i++) {
        table.innerHTML += `<tr>
        <td>${x[i].id}</td>
        <td>${x[i].title}</td>
        <td>${x[i].body}</td>
        </tr>`;

        console.log(x[i].userId);
        console.log(x[i].id);
        console.log(x[i].title);
        console.log(x[i].body);
      }
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
