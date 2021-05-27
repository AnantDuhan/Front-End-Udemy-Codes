function outer() {
    let hero = "Black Panther";

    function inner() {
        let cryToGetHelp = `${hero}, please save me`
        console.log(cryToGetHelp);
    }
    inner();
}

function bankRobbery() {
    const heroes = ['Spiderman', 'Black Panther', 'Hulk', 'Iron Man']
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP ME, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}