// templating defines a pattern that can be reused and dynamically modified. webpage is created on the fly 

const express = require("express");
const app = express();
const path = require("path"); // imported to be able to start nodemon outside of pwd

app.set('view engine', 'ejs'); // must create a directory called 'views' - which the app searches for
app.set('views', path.join(__dirname, '/views'));

// to be able to start nodemon index.js outside of the current working directory (node>process.cwd() or process.env.PWD) e.g. one level up from 1_Templating folder 

app.get('/', (req, res) => {
    // res.send("HI");
    res.render('home'); // looks for home.ejs in view directory. ejs uses html. you do not need .ejs file extension
});

// ejs syntax - <%= [HTML] %>
app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // pass into page as an object
    res.render('random', { rand: num });
});


app.listen(8080, () =>{
    console.log(`Listening on 8080!`);
});
