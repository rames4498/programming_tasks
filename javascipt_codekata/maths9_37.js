const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
    
var N = parseInt(userInput[0]);
var arr = userInput[1].split(" ").map(Number);
var L = arr[0];
var R = arr[1];
let count = 0;
//console.log(N.length);
for (var i=L; i<=R; i++){
    if (N == i){
        console.log("yes");
        break;
    }
    else{
        count = count+1;
        //console.log("no");
    }
}
if (count == ((L+R)+1)){
    console.log("no");
}

});
    
