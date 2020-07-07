const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {

var arr = userInput[0].split(" ").map(Number);
var prod = 1;
for (var i =0; i <arr.length; i++){
    prod = prod*arr[i];

}
console.log(prod);
});