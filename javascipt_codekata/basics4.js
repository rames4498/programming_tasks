const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

var data = [], arr;
inp.on("close", () => {
var data = userInput[0].split(" ");
var arr = userInput[1].split(" ");
var N = parseInt(data[0]);
var K = parseInt(data[1]);

if (K in arr){
    console.log("yes")
}
else{
    console.log("no")
}

});