let radius = 8;
// blocks includes of conditions(most commonly) and loops
if(radius > 0) {
    const PI = 3.14159;
    let circ = 2 * PI * radius;
    // Pi and circ are scoped to BLOCK
}

console.log(radius);    // 8
console.log(PI);    // NOT DEFINED
console.log(circ);  // NOT DEFINED
