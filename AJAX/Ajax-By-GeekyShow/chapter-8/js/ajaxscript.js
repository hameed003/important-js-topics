"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

//# Rendering / Displaying 'XML Data' on web page

const dataContainer = document.getElementById("data");

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.xml", true);

  //* parsing xml data .
  xhr.responseType = "document";

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);

      //# Rendering / Displaying 'XML Data' on web page using 'for-loop'.
      x = xhr.response.getElementsByTagName("student");
      for (i = 0; i < x.length; i++) {
        dataContainer.innerHTML += `<p> ${
          x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
        }</p>
        <p> ${
          x[i].getElementsByTagName("roll")[0].childNodes[0].nodeValue
        }</p>`;
      }

      console.log(dataContainer);
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
