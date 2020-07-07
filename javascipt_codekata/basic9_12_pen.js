const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

//var data,i, sum;
var count = 0;

inp.on("close", () => {
var N =  parseInt(userInput[0]);
var arr = userInput[1].split(" ").map(Number);
var L = arr[0];

var R = arr[1];

//let sum = 0;
//var val = data.map(Number);
for (var i=L+1; i<R; i++){
   if (i == N){
       console.log("yes");
       break;

   }
   else{
       // count++;
       
   }

}
if (count == (R-N)){
    console.log("no")
}**/

});