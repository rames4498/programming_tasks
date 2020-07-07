const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

var a,b,c;
inp.on("close", () => {

var arr = userInput[0].split(" ").map(Number);
a = arr[0];
b = arr[1];
c = arr[2];

if ((a**2)+(b**2) == (c**2)){
    console.log("yes");
}
else{
    console.log("no")
}

});