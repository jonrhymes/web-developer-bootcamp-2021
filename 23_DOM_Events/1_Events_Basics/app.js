// events
// click, drag, drop, hover, scroll, keystrokes

const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKS")
}

function scream() {
    console.log("AAAAHHHHH")
    console.log("STOP TOUCHING ME")
}

// doesn't execute it - scream() - but gives that responsibility to the on mouse enter event
btn.onmouseenter = scream;

// must wrap events in a function, otherwise it will execut right away
document.querySelector('h1').onclick = function() {
    console.log("H1 clicked")
}


// addEventListener
// pass in any sort of event as a string. the second argument is the callback function

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function() {
    alert("Double Clicked!");
}) 

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// can't do the following because the last function overwrites the first. must use addEventListener for more than one callback functions
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true}) // can pass options like 'once' where after it runs once it gets removed
tasButton.addEventListener('click', shout)


const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

function hello_there() {
    console.log('hello');
}

function goodbye_now() {
    console.log('goodbye')
}


hello.addEventListener('click', hello_there);
goodbye.addEventListener('click', goodbye_now)