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
var c = arr[0]+arr[1]; 
if (c>1){
    if (c%2 == 0){
        console.log('even');
        }
    
    else{
        console.log('odd');
        }
}
});