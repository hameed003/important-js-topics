"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.timeout = 1000;

  //* onload() eventHandler
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr);
      console.log(xhr.responseText);
    } else {
      console.log("Problem Occured");
    }
  };

  //* onprogress eventHandler
  xhr.onprogress = (e) => {
    console.log(e.loaded);
    console.log(e.total);
  };

  //* onerror eventHandler
  xhr.onerror = () => {
    console.log("Network Not Available");
  };

  //* onloadstart eventHandler
  xhr.onloadstart = () => {
    console.log("Transaction has Started....");
  };

  //* onloadend eventHandler
  xhr.onloadend = () => {
    console.log("Transaction End");
  };

  //* onabort eventHandler
  xhr.onabort = () => {
    console.log("Request Aborted");
  };

  //* ontimeout eventHandler
  xhr.ontimeout = () => {
    console.log("Transaction timeout..");
  };
  xhr.send();
}
