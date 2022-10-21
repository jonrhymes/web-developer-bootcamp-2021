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


// await keyword
// commonly used inside functions that declare async
// await will pause the execution of the function, waiting for a promise to be resolved

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// add await to every function so nothing else runs until the promise is resolve
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!" // because this is being returned, it can then be awaited later
}

// rainbow().then(() => console.log("END OF RAINBOW"))

// alternatively...
async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW")
}

printRainbow();



const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


// handling errors in async functions
// try and catch
async function makeTwoRequests() {
    try {
        // can store value of the Promise in a variable - very common
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}

