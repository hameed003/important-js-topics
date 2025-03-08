"strict mode";
document.getElementById("btnajax").addEventListener("click", makeRequest);

//# Rendering / Displaying 'XML Data' on web page

const dataContainer = document.getElementById("data");
const nm1 = document.getElementById("name-id1");
const roll1 = document.getElementById("roll-id1");
const nm2 = document.getElementById("name-id2");
const roll2 = document.getElementById("roll-id2");

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

      // console.log(xhr.response.getElementsByTagName("student")[0]);
      // console.log(
      //   xhr.response
      //     .getElementsByTagName("student")[0]
      //     .getElementsByTagName("name")[0]
      // );
      // console.log(
      //   xhr.response
      //     .getElementsByTagName("student")[0]
      //     .getElementsByTagName("name")[0].childNodes[0]
      // );

      //# Retrieving data from xml document.
      //* Retrieving first student name from xml data.
      stuName1 = xhr.response
        .getElementsByTagName("student")[0]
        .getElementsByTagName("name")[0].childNodes[0].nodeValue;
      console.log(stuName1);

      //* Retrieving first student roll from xml data
      sturoll1 = xhr.response
        .getElementsByTagName("student")[0]
        .getElementsByTagName("roll")[0].childNodes[0].nodeValue;
      console.log(sturoll1);

      //* Displaying first student data.
      nm1.innerText = stuName1;
      roll1.innerText = sturoll1;

      //* Retrieving second student name from xml data.
      stuName2 = xhr.response
        .getElementsByTagName("student")[1]
        .getElementsByTagName("name")[0].childNodes[0].nodeValue;
      console.log(stuName2);

      //* Retrieving second student roll from xml data
      sturoll2 = xhr.response
        .getElementsByTagName("student")[1]
        .getElementsByTagName("roll")[0].childNodes[0].nodeValue;
      console.log(sturoll2);

      //* Displaying second student data.
      nm2.innerText = stuName2;
      roll2.innerText = sturoll2;

      console.log(dataContainer);
    } else {
      console.log("Problem Occured");
    }
  };
  xhr.send();
}
