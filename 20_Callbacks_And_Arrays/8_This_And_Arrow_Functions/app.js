// keyword 'this' behaves differently inside arrow functions

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function() {
        return `${this.firstName} ${this.lastName}` // 'Viggo Mortensen'
        // has to do with how the function is executed
    },
    fullNameArrow: () => {
        // console.log(this); // {}
        // has to do with where the function is defined
        return `${this.firstName} ${this.lastName}` // 'undefined undefined'
    },
    shoutName: function() {
        setTimeout(function() { // setTimeout as a function is a method on the window!
            console.log(this.fullName()); // returns error
        }, 3000)
    },
    shoutNameArrow: function() {
        setTimeout(() => { // setTimeout as an arrow function works!
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}

console.log(person.fullName());
// console.log(person.fullNameArrow()); // error
// console.log(person.shoutName()); // error
console.log(person.shoutNameArrow());