// defining a functions

const square = function(x) {
    return x * x;
};

console.log(square(12));
// → 144

const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));
// → 1024

// Bindings and scopes
let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // → 60
}

// y is not visible here
console.log(x + z);
// → 40

const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

// Functions as values

let launchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() {
        /* do nothing */
    };
}

// Arrow functions
// multiple value
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

// single value
const square1 = x => {
    return x * x;
};
const square2 = x => x * x;

// empty perenthasis
const horn = () => {
    console.log("Toot");
};
