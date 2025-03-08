//# DOUBTS
// 1: Difference between 404 error and actual error in an AJAX call.
// 2: what is axios.
//* Reference: Coder's Gyan: https://youtu.be/D5WkKTorCqo?si=jCSvjZ8BPnNggoh-
//* XHR or XMLHttpRequest() MDN Study Link: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

//!✅ Making HTTPS request in javaScript
//* There are many ways of making a https request in javaScript.

//*  Method 1: Making a http Request Using XHR or XMLHttpRequest() Object.
//*  Method 2: Making a http Request Using fetch() API.
//*  Method 3: Making a http Request Using axios npm library.
//#---------------------------------------------------------------------------

const url = "https://jsonplaceholder.typicode.com/users";

/*
//#  Method 1: Making a http Request Using XHR or XMLHttpRequest() Object.
let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
//✅1: Specify the request method and URL: ( The open() method allows you to specify the HTTP method (e.g., GET, POST, PUT, DELETE) and the URL of the server-side script or resource you want to interact with.)
//✅2: Configure the request: ( You can configure additional aspects of the request, such as whether it should be asynchronous (true for asynchronous, false for synchronous), and optionally, the username and password for basic authentication.)
//✅3: Prepare the request: open() method prepares the request to be sent but does not actually send it. This allows you to set up event handlers and make any other necessary configurations before sending the request.

//* Different http request methods and there use.
// 1: GET ( It is used to get data from the server )
// 2: POST ( It is used to post data to the server )
// 3: PUT ( It is used when we want to update our data completely on the server )
// 4: PATCH ( It is used when we want to update our data partially on the server )
// 5: DELETE ( It is used to delete the data from the server )

//* Predefining the 'responseType' of the data to avoid JSON.parse().
xhr.responseType = "json"; //? now the server will convert the JSON data into an object first and then it will send it to the client.

//* Handling Response:
xhr.onload = () => {
  console.log("Request Completed");
  console.log(xhr);
  // console.log(xhr.response);
 // console.log(xhr.responseText); 

  //* if responseType is not set
  // console.log(JSON.parse(xhr.response)); //? we can avoid wrting JSON.parse() again and again by predefining the 'responseType'.
  
  //* if responseType is set
  //console.log(xhr.response);

  //* Implementing Logic based on status code.
  if (xhr.status >= 400) {
    console.log("Request Failed!");
  } else {
    console.log(xhr.response);
  }
};

//* Handling Error:
xhr.onerror = () => {
  console.log("Error!!");
};

//* NOTE: every 'eventListener' or 'eventHandler' should be registered before calling the send() method, otherwise it will not work properly, and the 'eventListener' or 'eventHandler' will always be executed once the request is sent by the 'send() method'.
xhr.send(); // Sends the request to the server.
*/

//# -------------------------------------------------------------------
//# The above code using function or by creating a mini axios.
// axios is a npm library used for making http request, we generally use them in javaScript framework like React js, Angular js etc.

// here in 'myAxios function' the third parameter 'body' set to null ( default ) is for 'POST' request only it will be null for 'GET' request, since we dont pass third argument in case of a 'GET' request.
const myAxios = (method, url, body = null) => {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);

  //* Predefining the 'responseType' of the data to avoid JSON.parse().
  //xhr.responseType = "json";

  //* Setting the Content-Type to json.
  xhr.setRequestHeader("Content-Type", "application/json");
  // for storing data to the server we have to set the Content-Type from 'plain/text' to 'application/json' because server needs data in the form of JSON.

  //* Handling Response:
  xhr.onload = () => {
    console.log("Request Completed");

    //* Implementing Logic based on status code.
    if (xhr.status >= 400) {
      console.log("Request Failed!");
    } else {
      console.log(xhr.response);
    }
  };

  //* Handling Error:
  xhr.onerror = () => {
    console.log("Error!!");
  };

  //* For 'GET' request.
  // xhr.send();

  //* For 'POST' request.
  // xhr.send(body); // since 'body' here is an object, it is not a valid format of data to store it on the server, so first we have to convert it into a JSON or String type.

  xhr.send(JSON.stringify(body)); // but this is also not enough to store the data to the server, the server is treating our data as a plain text but server needs the data as key/value pair, so we have set the content-Type to JSON. ( we have set the content-Type to json above. )
};

//* Calling The myAxios() function
// myAxios("GET", url);

//#----------------------------------------------------------------------
//# Doing POST Request with XMLHttpRequest():
// in POST request we have to pass a third argument 'option object'.
myAxios("POST", url, {
  name: "hameed",
  job: "Web Developer",
});

