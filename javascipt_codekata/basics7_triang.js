const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

var data,b,h,area;

inp.on("close", () => {
var data =  userInput[0].split(" ");
var val = data.map(Number);

//console.log(val);

b = val[0];
h = val[1];
area = ((b*h)/2);
console.log(area);
});