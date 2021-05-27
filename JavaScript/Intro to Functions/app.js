function greet(firstName, lastName) {
    console.log(`hey there, ${firstName} ${lastName}`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i=0; i<numTimes; i++) {
        result += str;
    }
    console.log(result)
}

function add(x, y) {
    return x + y;
}