//#----------------------------------------------------------------------
//# Converting the above function myAxios into a promise based response.
/* 
const myAxios = (method, url, body = null) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      console.log("Request Completed");
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject(xhr.response);
    };

    //* For 'GET' request.
    // xhr.send();

    //* For 'POST' request.
    xhr.send(JSON.stringify(body));
  });
};

//* Calling The myAxios() function after converting it to Promise.
myAxios("POST", url, {
  name: "hameed",
  job: "Web Developer",
})
  .then((res) => {
    console.log("Message from then() block", res);
  })
  .catch((err) => {
    console.log(err);
  });
 */

//#--------------------------------------------------------
//# SOME IMPORTANT QUESTION:
//* Q1: what is the difference between 'response' and 'responseText' in an XMLHttpRequest (XHR)  request object?
// In an XMLHttpRequest (XHR) request object, response and responseText are properties that hold different representations of the response from the server:

//* 1: response:
// The 'response property' represents the response from the server in a format based on the value of the 'responseType property' set on the XHR object. By default, responseType is an empty string, which means the response is returned as text. However, you can set responseType to other values such as 'json', 'blob', or 'document' to parse the response in different ways.

//* 2: responseText:
// The 'responseText property' specifically holds the response as a string. It is equivalent to response when responseType is an empty string or 'text'. If the response is not in text format, responseText will be an empty string.

//* Example:
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://example.com/data", true);

// // Set responseType to 'json'
// xhr.responseType = "json";

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       console.log(xhr.response); // Parsed JSON object
//       console.log(xhr.responseText); // Empty string
//     } else {
//       console.error("Request failed with status:", xhr.status);
//     }
//   }
// };

// xhr.send();

//#--------------------------------------------------------------
//* Q2: what is difference between responseType and requestType  property in the XHR object?

//* 1: responseType:
// responseType is a property of the XHR object that determines how the response from the server should be parsed. It specifies the type of data that is expected in the response. For example, setting responseType to 'json' indicates that the response should be parsed as JSON, while setting it to 'blob' indicates that the response should be treated as a binary blob. Other possible values include 'arraybuffer', 'document', and '' (empty string, indicating that the response should be returned as text).

//* requestType:
//  There is no standard property called requestType in the XHR object. The request type is typically specified when you call the open() method to initialize the request. The open() method takes parameters for the HTTP method (e.g., 'GET', 'POST') and the URL of the server-side script or resource you want to interact with. The request type is determined by the HTTP method you specify (e.g., 'GET' for retrieving data, 'POST' for submitting data).

//#---------------------------------------------------------------
//* Q3: what is difference between responseHeader and requestHeader  in an XMLHttpRequest?

//* 1: requestHeaders:
// This property contains the headers that are sent in the request to the server. You can set request headers using the setRequestHeader() method before sending the request. Request headers typically include information such as the content type of the request body, authentication tokens, and custom headers required by the server.
//* Example:
xhr.setRequestHeader("Content-Type", "application/json");

//* 2: responseHeaders:
// This property contains the headers that are received in the response from the server. After receiving the response, you can access the response headers using the getResponseHeader() method to retrieve the value of a specific header or the getAllResponseHeaders() method to retrieve all headers as a single string.
//* Example 1:
// const contentType = xhr.getResponseHeader("Content-Type");

//* Example 2:
// const xhr = new XMLHttpRequest();
// xhr.open('GET', '/data', true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       const contentType = xhr.getResponseHeader('Content-Type');
//       console.log('Content-Type:', contentType);
//     } else {
//       console.error('Request failed with status:', xhr.status);
//     }
//   }
// };
// xhr.send();

//#----------------------------------------------------------------
//* Q4: what is difference between Preview and Response tab in the Network tab of browser developer tools?

//* 1: Preview tab:
// The "Preview" tab typically shows a rendered or formatted view of the response content. For example, if the response is HTML, the "Preview" tab will show the rendered HTML content, similar to how it would appear in a browser. If the response is JSON, the "Preview" tab might show a collapsible tree view of the JSON data, making it easier to navigate and understand the structure of the data.

//* 2: Response tab:
// The "Response" tab shows the raw, unprocessed response content exactly as it was received from the server. This tab is useful for viewing the raw data, especially when the response is not text-based (e.g., binary data, images, etc.). It allows you to inspect the actual content of the response without any interpretation or formatting applied by the browser.

// In summary, the "Preview" tab provides a formatted view of the response content for easier readability, while the "Response" tab shows the raw, unprocessed response content for detailed inspection. The choice of which tab to use depends on your specific needs and the nature of the response content.
