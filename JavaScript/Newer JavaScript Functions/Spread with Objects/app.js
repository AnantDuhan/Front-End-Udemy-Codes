const feline = { legs: 4, family: 'Felidae' }
const canine = { isFurry: true, family: 'Caninae' }

const catDog = { ...feline, ...canine}

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: '123', isAdmin: false}