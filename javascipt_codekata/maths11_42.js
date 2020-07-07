const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});

inp.on("close", () => {
    
// Total surface area of a cuboid =    2(lb + bh + hl)
//Volume of a cuboid = length × breadth × height.
var arr = userInput[0].split(" ").map(Number);
var L = arr[0];
var B = arr[1];
var H = arr[2];

var tsa = 2*((L*B)+(B*H)+(H*L));
var vol = L*B*H;
console.log(tsa,vol);
});