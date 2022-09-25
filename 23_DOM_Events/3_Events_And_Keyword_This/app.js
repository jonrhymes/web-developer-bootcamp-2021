
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    // button.addEventListener('click', function() {
    //     // console.log("CLICKED!");
    //     button.style.backgroundColor = makeRandomColor();
    //     button.style.color = makeRandomColor();
    // })
    button.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');
for(let h1 of h1s) {
    // replace with callback function
    // h1.addEventListener('click', function() {
    //     h1.style.backgroundColor = makeRandomColor();
    //     h1.style.color = makeRandomColor();
    // })
    h1.addEventListener('click', colorize);
}

// use keyword this so no code gets repeated
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}