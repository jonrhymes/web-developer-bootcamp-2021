let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;

// don't want to have to write this over and over again, so use a function

let die6 = rollDie(); // modular, reusable 
let die7 = rollDie(6); // functions accepts an input