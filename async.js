const { log } = require('console');
const fs = require('fs');
const https = require('https');

console.log("Hello World");

var a = 107890;
var b = 2048

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data from the URL");
});

setTimeout(() => {
    console.log("Timeout completed");
}, 2000);

// fs.readFileSync('./file.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

fs.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log(data);
});

function multiply(a, b) {
    return a * b;
}

var c = multiply(a, b);

console.log(c);
    
