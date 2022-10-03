const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('input', function(e) {
    // console.log("INPUT!")
    h1.innerText = input.value;
})


const userh1 = document.querySelector('#enter');
const userInput = document.querySelector('#username')

userInput.addEventListener('input', function(e) {
    userh1.innerText = `Welcome, ${userInput.value}!`;
    if(userInput.value == '') {
        userh1.innerText = 'Enter Your Username';
    }
})

