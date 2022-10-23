// axios
// a library for making http requests

axios.get("https://swapi.dev/api/people/4")
    .then((res) => {
        console.log("RESPONSE: ", res)
    })
    .catch((e) => {
        console.log("ERROR: ", e);
    });

// axios parses the data automatically and adds it to a "data" key


const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (e) {
        console.log("ERROR: ", e)
    }
}

getStarWarsPerson(10);

const jokes = document.querySelector("#jokes");
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);

// needs header for this API
const getDadJoke = async () => {
    try {
        const config = { 
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get("https://icanhazdadjoke.com", config);
        // console.log(res.data.joke)
        return res.data.joke;
    } catch (e) {
        console.log("ERROR", e)
        return "NO JOKES AVAILABLE. SORRY!";
    }

}

