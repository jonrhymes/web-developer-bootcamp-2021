const form = document.querySelector('#shelterForm');
const input = document.querySelector('#dogName');
const list = document.querySelector('#dogs');

// prevent default
form.addEventListener('submit', function(e) {
    e.preventDefault(); // don't go to new page, a normal thing that happens
    // console.log("SUBMITTED")
    console.log(input.value);
    const dogName = input.value;
    const newLI = document.createElement('li');
    newLI.innerText = dogName;
    list.append(newLI);
    input.value = '';
})
