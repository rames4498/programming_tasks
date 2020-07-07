const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var data = userInput[0].split(" ");
var a = parseInt(data[0]);
var b = parseInt(data[1]);

var Num = 0, i, j,count ;
if (a<b)
{
for (i = a; i <= b; i++) 
 {
    console.log(i);
    count = 0;
    for (j =1; j < i; ++j)
    {
        //console.log(j);
        if (i%j == 0){
            count++;
        }
    
    if (count >= 2){
        console.log(count);
     }
    else{
        //console.log(Num++);
     }
    }
 }
//console.log(Num);    
}

});
