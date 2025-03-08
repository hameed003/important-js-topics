document.getElementById("btnajax").addEventListener("click", makeRequest);

function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  // This callBack function will only run once the 'send() method' is called OR the Request is sent to the server by 'send() method'.
  xhr.onreadystatechange = function () {
    //? Anonomous Funtion
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr);
        console.log(xhr.responseText);
      } else {
        console.log("Problem Occured");
      }
    }
  };
  xhr.send();
}

//*--------------------------------------------------------------
/* 
//* The Above Code Using Arrow Function
function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  // This callBack function will only run once the 'send() method' is called OR the Request is sent to the server by 'send() method'.
  xhr.onreadystatechange = () => {
    //? Arrow Funtion
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr);
        console.log(xhr.responseText);
      } else {
        console.log("Problem Occured");
      }
    }
  };
  xhr.send();
}
 */
