const express = require("express");
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'plz delete yr account, todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof woof'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    // console.log(req.body);
    // res.send('POST WORKED')
    const { username, comment } = req.body;
    comments.push({ username, comment});
    res.send("new comment worked")
});

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    console.log(req.body);
    const {qty, meat} = req.body;
    // res.send("POST /tacos response");
    res.send(`OK here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log("Listening on Port 3000");
});