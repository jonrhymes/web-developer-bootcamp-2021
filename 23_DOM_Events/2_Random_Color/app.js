const btn = document.querySelector('#clr');
const h1 = document.querySelector('h1');
const bg = document.querySelector('body');
const disco = document.querySelector('#disco');
const nodisco = document.querySelector('#nodisco');

function change() {
    // console.log("changed");
    const newColor = makeRandomColor();
    bg.style.backgroundColor = newColor;
    h1.innerText = newColor;
}

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    const sum = r + g + b;
    console.log(sum);
    if(sum < 318) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`;
}


// sum values
// if values > 50/100 give it a white color

btn.addEventListener('click', change);

let disc = false; 
function discogo() {
    clearInterval(disc);
    if(disc !== false) {
        disc = false;
    } else {
        disc = window.setInterval(function() {
            change();
        }, 400);
    }
}

disco.addEventListener('click', discogo);

nodisco.addEventListener('click', function() {
    clearInterval(disc);
})