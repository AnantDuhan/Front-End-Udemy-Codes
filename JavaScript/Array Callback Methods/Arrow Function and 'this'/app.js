console.log("HELLO!!!")
setTimeout(() => {
    console.log(".....are you still there?")
}, 3000) 

const id = setInterval(() => {
    console.log(Math.random() * 6) + 1
}, 2000);