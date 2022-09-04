// break
// commonly used with while loops
// stops the execution of loop

let input = prompt("Hey, say something!");
while(true) {
    input = prompt(input);
    if(input.toLowerCase() === "stop copying me") break;
}
console.log("OKAY I'LL STOP");
alert("OKAY I'LL STOP");


for(let i = 0; i <= 1000; i++) {
    console.log(i);
    if(i === 100) break;
}