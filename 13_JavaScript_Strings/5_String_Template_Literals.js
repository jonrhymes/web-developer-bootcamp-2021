let product = 'Artichoke';
let price = 2.25;
let qty = 5;

// basic method
console.log("You bought " + qty + " " + product + ". Total is: " + price * qty);


// template literals
// are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string

// embed variables inside a string

console.log(`I counted ${3 + 4} sheep`); // 'I counted 7 sheep'

// must have back-ticks ``, usually above the tab key

// dollar sign + curly braces: ${}

console.log(`You bought ${qty} ${product}s. Total is $${price * qty}`);

// chain methods
console.log(`You bought ${qty} ${product.toUpperCase()}. Total is $${price * qty}`);