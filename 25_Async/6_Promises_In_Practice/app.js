
// const request = fakeRequestPromise('yelp.com/api/coffee/page1')
// .then(() => {
//     console.log("IT WORKED!!! (page 1)");
//     fakeRequestPromise('yelp.com/api/coffee/page2')
//         .then(() => {
//             console.log("IT WORKED!!! (page 2)");
//             fakeRequestPromise('yelp.com/api/coffee/page3')
//                 .then(() => {
//                     console.log("IT WORKED!!! (page 3)");
//                 }).catch(() => {
//                     console.log("OH NO, ERROR!!! (page 3)");
//                 })
//         })
//         .catch(() => {
//             console.log("OH NO, ERROR!!! (page 2)");
//         })
// })
// .catch(() => {
//     console.log("OH NO, ERROR!!! (page 1)");
// })

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}


// same idea as the function above but you can make as many request as you want

// promise chaining
// promises are resolved or rejected with values
const request = fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log("IT WORKED!!! (page 1)");
        console.log(data);
        // what's different with a Promise is the added return statement. A .then can be chained on after it's been returned
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log("IT WORKED!!! (page 2)");
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log("IT WORKED!!! (page 3)");
        console.log(data);
    })
    // uses only ONE .catch to return errors
    .catch((err) => {
        console.log("OH NO, A REQUEST FAILED!!!");
        console.log(err);
    })

console.log(request);