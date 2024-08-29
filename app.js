const obj = require("./calculate"); 

// console.log(global);
// console.log(this);
// console.log(globalThis);

console.log(obj.sum(2, 3)); // 5 
console.log(obj.multiply(2, 3)); // 6

(function () {
    console.log("Hello");
})(); // this is an IIFE - Immediately Invoked Function Expression