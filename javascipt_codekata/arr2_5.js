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
var N =  parseInt(userInput[0]);
var arr = userInput[1].split(" ").map(Number);

for (i=0; i<arr.length; i++){
    sum = sum+arr[i];
    
//console.log(arr[i]);
}
//console.log(sum);
if (((sum%2)===0 && (sum%3)===0 && (sum%5)===0)){
    console.log("1");
}
else{
    console.log("0");
}
});