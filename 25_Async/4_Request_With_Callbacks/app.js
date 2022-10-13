// promise
// an object representing the eventual completion or failure of an asynchronous operation

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500
;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay)
}

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

/* example of a promise with resolve first and reject second  
makeRequest(() => {

},
() => {

})
*/


fakeRequestCallback('books.com/page1', 
    function(response) {
        console.log("IT WORKED!!!");
        console.log(response);
        fakeRequestCallback('books.com/page2',
            function (response) {
                console.log("IT WORKED AGAIN!!!");
                console.log(response);       
                fakeRequestCallback('books.com/page3',
                function (response) {
                    console.log("IT WORKED AGAIN 3!!!");
                    console.log(response);       
                },
                function (err) {
                    console.log("ERROR (3rd req)!!!", err);
                })
            },
            function (err) {
                console.log("ERROR (2nd req)!!!", err);
            }
        )
    }, function(err) {
        console.log("ERROR!", err);
    })