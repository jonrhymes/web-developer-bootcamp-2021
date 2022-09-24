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

// get current styles. actual element object in the DOM.
// CSSStyleDecoration
console.log(window.getComputedStyle(h1));
console.log(window.getComputedStyle(h1).color);
console.log(window.getComputedStyle(h1).fontSize);


// classList
const h2 = document.querySelector('h2');
h2.setAttribute('class', 'purple');
h2.getAttribute('class'); // purple

h2.classList.add('border'); // add
h2.classList.remove('border'); // remove
h2.classList.contains('border'); // false
h2.classList.toggle('purple'); // if it's there, it removes it
h2.classList.toggle('purple'); // if it's not there, it adds it


// traversing parent/child/sibling
// every child has one direct parent
const firstBold = document.querySelector('b');
console.log(firstBold); // <b>Silkie</b>
console.log(firstBold.parentElement); // <p>...</p>
console.log(firstBold.parentElement.parentElement); // <body>...</body>
console.log(firstBold.parentElement.parentElement.parentElement); // <html lang="en">...</html>


// children
const paragraph = firstBold.parentElement;
console.log(paragraph.children); // HTMLCollection(8) [b, b, a, a, a, a, a, a] (NOT AN ARRAY... but it is iterable)
console.log(paragraph.children[0]); // <b>Silkie</b>


// sibling
// previous and next sibling
const squareImg = document.querySelector('.square');
squareImg.parentElement // body
squareImg.children // HTMLCollection[]
console.log(squareImg.nextSibling) // #text : gives a node because it is a new line white space (NOT AN HTML ELEMENT)
console.log(squareImg.nextElementSibling) // img.square
console.log(squareImg.previousElementSibling) // <p>...</p>


// append & appendChild
// appendChild
const newImg = document.createElement('img');
console.dir(newImg) // missing source
newImg.src = "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
document.body.appendChild(newImg); // appends as last child of body
newImg.classList.add('square');

const newH3 = document.createElement('h3'); // makes a shell
newH3.innerText = "I am new!";
document.body.appendChild(newH3);


// append allows for more than one append
const p = document.querySelector('p'); 
p.append("i am new text!!!!! ", 'asdlk;jgoihgwen') // appends to the inside of paragraph, adds at end

// prepends insert at the beginning to a paragraph
const newB = document.querySelector('b');
newB.append("Hi!!!")
p.prepend(newB);


// insertAdjacentElement
const h2New = document.createElement('h2');
h2New.append("Isn't my dog adorable?");
const h1New = document.querySelector('h1');
h1New.insertAdjacentElement('afterend', h2New);

const h3z = document.createElement('h3');
h3z.innerText = "I am h3";
h1.after(h3z);


// remove & removeChild
// removeChild
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
console.log(ul);
ul.removeChild(firstLi);

// remove
const img2 = document.querySelector('img');
img2.remove();
img2.parentElement.removeChild('img'); // same way