// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
    // setTimeout(() => {
    //     document.body.style.backgroundColor = "orange";
        // setTimeout(() => {
        //     document.body.style.backgroundColor = "yellow";
        // }, 3000)
    // }, 2000)
// }, 1000)


// need to pass in a callback - doNext
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

// nesting - passing in function
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('violet', 1000, () => {

                    })
                })
            })
        })
    })
})

// this resembles common practices of nesting functions and running if something happens or doesn't - referred to as 'callback hell'