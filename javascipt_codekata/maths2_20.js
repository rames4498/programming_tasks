const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
var arr =  userInput[0].split(" ").map(Number);
var N,M;
N = arr[0];
M = arr[1];
if ((N && M) >0) {
if (N === M){
    console.log('yes');
    }
else{
    console.log('no'); 
    }
}

});
    
