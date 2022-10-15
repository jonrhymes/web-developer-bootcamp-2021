// async functions
// newer, cleaner syntax for working with async code - syntax "sugar"

// async functions always return a promise

// if the function returns a value, the promise will be resolved with that value

// if the function throws an exception, the promise will be rejected

async function hello(){

}

const sing = async () => {
    throw new Error('OH NO, ERROR') // if an error is throw, the promise is automatically REJECTED
    // return 'LALALALA'; // if a value is returned, the promise is automatically RESOLVED
}

// .then(data) passes the returned value
sing()
    .then((data) => {
        console.log("PROMISE RESOLVED WITH", data);
    })
    .catch(err => {
        console.log('OH NO, PROMISE REJECTED!')
        console.log(err)
    })


const login = async (username, password) => {
    if(!username || !password) throw 'Missing credentials'
    if(password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('asdflkj')
    .then(msg => {
        console.log('LOGGED IN!')
        console.log(msg)
    })
    .catch(err => {
        console.log('ERROR')
        console.log(err)
    })