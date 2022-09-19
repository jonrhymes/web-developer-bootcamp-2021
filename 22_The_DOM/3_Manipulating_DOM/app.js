// innerText
const text = document.querySelector('p').innerText;
console.dir(text);

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'; 
    link.style.color = 'rgb(10, 108, 13)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// use JS to update the text
// document.querySelector('p').innerText = 'lolololol';

// textContent
const txtcontent = document.querySelector('p').textContent;
// shows every element including hidden elements
console.dir(txtcontent);

// innerHTML
// shows all the tags
const par = document.querySelector('p').innerHTML;
console.dir(par); 
// The <b>Silkie</b> (sometimes spelled <b>Silky</b>)

const setHTML = document.querySelector('h1').innerHTML = "<i>SILKY SMOOTH</i>";
console.dir(setHTML); 

// can also do +=
const superscript = document.querySelector('h1').innerHTML += "<sup>n+100</sup>";
console.dir(superscript); 


// attributes
// id and class, input type are considered attributes
const firstLink = document.querySelector('a');
console.log(firstLink.href) // file:///wiki/List_of_chicken_breeds
console.log(firstLink.getAttribute('href')) // /wiki/List_of_chicken_breeds

// find the id on the link
console.log(firstLink.getAttribute('id')) 
// see if there's a class attribute
console.log(firstLink.getAttribute('class'))
console.log(firstLink.getAttribute('title')) // List of chicken breeds

// setAttribute
firstLink.setAttribute('href', 'http://www.google.com');


const input = document.querySelector('input[type="text"]')
// change input type
input.type = 'color';

// change style
// styles are camelCase, not hyphenated
const h1 = document.querySelector('h1');

console.log(h1.style.color) // returns "", empty string because it only affects IN-LINE STYLES 


h1.style.color = 'green';
h1.style.border = '4px solid pink';