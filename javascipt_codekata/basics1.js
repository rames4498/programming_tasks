const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var data = userInput[0].split(" ");
var a = parseInt(data[0]);
var b = parseInt(data[1]);
 
console.log(a**b);
});
