const div = document.querySelector('#container');
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.width = '50%';

for(let i = 1; i <= 100; i++) {
    const button = document.createElement('button');
    button.innerText = "LOOK " + i;
    div.appendChild(button);
}