const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

var count = 0;
inp.on("close", () => {

var val = parseInt(userInput[0]);
for (var i = 1; i<=val; i++ ){
    if (val%i == 0){
    count++    
    }
    
}
if (count>2){
    console.log("yes");
    }
else{
    console.log("no");
}
});