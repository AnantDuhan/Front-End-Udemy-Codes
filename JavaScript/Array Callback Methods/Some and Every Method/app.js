const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// are there any words longer than 4 characters?
words.some(word => {
    return word.length > 4;
})

// do any words start with 'Z'?
words.some(word => word[0] === 'Z'); //false

// do any words contain 'cake'?
words.some(w => w.includes('cake')) //true

words.every(word => {
    return word.length === 3;
}) // true

words.every(word => word[0] === 'd'); //false

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g';
}) // true