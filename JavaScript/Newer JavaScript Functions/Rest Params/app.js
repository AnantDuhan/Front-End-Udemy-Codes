function sumAll() {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}
sumAll(8, 4, 3, 2); // 17
sumAll(2, 3); // 5