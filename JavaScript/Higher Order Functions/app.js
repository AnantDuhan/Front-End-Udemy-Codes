// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)

function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        return function() {
            console.log("CONGRATS, I'm Good")
            console.log("CONGRATS, I'm an excellent coder")
        }
    } else {
        return function() {
            alert("You are an outstanding coder")
            alert("Close this window")
        }
    }
}


function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max
    }
}

const testRange = function(num) {
    ret
}

// makeBetweenFunc(5, 10) 

// function isBetween(num) {
//     return num >=50 && num <= 100
// }

// function isBetween2(num) {
//     return num >=1 && num <= 10
// }