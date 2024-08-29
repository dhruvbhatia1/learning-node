console.log("Sum module executed");

// modules protect their variables from leaking

const sum = (a, b) => a + b;

module.exports = sum;