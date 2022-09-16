// spread in object literals
// copies properties from one object into another object literal

const feline = {
    legs: 4,
    family: 'Felidae'
}
const canine = {
    isFurry: true,
    family: 'Caninae'
}

// add new key-value
const addColor = {...feline, color: 'black'};

const allPets = {...feline,...canine};
console.log(allPets); // { legs: 4, family: 'Caninae', isFurry: true } 
// family overwrites based on last 'family'

const indexArraySpread = {...[2,4,6,8]};
console.log(indexArraySpread); // { '0': 2, '1': 4, '2': 6, '3': 8 }

const indexStringSpread = {..."HELLO"};
console.log(indexStringSpread); // { '0': 'H', '1': 'E', '2': 'L', '3': 'L', '4': 'O' }


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id: 2345, isAdmin: true}

console.log(newUser);