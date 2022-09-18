// selecting
// selectively apply on certain elements

// getElementById
// pass in a string that corresponds to some Id on an element
// ask for DOM object (not HTML) of that element with that Id

// document.getElementById('chicken') // returns null if value is not defined

// in DevTools, inspecting the browser
const banner = document.getElementById('banner');
console.dir(banner); // returns object

const toc = document.getElementById('toc');
console.dir(toc);


// Multiple elements selected at a time:
// returns a HTMLCollection

// getElementsByTagName
const allImages = document.getElementsByTagName('img');
console.dir(allImages); // NOT an array, but is iterable... 
for(let img of allImages) {
    console.log(img.src); 
    // can manipulate images like making them all the same:
    // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'; 
}


// getElementsByClassName
const squareImages = document.getElementsByClassName('square');

// can manipulate them
for(let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg'; 
}

// if you try to select something that isn't there, it doesn't return null. It returns an empty collection.
const notNull = document.getElementsByClassName('aslkdfjg');


// querySelector
// all-in-one method for selecting an element
// returns FIRST matching item found
const para = document.querySelector('p'); // HTML element
document.querySelector('#banner'); // id
document.querySelector('.square'); // class
document.querySelector('img:nth-of-type(2)'); // complex chaining
document.querySelector('a[title="Java"]'); // select attribute


// querySelectorAll
// returns a collection of matching elements
const links = document.querySelectorAll('p a'); // anchor tags inside of paragraphs (descendents selector)

for (let link of links) {
    console.log(link.href);
}