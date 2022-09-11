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