const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odd = nums.filter(n => {
    return n % 2 === 1; // our callback returns true or false
    // if it returns true, n is added to the filtered array
})
// [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5)
// [4, 3, 2, 1]


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const goodMovies = movies.filter(movie => {
    return movie.score > 80
})