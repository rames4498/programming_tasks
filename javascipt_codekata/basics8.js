const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

var data,i, sum;

inp.on("close", () => {
var k =  parseInt(userInput[0]);
let sum = 0;
//var val = data.map(Number);
for (i=1; i<=k; i++){
   sum = sum + i;
}
console.log(sum);
});