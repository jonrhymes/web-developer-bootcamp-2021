// spread in array literals
// creates a new array using an existing array
// spreads the elements from one array into a new array

const cats = ['Bella', 'Maisy', 'Coop'];
const dogs = ['Rex', 'Bear', 'Sadie'];

const allPets = [...dogs,...cats,'Zippy'];
console.log(allPets);

console.log([..."hello"]) // [ 'h', 'e', 'l', 'l', 'o' ]