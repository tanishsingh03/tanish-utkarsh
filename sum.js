function sum(a, b) {
    if(typeof a === 'string') {
        a = parseInt(a, 10);
    }
     if(typeof b === 'string') {
        b = parseInt(b, 10);
    }

    return a + b;
}
console.log(sum(2)); // Output: 5
module.exports = sum;
