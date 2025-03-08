document.getElementById("btnajax").addEventListener("click", makeRequest);

/* 
function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();

  console.log("readyState before calling open() method", xhr.readyState);
  xhr.open("GET", "data1.txt", true);
  console.log("readyState after calling open() method", xhr.readyState);
  xhr.onreadystatechange = () => {
    console.log("readyState", xhr.readyState);
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

//*-------------------------------------------------------------------
//* Implementing Logic Based On onreadystatechange.
function makeRequest() {
  console.log("Button Clicked");
  const xhr = new XMLHttpRequest();

  if (xhr.readyState === 0) {
    console.log("open() method not called yet ( UNSENT ):", xhr.readyState);
  }

  xhr.open("GET", "data.txt", true);

  if (xhr.readyState === 1) {
    console.log("open() method has beed called ( OPENED ):", xhr.readyState);
  }

  //* callBack function to be executed once the request is sent to the server.
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 2) {
      console.log(
        "send() method has beed called ( HEADERS_RECEIVED ):",
        xhr.readyState
      );
    }

    if (xhr.readyState === 3) {
      console.log(
        " The Data / Response is being loaded / received ( LOADING ):",
        xhr.readyState
      );
    }

    if (xhr.readyState === 4) {
      console.log(" Data Loaded Succesfully ( Done ):", xhr.readyState);
    }

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
