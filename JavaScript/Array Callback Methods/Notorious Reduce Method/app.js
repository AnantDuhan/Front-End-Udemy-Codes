const person = {
    firstName: 'Anant',
    lastName: 'Duhan',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(function() {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}