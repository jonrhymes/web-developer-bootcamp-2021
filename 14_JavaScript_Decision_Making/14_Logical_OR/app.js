// or
// if one side is true, the entire thing is true
// - ||

// true || true = true
// true || false = true
// false || true = true
// false || false = false

// AND (&&) takes precedence over OR (||)

console.log(1 !== 1 || 10 === 10); // true
console.log(10/2 === 5 || null); // true
console.log(0 || undefined); // false

// 0 - 5 free
// 5 - 10 $10
// 10 - 65 $20
// 65+ free

const age = 65;

// two logical operators working together
if( (age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE")
}

// use logical operators to find a range of numbers
