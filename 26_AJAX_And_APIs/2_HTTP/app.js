// HTTP Verbs
// GET - retrieves information
// POST - sends information

// free Postman = https://hoppscotch.io/

// star wars api = https://swapi.dev/


// HTTP Status Codes:

// 200 = OK (request succeeded)
// 201 = Created (post succeeded)

// 300: Redirect codes

// 400: Client-side codes
// 404 = Not Found (request failed)

// 500: Server-side errors
// 500 = Internal Server Error


// Query string
// base URL must be exact, query params can be anything - API doesn't care
// https://swapi.dev/api/people/5?color=green&age=23&silly=yes


// TV API: https://api.tvmaze.com/
// GET > https://api.tvmaze.com/search/shows?q=twin


// HTTP Headers: application/json, text/plain

// XHRs (XML Http Request): original way of sending requests via JS. Can't use Promises, so lots of callbacks

// empty request object
const req = new XMLHttpRequest();

// attach callback 1
req.onload = function() {
    console.log("IT LOADED!");
    // this.responseText is one big string, so you have to make it a JSON object
    const data = JSON.parse(this.responseText);
    // console.log(data);
    console.log(data.name, data.hair_color);
};

// attach callback 2
req.onerror = function() {
    console.log("ERROR!");
    console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();