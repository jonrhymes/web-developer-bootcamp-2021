// double equals (==)
// - checks for equality of value, not not equality of type
// - coerces both values to the same type and then compares them
// - leads to unexpected results

1 == 1 // true
1 == '1' // true, one is a number and one is a string
'b' == 'c' // false

// weirdness
0 == ''; // true
true == false; //false
0 == false; // true
1 == true; // true
null == undefined; // true


// triple equals (===)
// - checks for equality of value and type
// - strict equality and non-equality

5 === 5; // true
1 === 2; // false
2 === '2'; // false
false === 0; // false

// same applies for != and !==
10 != '10'; // false
10 !== '10'; // true