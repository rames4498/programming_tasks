const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

var maxi, mini,diffIndex;
//var count = 0;

inp.on("close", () => {
var N =  parseInt(userInput[0]);
var arr = userInput[1].split(" ").map(Number);
/**
for (var i = 0; i<arr.length; i++){
console.log(typeof(arr[i]));
}**/
maxi = Math.max(...arr);
mini = Math.min(...arr);
diffIndex = console.log(arr.indexOf(maxi)-arr.indexOf(mini));

});