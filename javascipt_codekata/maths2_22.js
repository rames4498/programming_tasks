const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
var arr=  userInput[0].split(" ").map(Number);
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log((a*b)%c);

});
    
