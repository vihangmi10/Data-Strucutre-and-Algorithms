// Mimic the Math.pow() function
// base - 2 exponent 3 i.e. 2 * 2 * 2 = 8

function power(base, exponent) {
    if(exponent === 0) return 1;
    return base * (power(base, exponent - 1));
}
console.log(power(3, 3));