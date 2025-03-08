//# DOUBTS
// 1: what are the things that we can pass into the fetch() API.
//* Reference: Coder's Gyan: https://youtu.be/D5WkKTorCqo?si=jCSvjZ8BPnNggoh-
//* fetch() API MDN Study Link: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
//#-----------------------------------------------------------------------

const url = "https://jsonplaceholder.typicode.com/users";

/*
//#  Method 2: Making a http Request Using fetch() API.
const myAxios = (method, url) => {
  //✅1: in fetch() the default request method is 'GET', so if we are making a 'GET' request we can avoid writing the 'GET' in fetch().
  //✅2: The XMLHttpRequest() did not return a Promise, but we explicitly returned the Promise, but the fetch() method returns Promise by default.
  return fetch(url).then((res) => {
    //? Read the response as text.
    return res.text();

    //? Read the response as json.
    // return res.json();
  });
};

//* Calling myAxios function
myAxios("GET", url)
  .then((res) => {
    // console.log(res.text()); // why we can't parse our data here data after calling the myAxios() function, why we return the parsed the data from the fetch() API only 
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//* Parsing the plain/text into a xml document.
myAxios("GET", url)
  .then((xmlString) => {
    // Parse the XML string into an XML document
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    // Handle the XML document
    console.log(xmlDoc);
  })
  .catch((err) => {
    console.log(err);
  });
*/

//#------------------------------------------------------------------
//# Doing POST Request with fetch() API:
const myAxios = (method, url, body = null) => {
  //* Creating headers
  const headers = {
    "Content-Type": "application/json",
  };
  return fetch(url, {
    method: method,
    headers: headers, // here we passing our own header to the server.
    body: JSON.stringify(body),
  }).then((res) => {
    //? Read the response as text
    // return res.text();

    //? Read the response as json.
    return res.json();
  });
};

//* Calling myAxios function with 'POST' request:
myAxios("POST", url, { name: "Hameed", Job: "Web Developer" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//* NOTE:
// in fetch() API the most important feature is 'body' of 'response object', which recive the data from the server in the form of ReadableStream which is very helpful for large data.
