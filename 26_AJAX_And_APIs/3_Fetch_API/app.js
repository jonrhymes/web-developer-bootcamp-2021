// fetch API
// newer way of making requests via JS
// supports Promises

// fetch sends a request to the server and returns a Promise
fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("RESOLVED!", res)
        // res.json().then((data) => console.log("JSON DONE", data));
        // OR:
        return res.json(); // returns a Promise
    })
    // chain on .then() - all linear, all flattened
    .then((data) => { 
        console.log(data);
        return fetch("https://swapi.dev/api/people/2")
    }).then((res) => {
        console.log("SECOND REQUEST RESOLVED!", res);
        return res.json();

    })
    .catch((e) => {
        console.log("ERROR", e)
    });


// better way is to use async function
const loadStarWarsPeople = async() => {
    try {
        const res = await fetch("https://swapi.dev/api/people/3");
        const data = await res.json();
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/4");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("ERROR", e);
    }
}

loadStarWarsPeople();