const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});


var sum=0,i;

inp.on("close", () => {
var N =  userInput[0].split(" ").map(Number);
var arr1 = userInput[1].split(" ").map(Number);
var arr2 = userInput[2].split(" ").map(Number);

console.log(arr1);
console.log(arr2);

var ascArr1 = arr1.sort();
var ascArr2 = arr2.sort();

console.log(ascArr2);
var desArr2 = ascArr2.reverse();

console.log(desArr2);
console.log(ascArr1);

console.log(ascArr1.concat(desArr2));

});