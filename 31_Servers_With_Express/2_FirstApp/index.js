const express = require("express");
const app = express();
const port = 3000;

// console.dir(app);

// express includes request and response
// takes http request (just info) and turns it into an object
// app.use((req, res) => {
//     // console.log("WE GOT A NEW REQUEST!");
//     // console.dir(req);
//     // res.send("HELLO. WE GOT YOUR REQUEST. THIS IS A RESPONSE"); // send string

//     // res.send({favorite_color: 'green', name: 'arlo', age: "6 months"}); // send json

//     // res.send("<h1>This is my webpage</h1>"); // send html
// })

// express routing
// /cats => 'meow'
// /dogs => 'woof'
// '/' => 'welcome to my homepage'

app.get('/', (req, res) => {
    res.send("Welcome to my homepage")
})

app.get('/cats', (req, res) => {
    console.log("cat request");
    res.send("<h1>MEOW</h1>");
});

app.post('/cats', (req, res) => {
    res.send("POST REQUEST HANDLED")
})

app.get('/dogs', (req, res) => {
    console.log("dog request");
    res.send("<h1>WOOF!</h1>");
});

// colons establish a pattern
app.get('/r/:subreddit/:postId', (req, res) => {
    // access to what that `:subreddit` is can be found in req - a property called params 
    console.log(req.params);
    const {subreddit, postId} = req.params; // takes it out of the object
    res.send(`<h1>Viewing PostId: ${postId} on the ${subreddit} subreddit</h1>`);
    // res.send(`this is a subreddit`);
})

// * = get everything
// if this were at the top of the .get chain, it would prevent access to other routes because every path would match the asterisk, as it's first that checks the routes. so add last.  
app.get('*', (req, res) => {
    res.send("I don't know that path")
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
