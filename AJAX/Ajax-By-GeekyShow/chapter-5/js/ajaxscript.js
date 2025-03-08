"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

//* Rendering / Displaying 'Text Data' on web page
const dataContainer = document.getElementById("data");

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      dataContainer.innerText = xhr.responseText;
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
