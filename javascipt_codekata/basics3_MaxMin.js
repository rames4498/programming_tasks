const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

var data, arr;

inp.on("close", () => {
    
var data = parseInt(userInput[0]);

var arr = userInput[1].split(" ").map(Number);
//console.log(arr);

var min = arr[0];
var max = arr[0];
for (var k = 1; k < arr.length; k++) {
  if (arr[k] < min) {
    min = arr[k];
    //since one based indexing 
    var Minindex = arr.indexOf(min);
  }
  if (arr[k] > max) {
    max = arr[k];
     var Maxindex = arr.indexOf(max);
    //since one based indexing 
  }
 
}
console.log(Maxindex, Maxindex);

});
