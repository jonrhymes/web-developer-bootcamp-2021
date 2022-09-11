// 'this' keyword in methods
// use the keyword this to access other properties on the same object

const dog = {
    name: 'Sadie Thornsberry',
    color: 'reddish brown',
    breed: 'Australian Kelpie, Labrador mix',
    bark() {
        console.log("Woof! Woof! Grrrr");
    },
    call() {
        console.log(`C'mere ${this.name}`)
    }
}

dog.call()

// value of 'this' can change depending on the invocation context of the function it is used in

// function is actually added to window, which is an object itself and contains numerous functions

// THIS is the default value of the window


/*
Egg Laying Exercise
Define an object called hen.  It should have three properties:

name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
*/

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG"
    }
}

console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);