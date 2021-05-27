const myMath = {
    PI = 3.14159,
    square(num) {
        return num * num;
    },
    
    cube(num) {
        return num ** 3;
    }
}


// keyword 'this'

const person = {
    first: 'Anant',
    last: 'Duhan',
    fullName() {
        return `${this.first} ${this.last}`
    }
}
person.fullName();
person.last = 'Chaudhary';
person.fullName();