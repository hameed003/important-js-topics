"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  // xhr.open("GET", "data.txt", true);
  xhr.open("GET", "data.json", true);
  xhr.responseType = "json"; // by default the 'responseType' will be plain/text.
  xhr.setRequestHeader("Content-Type", "application/json");

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("XHR:", xhr);
      console.log("response:", xhr.response);
      // console.log("responseText:", xhr.responseText); //? this will only work if the 'responseType' is set to plain/text.
      console.log("statusText:", xhr.statusText);
      console.log("responseURL:", xhr.responseURL);
      console.log("withCredentials:", xhr.withCredentials);
      console.log("getResponseHeader:", xhr.getResponseHeader("content-type"));
      console.log("getResponseHeader:", xhr.getResponseHeader("LAST-Modified"));
      console.log("getAllResponseHeaders:", xhr.getAllResponseHeaders());
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
