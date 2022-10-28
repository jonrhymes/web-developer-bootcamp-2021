// extends and super = subclassing, inheretance
// sharing functionality between classes

// base Class
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }

}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        // super is a reference to the super class > Parent class
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWW!';
    }   
}

class Dog extends Pet {
    bark() {
        return 'WOOF!';
    }
    eat() { // will use <-THIS version of eat when Class is created, instead of the Pet version
        return `${this.name} scarfs his food`;
    }
}

// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     meow() {
//         return 'MEOWWW!';
//     }
// }

const monty = new Cat("Monty", 9);
console.log(monty);
// console.log(monty.eat());

// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     bark() {
//         return 'WOOF!';
//     }
// }

const sadie = new Dog("Sadie", 4);
console.log(sadie)
console.log(sadie.bark())
console.log(sadie.eat())


// both classes reuse the same functions so it's better to use a generic Class and EXTEND it